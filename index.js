console.clear();

class musicPlayer {
	constructor() {
		this.audio = new Audio("audio/track0.mp3");
		this.audio.loop = true; // optionnel
		this.isPlaying = false;

		this.playBtn = document.getElementById('play');
		this.controlPanel = document.getElementById('control-panel');
		this.infoBar = document.getElementById('info');
		this.progressBar = document.querySelector('.progress-bar .bar');

		// barre de progression
		this.audio.addEventListener("timeupdate", () => {
			const progress = (this.audio.currentTime / this.audio.duration) * 100;
			this.progressBar.style.width = progress + "%";
		});

		// AUTOPLAY après chargement
		window.addEventListener("click", () => {
			if (!this.isPlaying) {
				this.playMusic();
			}
		}, { once: true });
	}

	playMusic() {
		this.audio.play();
		this.isPlaying = true;
		this.controlPanel.classList.add('active');
		this.infoBar.classList.add('active');
	}

	pauseMusic() {
		this.audio.pause();
		this.isPlaying = false;
		this.controlPanel.classList.remove('active');
		this.infoBar.classList.remove('active');
	}
}

const newMusicplayer = new musicPlayer();
