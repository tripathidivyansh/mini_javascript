const video = document.getElementById("video");
const playPause = document.getElementById("playPause");
const mute = document.getElementById("mute");
const fullscreen = document.getElementById("fullscreen");

playPause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playPause.textContent = "⏸️";
  } else {
    video.pause();
    playPause.textContent = "▶️";
  }
});

mute.addEventListener("click", () => {
  video.muted = !video.muted;
  mute.textContent = video.muted ? "🔈" : "🔇";
});

fullscreen.addEventListener("click", () => {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  } else if (video.msRequestFullscreen) {
    video.msRequestFullscreen();
  }
});
