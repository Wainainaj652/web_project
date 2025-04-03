document.addEventListener('DOMContentLoaded', function() {
    // Sample data for the website
    const poems = {
        featured: [
            {
                id: 1,
                title: "The Road Not Taken",
                author: "Robert Frost",
                excerpt: "Two roads diverged in a yellow wood, And sorry I could not travel both...",
                content: "Two roads diverged in a yellow wood,\nAnd sorry I could not travel both\nAnd be one traveler, long I stood\nAnd looked down one as far as I could\nTo where it bent in the undergrowth;\n\nThen took the other, as just as fair,\nAnd having perhaps the better claim,\nBecause it was grassy and wanted wear;\nThough as for that the passing there\nHad worn them really about the same,\n\nAnd both that morning equally lay\nIn leaves no step had trodden black.\nOh, I kept the first for another day!\nYet knowing how way leads on to way,\nI doubted if I should ever come back.\n\nI shall be telling this with a sigh\nSomewhere ages and ages hence:\nTwo roads diverged in a wood, and I—\nI took the one less traveled by,\nAnd that has made all the difference.",
                type: "written",
                theme: "life",
                image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 2,
                title: "Still I Rise",
                author: "Maya Angelou",
                excerpt: "You may write me down in history With your bitter, twisted lies...",
                content: "You may write me down in history\nWith your bitter, twisted lies,\nYou may trod me in the very dirt\nBut still, like dust, I'll rise.\n\nDoes my sassiness upset you?\nWhy are you beset with gloom?\n'Cause I walk like I've got oil wells\nPumping in my living room.\n\nJust like moons and like suns,\nWith the certainty of tides,\nJust like hopes springing high,\nStill I'll rise.\n\nDid you want to see me broken?\nBowed head and lowered eyes?\nShoulders falling down like teardrops,\nWeakened by my soulful cries?\n\nDoes my haughtiness offend you?\nDon't you take it awful hard\n'Cause I laugh like I've got gold mines\nDiggin' in my own backyard.\n\nYou may shoot me with your words,\nYou may cut me with your eyes,\nYou may kill me with your hatefulness,\nBut still, like air, I'll rise.\n\nOut of the huts of history's shame\nI rise\nUp from a past that's rooted in pain\nI rise\nI'm a black ocean, leaping and wide,\nWelling and swelling I bear in the tide.\n\nLeaving behind nights of terror and fear\nI rise\nInto a daybreak that's wondrously clear\nI rise\nBringing the gifts that my ancestors gave,\nI am the dream and the hope of the slave.\nI rise\nI rise\nI rise.",
                type: "written",
                theme: "life",
                image: "https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
        ],
        written: [
            {
                id: 3,
                title: "Sonnet 18",
                author: "William Shakespeare",
                excerpt: "Shall I compare thee to a summer's day? Thou art more lovely and more temperate...",
                content: "Shall I compare thee to a summer's day?\nThou art more lovely and more temperate:\nRough winds do shake the darling buds of May,\nAnd summer's lease hath all too short a date;\nSometime too hot the eye of heaven shines,\nAnd often is his gold complexion dimm'd;\nAnd every fair from fair sometime declines,\nBy chance or nature's changing course untrimm'd;\nBut thy eternal summer shall not fade,\nNor lose possession of that fair thou ow'st;\nNor shall death brag thou wander'st in his shade,\nWhen in eternal lines to time thou grow'st:\n   So long as men can breathe or eyes can see,\n   So long lives this, and this gives life to thee.",
                type: "written",
                theme: "love",
                image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 4,
                title: "I Wandered Lonely as a Cloud",
                author: "William Wordsworth",
                excerpt: "I wandered lonely as a cloud That floats on high o'er vales and hills...",
                content: "I wandered lonely as a cloud\nThat floats on high o'er vales and hills,\nWhen all at once I saw a crowd,\nA host, of golden daffodils;\nBeside the lake, beneath the trees,\nFluttering and dancing in the breeze.\n\nContinuous as the stars that shine\nAnd twinkle on the Milky Way,\nThey stretched in never-ending line\nAlong the margin of a bay:\nTen thousand saw I at a glance,\nTossing their heads in sprightly dance.\n\nThe waves beside them danced; but they\nOut-did the sparkling waves in glee:\nA poet could not but be gay,\nIn such a jocund company:\nI gazed—and gazed—but little thought\nWhat wealth the show to me had brought:\n\nFor oft, when on my couch I lie\nIn vacant or in pensive mood,\nThey flash upon that inward eye\nWhich is the bliss of solitude;\nAnd then my heart with pleasure fills,\nAnd dances with the daffodils.",
                type: "written",
                theme: "nature",
                image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 5,
                title: "The Raven",
                author: "Edgar Allan Poe",
                excerpt: "Once upon a midnight dreary, while I pondered, weak and weary...",
                content: "Once upon a midnight dreary, while I pondered, weak and weary,\nOver many a quaint and curious volume of forgotten lore—\n    While I nodded, nearly napping, suddenly there came a tapping,\nAs of some one gently rapping, rapping at my chamber door.\n\"'Tis some visitor,\" I muttered, \"tapping at my chamber door—\n            Only this and nothing more.\"\n\nAh, distinctly I remember it was in the bleak December;\nAnd each separate dying ember wrought its ghost upon the floor.\n    Eagerly I wished the morrow;—vainly I had sought to borrow\n    From my books surcease of sorrow—sorrow for the lost Lenore—\nFor the rare and radiant maiden whom the angels name Lenore—\n            Nameless here for evermore.\n\nAnd the silken, sad, uncertain rustling of each purple curtain\nThrilled me—filled me with fantastic terrors never felt before;\n    So that now, to still the beating of my heart, I stood repeating\n    \"'Tis some visitor entreating entrance at my chamber door—\nSome late visitor entreating entrance at my chamber door;—\n            This it is and nothing more.\"\n\n... [rest of the poem omitted for brevity] ...",
                type: "written",
                theme: "life",
                image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
        ],
        audio: [
            {
                id: 6,
                title: "The Love Song of J. Alfred Prufrock",
                author: "T.S. Eliot",
                audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
                cover: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                duration: "3:45"
            },
            {
                id: 7,
                title: "Do Not Go Gentle Into That Good Night",
                author: "Dylan Thomas",
                audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
                cover: "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                duration: "2:30"
            },
            {
                id: 8,
                title: "If—",
                author: "Rudyard Kipling",
                audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
                cover: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                duration: "4:15"
            }
        ],
        video: [
            {
                id: 9,
                title: "Ode to a Nightingale",
                author: "John Keats",
                video: "https://www.youtube.com/embed/R6Oo6VY4GIU",
                thumbnail: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 10,
                title: "The Waste Land",
                author: "T.S. Eliot",
                video: "https://www.youtube.com/embed/7DcXWn9Q5KY",
                thumbnail: "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            },
            {
                id: 11,
                title: "Howl",
                author: "Allen Ginsberg",
                video: "https://www.youtube.com/embed/6hH5BQvIh2M",
                thumbnail: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
        ]
    };

    // DOM Elements
    const nav = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const uploadForm = document.getElementById('upload-form');
    const mediaFileInput = document.getElementById('media-file');
    const filePreview = document.querySelector('.file-preview');
    const poemModal = document.getElementById('poem-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalTitle = document.querySelector('.modal-title');
    const modalAuthor = document.querySelector('.modal-author');
    const modalBody = document.querySelector('.modal-body');
    const audioPlayer = document.getElementById('main-audio');
    const playBtn = document.getElementById('play-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const progressBar = document.querySelector('.progress-bar');
    const currentTimeEl = document.querySelector('.current-time');
    const durationEl = document.querySelector('.duration');
    const volumeSlider = document.querySelector('.volume-slider');
    const audioCover = document.querySelector('.audio-cover');
    const audioTitle = document.querySelector('.audio-title');
    const audioAuthor = document.querySelector('.audio-author');

    // Global variables
    let currentAudioIndex = 0;
    let isPlaying = false;

    // Initialize the website
    function init() {
        renderFeaturedPoems();
        renderWrittenPoems();
        renderAudioPoems();
        renderVideoPoems();
        setupEventListeners();
    }

    // Render featured poems
    function renderFeaturedPoems() {
        const featuredGrid = document.querySelector('.featured .poem-grid');
        featuredGrid.innerHTML = '';
        
        poems.featured.forEach(poem => {
            const poemCard = createPoemCard(poem);
            featuredGrid.appendChild(poemCard);
        });
    }

    // Render written poems
    function renderWrittenPoems(filter = 'all') {
        const writtenGrid = document.querySelector('.written .poem-grid');
        writtenGrid.innerHTML = '';
        
        let filteredPoems = poems.written;
        if (filter !== 'all') {
            filteredPoems = poems.written.filter(poem => poem.theme === filter);
        }
        
        filteredPoems.forEach(poem => {
            const poemCard = createPoemCard(poem);
            writtenGrid.appendChild(poemCard);
        });
    }

    // Render audio poems
    function renderAudioPoems() {
        const audioList = document.querySelector('.audio-poem-list');
        audioList.innerHTML = '';
        
        poems.audio.forEach((poem, index) => {
            const audioItem = document.createElement('div');
            audioItem.className = 'audio-list-item';
            audioItem.dataset.index = index;
            
            audioItem.innerHTML = `
                <div class="play-icon">
                    <i class="fas fa-play"></i>
                </div>
                <div class="item-info">
                    <h4>${poem.title}</h4>
                    <p>${poem.author} • ${poem.duration}</p>
                </div>
            `;
            
            audioItem.addEventListener('click', () => loadAudio(index));
            audioList.appendChild(audioItem);
        });
    }

    // Render video poems
    function renderVideoPoems() {
        const videoGrid = document.querySelector('.video-grid');
        videoGrid.innerHTML = '';
        
        poems.video.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            
            videoItem.innerHTML = `
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <div class="play-button">
                        <i class="fas fa-play"></i>
                    </div>
                </div>
                <div class="video-info">
                    <h3>${video.title}</h3>
                    <p>${video.author}</p>
                </div>
            `;
            
            videoItem.addEventListener('click', () => {
                window.open(video.video, '_blank');
            });
            
            videoGrid.appendChild(videoItem);
        });
    }

    // Create poem card HTML
    function createPoemCard(poem) {
        const card = document.createElement('div');
        card.className = 'poem-card';
        
        card.innerHTML = `
            <img src="${poem.image}" alt="${poem.title}">
            <div class="card-content">
                <h3>${poem.title}</h3>
                <p class="author">${poem.author}</p>
                <p class="excerpt">${poem.excerpt}</p>
                <div class="card-footer">
                    <span class="theme-tag">${poem.theme || 'poem'}</span>
                    <button class="btn read-more">Read More</button>
                </div>
            </div>
        `;
        
        card.querySelector('.read-more').addEventListener('click', () => openPoemModal(poem));
        return card;
    }

    // Open poem modal
    function openPoemModal(poem) {
        modalTitle.textContent = poem.title;
        modalAuthor.textContent = poem.author;
        modalBody.textContent = poem.content;
        poemModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Close poem modal
    function closePoemModal() {
        poemModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Load audio poem
    function loadAudio(index) {
        currentAudioIndex = index;
        const poem = poems.audio[index];
        
        audioPlayer.src = poem.audio;
        audioCover.innerHTML = `<img src="${poem.cover}" alt="${poem.title}">`;
        audioTitle.textContent = poem.title;
        audioAuthor.textContent = poem.author;
        
        // Update active state in list
        document.querySelectorAll('.audio-list-item').forEach((item, i) => {
            if (i === index) {
                item.classList.add('playing');
                item.querySelector('.play-icon i').className = 'fas fa-pause';
            } else {
                item.classList.remove('playing');
                item.querySelector('.play-icon i').className = 'fas fa-play';
            }
        });
        
        if (isPlaying) {
            audioPlayer.play();
        }
    }

    // Play/pause audio
    function togglePlay() {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            document.querySelector(`.audio-list-item[data-index="${currentAudioIndex}"] .play-icon i`).className = 'fas fa-pause';
            isPlaying = true;
        } else {
            audioPlayer.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            document.querySelector(`.audio-list-item[data-index="${currentAudioIndex}"] .play-icon i`).className = 'fas fa-play';
            isPlaying = false;
        }
    }

    // Update progress bar
    function updateProgress() {
        const { duration, currentTime } = audioPlayer;
        const progressPercent = (currentTime / duration) * 100;
        progressBar.style.width = `${progressPercent}%`;
        
        // Update time display
        const durationMinutes = Math.floor(duration / 60);
        let durationSeconds = Math.floor(duration % 60);
        if (durationSeconds < 10) durationSeconds = `0${durationSeconds}`;
        
        if (duration) {
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        
        const currentMinutes = Math.floor(currentTime / 60);
        let currentSeconds = Math.floor(currentTime % 60);
        if (currentSeconds < 10) currentSeconds = `0${currentSeconds}`;
        
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }

    // Set progress
    function setProgress(e) {
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audioPlayer.duration;
        audioPlayer.currentTime = (clickX / width) * duration;
    }

    // Change volume
    function setVolume() {
        audioPlayer.volume = this.value;
    }

    // Play next audio
    function nextAudio() {
        currentAudioIndex++;
        if (currentAudioIndex > poems.audio.length - 1) {
            currentAudioIndex = 0;
        }
        loadAudio(currentAudioIndex);
        if (isPlaying) audioPlayer.play();
    }

    // Play previous audio
    function prevAudio() {
        currentAudioIndex--;
        if (currentAudioIndex < 0) {
            currentAudioIndex = poems.audio.length - 1;
        }
        loadAudio(currentAudioIndex);
        if (isPlaying) audioPlayer.play();
    }

    // Handle file upload preview
    function handleFilePreview() {
        const file = this.files[0];
        if (!file) return;
        
        filePreview.style.display = 'block';
        filePreview.innerHTML = '';
        
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function(e) {
                filePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
            };
            reader.readAsDataURL(file);
        } else if (file.type.startsWith('audio/')) {
            filePreview.innerHTML = `
                <audio controls>
                    <source src="${URL.createObjectURL(file)}" type="${file.type}">
                    Your browser does not support the audio element.
                </audio>
            `;
        } else if (file.type.startsWith('video/')) {
            filePreview.innerHTML = `
                <video controls>
                    <source src="${URL.createObjectURL(file)}" type="${file.type}">
                    Your browser does not support the video element.
                </video>
            `;
        }
    }

    // Handle form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        
        const title = document.getElementById('poem-title').value;
        const author = document.getElementById('poem-author').value;
        const type = document.getElementById('poem-type').value;
        const theme = document.getElementById('poem-theme').value;
        const content = document.getElementById('poem-content').value;
        const file = mediaFileInput.files[0];
        
        // Basic validation
        if (!title || !author || !type) {
            alert('Please fill in all required fields');
            return;
        }
        
        if (type !== 'written' && !file) {
            alert('Please upload a file for audio/video poetry');
            return;
        }
        
        if (type === 'written' && !content) {
            alert('Please enter the poem content');
            return;
        }
        
        // Create new poem object
        const newPoem = {
            id: Date.now(),
            title,
            author,
            type,
            theme: theme || null
        };
        
        // Add to appropriate array
        if (type === 'written') {
            newPoem.content = content;
            newPoem.excerpt = content.split('\n').slice(0, 3).join('\n') + '...';
            newPoem.image = 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
            poems.written.push(newPoem);
            renderWrittenPoems();
        } else if (type === 'audio') {
            // In a real app, you would upload the file to a server
            newPoem.audio = URL.createObjectURL(file);
            newPoem.cover = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
            newPoem.duration = '3:00'; // Would need to calculate this
            poems.audio.push(newPoem);
            renderAudioPoems();
        } else if (type === 'video') {
            // In a real app, you would upload the file to a server
            newPoem.video = URL.createObjectURL(file);
            newPoem.thumbnail = 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80';
            poems.video.push(newPoem);
            renderVideoPoems();
        }
        
        // Reset form
        uploadForm.reset();
        filePreview.style.display = 'none';
        filePreview.innerHTML = '';
        
        // Show success message
        alert('Poem submitted successfully!');
        
        // Scroll to the new poem
        setTimeout(() => {
            document.querySelector(`#${type}`).scrollIntoView({ behavior: 'smooth' });
        }, 500);
    }

    // Setup event listeners
    function setupEventListeners() {
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
        
        // Mobile menu toggle
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
        
        // Filter buttons for written poems
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderWrittenPoems(btn.dataset.filter);
            });
        });
        
        // File upload preview
        mediaFileInput.addEventListener('change', handleFilePreview);
        
        // Form submission
        uploadForm.addEventListener('submit', handleFormSubmit);
        
        // Modal close
        closeModal.addEventListener('click', closePoemModal);
        poemModal.addEventListener('click', (e) => {
            if (e.target === poemModal) closePoemModal();
        });
        
        // Audio player events
        playBtn.addEventListener('click', togglePlay);
        prevBtn.addEventListener('click', prevAudio);
        nextBtn.addEventListener('click', nextAudio);
        audioPlayer.addEventListener('timeupdate', updateProgress);
        audioPlayer.addEventListener('ended', nextAudio);
        document.querySelector('.progress-container').addEventListener('click', setProgress);
        volumeSlider.addEventListener('input', setVolume);
        
        // Load first audio by default
        if (poems.audio.length > 0) {
            loadAudio(0);
        }
    }


init();
});

document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const uploadForm = document.getElementById('upload-form');
    const poemTypeSelect = document.getElementById('poem-type');
    const mediaFileInput = document.getElementById('media-file');
    const filePreview = document.querySelector('.file-preview');
  
    // Toggle between text/media fields
    poemTypeSelect.addEventListener('change', () => {
      const type = poemTypeSelect.value;
      document.getElementById('text-content-group').style.display = type === 'text' ? 'block' : 'none';
      document.getElementById('media-upload-group').style.display = type !== 'text' ? 'block' : 'none';
      
      // Update accept attribute
      mediaFileInput.accept = type === 'audio' ? 'audio/' : 'video/';
      document.getElementById('media-label').textContent = 
        `Upload ${type === 'audio' ? 'Audio' : 'Video'}*`;
    });
  
    // File preview handler
    mediaFileInput.addEventListener('change', () => {
      const file = mediaFileInput.files[0];
      filePreview.innerHTML = '';
      
      if (file) {
        filePreview.style.display = 'block';
        const fileURL = URL.createObjectURL(file);
  
        if (file.type.startsWith('audio/')) {
          filePreview.innerHTML = `
            <audio controls style="width:100%">
              <source src="${fileURL}" type="${file.type}">
            </audio>
            <p>${file.name}</p>
          `;
        } else if (file.type.startsWith('video/')) {
          filePreview.innerHTML = `
            <video controls style="max-width:100%">
              <source src="${fileURL}" type="${file.type}">
            </video>
            <p>${file.name}</p>
          `;
        } else {
          filePreview.innerHTML = <p>File: ${file.name}</p>;
        }
      }
    });
  
    // Form submission
    uploadForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = uploadForm.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Uploading...';
  
      try {
        const formData = new FormData(uploadForm);
        const type = poemTypeSelect.value;
  
        // Remove unused fields
        if (type !== 'text') formData.delete('content');
        if (type === 'text') formData.delete('media');
  
        const response = await fetch('/api/submit-poetry', {
          method: 'POST',
          body: formData
        });
  
        const result = await response.json();
  
        if (result.success) {
          alert('Upload successful! ' + result.message);
          uploadForm.reset();
          filePreview.style.display = 'none';
        } else {
          throw new Error(result.message || 'Upload failed');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error: ' + error.message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Submit Poem';
}
});
  });