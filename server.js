require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const cors = require('cors');

const app = express();
const upload = multer({ 
    dest: 'public/uploads/',
    limits: { fileSize: 50 * 1024 * 1024 } 
});


// Database connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',          
    password: '200306990', 
    database: 'poetry_website',
    waitForConnections: true,
    connectionLimit: 10
});


pool.on('error', (err) => {
    console.error('MySQL pool error:',err);
});


app.use(cors());
app.use(express.json());
app.use(express.static('public'));

async function createAdmin() {
    try {
        console.log('[DEBUG] Environment variables:', {
            ADMIN_USERNAME: process.env.ADMIN_USERNAME,
            ADMIN_PASSWORD: process.env.ADMIN_PASSWORD
        });

        // Check if admin exists
        const [existingAdmin] = await pool.query(
            'SELECT * FROM users WHERE username = ? AND is_admin = TRUE',
            [process.env.ADMIN_USERNAME]
        );
        
        if (existingAdmin.length === 0) {
            if (!process.env.ADMIN_PASSWORD) {
                throw new Error('ADMIN_PASSWORD is not defined in environment variables');
            }
            
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, saltRounds);
            
            await pool.query(
                'INSERT INTO users (username, password_hash, is_admin) VALUES (?, ?, TRUE)',
                [process.env.ADMIN_USERNAME, hashedPassword]
            );
            console.log('Admin user created successfully');
        } else {
            console.log('Admin user already exists');
        }
    } catch (error) {
        console.error('Error creating admin:', error.message);
        throw error; 
}
}

// 1. Poetry Submission
app.post('/api/submit-poetry', upload.single('media'), async (req, res) => {
    const { title, author, submissionType, theme, content } = req.body;
    let mediaPath = null;

    if (req.file) {
        mediaPath =`/uploads/${req.file.filename}`;
    }

    try {
        await pool.query(
            `INSERT INTO poetry_submissions 
            (author_name, title, content, audio_path, video_path, theme, submission_type) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                author,
                title,
                submissionType === 'text' ? content : null,
                submissionType === 'audio' ? mediaPath : null,
                submissionType === 'video' ? mediaPath : null,
                theme,
                submissionType
            ]
        );
        res.json({ success: true });
    } catch (error) {
        console.error('Submission error:', error);
        res.status(500).json({ success: false });
    }
});

// 2. Admin Endpoints
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const [user] = await pool.query(
            'SELECT * FROM users WHERE username = ? AND is_admin = TRUE', 
            [username]
        );
        
        if (!user[0] || !(await bcrypt.compare(password, user[0].password_hash))) {
            return res.status(401).json({ success: false });
        }
        
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

app.get('/api/submissions', async (req, res) => {
    try {
        const [submissions] = await pool.query(
            `SELECT * FROM poetry_submissions 
            WHERE status = 'pending'
            ORDER BY submitted_at DESC`
        );
        res.json(submissions);
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

app.post('/api/approve/:id', async (req, res) => {
    try {
        await pool.query(
            `UPDATE poetry_submissions 
            SET status = 'approved', reviewed_at = NOW() 
            WHERE id = ?`,
            [req.params.id]
        );
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

app.post('/api/reject/:id', async (req, res) => {
    try {
        await pool.query(
            `UPDATE poetry_submissions 
            SET status = 'rejected', reviewed_at = NOW() 
            WHERE id = ?`,
            [req.params.id]
        );
        res.json({ success: true });
    } catch (error) {
        res.status(500).json({ success: false });
    }
});

// Initialize and start server
async function startServer() {
    await createAdmin();
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
}

startServer();
