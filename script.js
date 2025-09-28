class GitHubMusicPlayer {
    constructor(config) {
        // 配置信息 - 需要修改为你的信息
        this.config = config;

        // 播放器状态
        this.state = {
            playlist: [],
            currentIndex: -1,
            isPlaying: false,
            isRandom: false,
            currentAudio: null
        };

        // 初始化
        this.init();
    }

    async init() {
        this.setupDOM();
        this.setupEventListeners();
        await this.loadPlaylist();
    }

    setupDOM() {
        this.elements = {
            audioPlayer: document.getElementById('audioPlayer'),
            nowPlaying: document.getElementById('nowPlaying'),
            playerProgress: document.getElementById('playerProgress'),
            playlist: document.getElementById('playlist'),
            songCount: document.getElementById('songCount'),
            shuffleBtn: document.getElementById('shuffleBtn'),
            repeatBtn: document.getElementById('repeatBtn'),
            refreshBtn: document.getElementById('refreshBtn'),
            searchInput: document.getElementById('searchInput'),
            loading: document.getElementById('loading')
        };
    }

    setupEventListeners() {
        // 播放器事件
        this.elements.audioPlayer.addEventListener('ended', () => this.playNext());
        this.elements.audioPlayer.addEventListener('timeupdate', () => this.updateProgress());

        // 控制按钮事件
        this.elements.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
        this.elements.refreshBtn.addEventListener('click', () => this.refreshPlaylist());

        // 搜索功能
        this.elements.searchInput.addEventListener('input', (e) => this.filterPlaylist(e.target.value));
    }

    async loadPlaylist() {
        this.showLoading(true);

        try {
            const files = await this.fetchMusicFiles();
            this.state.playlist = files.map(file => ({
                name: this.formatFileName(file.name),
                url: file.download_url,
                size: file.size
            }));

            this.renderPlaylist();
            this.updateSongCount();

            if (this.state.playlist.length > 0) {
                this.elements.nowPlaying.textContent = `共找到 ${this.state.playlist.length} 首歌曲，点击播放`;
            } else {
                this.elements.nowPlaying.textContent = '未找到音乐文件';
            }

        } catch (error) {
            console.error('加载播放列表失败:', error);
            this.showError('加载失败: ' + error.message);
        } finally {
            this.showLoading(false);
        }
    }

    async fetchMusicFiles() {
        const { owner, repo, path, token } = this.config;
        console.log(token)
        const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

        const headers = {};
        if (token) {
            headers['Authorization'] = `${token}`;
        }

        const response = await fetch(url, { headers });

        if (!response.ok) {
            throw new Error(`GitHub API错误: ${response.status}`);
        }

        const files = await response.json();

        // 过滤音乐文件
        return files.filter(file =>
            file.type === 'file' &&
            file.name.match(/\.(mp3|wav|ogg|flac|m4a|aac)$/i)
        );
    }

    formatFileName(filename) {
        // 移除文件扩展名和特殊字符
        return filename
            .replace(/\.[^/.]+$/, '')  // 移除扩展名
            .replace(/[-_]/g, ' ')     // 替换下划线和连字符为空格
            .replace(/\b\w/g, l => l.toUpperCase()); // 首字母大写
    }

    renderPlaylist() {
        const playlistHTML = this.state.playlist.map((song, index) => `
            <div class="song-item" data-index="${index}">
                <div class="song-number">${index + 1}</div>
                <div class="song-name">${song.name}</div>
                <div class="song-duration">${this.formatFileSize(song.size)}</div>
            </div>
        `).join('');

        this.elements.playlist.innerHTML = playlistHTML;

        // 添加点击事件
        this.elements.playlist.querySelectorAll('.song-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);
                this.playSong(index);
            });
        });
    }

    filterPlaylist(searchTerm) {
        const items = this.elements.playlist.querySelectorAll('.song-item');

        items.forEach(item => {
            const songName = item.querySelector('.song-name').textContent.toLowerCase();
            const shouldShow = songName.includes(searchTerm.toLowerCase());
            item.style.display = shouldShow ? 'flex' : 'none';
        });
    }

    playSong(index) {
        if (index < 0 || index >= this.state.playlist.length) return;

        this.state.currentIndex = index;
        const song = this.state.playlist[index];

        // 更新播放器
        this.elements.audioPlayer.src = song.url;
        this.elements.audioPlayer.play();

        // 更新界面
        this.elements.nowPlaying.textContent = `正在播放: ${song.name}`;
        this.updateActiveSong();

        this.state.isPlaying = true;
    }

    playNext() {
        if (this.state.playlist.length === 0) return;

        let nextIndex;

        if (this.state.isRandom) {
            // 随机播放
            nextIndex = Math.floor(Math.random() * this.state.playlist.length);
        } else {
            // 顺序播放
            nextIndex = (this.state.currentIndex + 1) % this.state.playlist.length;
        }

        this.playSong(nextIndex);
    }

    toggleShuffle() {
        this.state.isRandom = !this.state.isRandom;
        this.elements.shuffleBtn.classList.toggle('active', this.state.isRandom);
        this.elements.shuffleBtn.textContent = this.state.isRandom ? '🔀 随机中' : '🔀 随机播放';
    }

    updateActiveSong() {
        // 移除所有激活状态
        this.elements.playlist.querySelectorAll('.song-item').forEach(item => {
            item.classList.remove('playing');
        });

        // 激活当前歌曲
        const currentItem = this.elements.playlist.querySelector(`[data-index="${this.state.currentIndex}"]`);
        if (currentItem) {
            currentItem.classList.add('playing');
            currentItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    updateProgress() {
        const audio = this.elements.audioPlayer;
        const currentTime = this.formatTime(audio.currentTime);
        const duration = this.formatTime(audio.duration || 0);
        this.elements.playerProgress.textContent = `${currentTime} / ${duration}`;
    }

    async refreshPlaylist() {
        await this.loadPlaylist();
        this.elements.nowPlaying.textContent = '播放列表已刷新';
    }

    updateSongCount() {
        this.elements.songCount.textContent = this.state.playlist.length;
    }

    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';

        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    formatFileSize(bytes) {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
        return (bytes / 1048576).toFixed(1) + ' MB';
    }

    showLoading(show) {
        this.elements.loading.classList.toggle('show', show);
    }

    showError(message) {
        this.elements.playlist.innerHTML = `<div class="error">${message}</div>`;
    }
}

// 配置说明 - 使用前需要修改这些配置
const playerConfig = {
    owner: 'makai285685774',    // 修改为你的GitHub用户名
    repo: 'makai285685774.github.io',     // 修改为你的仓库名
    path: 'music',                    // 音乐文件夹路径
    token: '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'                         // 可选：GitHub个人访问令牌
};

// 页面加载完成后初始化播放器
document.addEventListener('DOMContentLoaded', () => {
    new GitHubMusicPlayer(playerConfig);
});