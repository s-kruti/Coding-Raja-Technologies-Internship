const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const shuffleBtn = document.getElementById('shuffleBtn');
const repeatBtn = document.getElementById('repeatBtn');
const volumeSlider = document.getElementById('volume');
const progress = document.getElementById('progress');

let currentTrackIndex = 0;
let isPlaying = false;

// Audio tracks
const tracks = ['track1.mp3', 'track2.mp3', 'track3.mp3']; // Update with your actual file paths

// Update the audio player with the current track
function loadTrack(trackIndex) {
    audioPlayer.src = tracks[trackIndex];
}

// Play or pause the audio
function togglePlay() {
    if (isPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
    isPlaying = !isPlaying;
}

// Play the next track
function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    isPlaying = true;
}

// Play the previous track
function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    isPlaying = true;
}

// Shuffle tracks
function shuffleTracks() {
    tracks.sort(() => Math.random() - 0.5);
    loadTrack(currentTrackIndex);
    audioPlayer.play();
    isPlaying = true;
}

// Repeat track
function repeatTrack() {
    audioPlayer.loop = !audioPlayer.loop;
}

// Update volume
volumeSlider.addEventListener('input', function() {
    audioPlayer.volume = this.value / 100;
});

// Update progress bar
audioPlayer.addEventListener('timeupdate', function() {
    const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// Event listeners
playBtn.addEventListener('click', togglePlay);
nextBtn.addEventListener('click', nextTrack);
prevBtn.addEventListener('click', prevTrack);
shuffleBtn.addEventListener('click', shuffleTracks);
repeatBtn.addEventListener('click', repeatTrack);