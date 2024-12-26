const audio = document.getElementById('audio');
const playPauseBtn = document.querySelector('.play-pause-btn');
const playIcon = playPauseBtn.querySelector('.play-icon');
const pauseIcon = playPauseBtn.querySelector('.pause-icon');
const progressBar = document.querySelector('.progress-bar');
const muteBtn = document.querySelector('.mute-btn');
const muteIcon = muteBtn.querySelector('.mute-icon');

let isPlaying = false;

// Toggle play/pause functionality
function togglePlayPause() {
  if (audio.paused) {
    audio.play();
    playIcon.style.display = 'none';
    pauseIcon.style.display = 'inline';
    isPlaying = true;
  } else {
    audio.pause();
    playIcon.style.display = 'inline';
    pauseIcon.style.display = 'none';
    isPlaying = false;
  }
}

// Update the progress bar based on the current time of the audio
function updateProgress() {
  if (!audio.duration) return; // Avoid errors if duration is not available
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.value = progress;
}

// Set the audio to the selected position from the progress bar
function setProgress(value) {
  const time = (value / 100) * audio.duration;
  audio.currentTime = time;
}

// Toggle mute functionality and update icon
function toggleMute() {
  audio.muted = !audio.muted;
  muteIcon.classList.toggle('fa-volume-mute', audio.muted);
  muteIcon.classList.toggle('fa-volume-up', !audio.muted);
}

// Event listeners
audio.addEventListener('timeupdate', updateProgress);
progressBar.addEventListener('input', (e) => setProgress(e.target.value));
playPauseBtn.addEventListener('click', togglePlayPause);
muteBtn.addEventListener('click', toggleMute);

// Add a listener to wait for the page to load
window.addEventListener('load', () => {
  document.body.classList.add('page-loaded');
});

document.querySelector('.card-container').addEventListener('click', function () {
  this.classList.toggle('flipped');
});

