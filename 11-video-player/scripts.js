// get elements
  const player = document.querySelector(".player");
  const video = player.querySelector(".player__video");
  const progressBar = player.querySelector(".progress");
  const progressFilled = player.querySelector(".progress__filled")
  const toggle = player.querySelector(".toggle");
  const skipButtons = player.querySelector('[data-skip');
  const ranges = player.querySelector(".player__slider");
// build out functions
function playVideo() {
  // if (video.paused == true){
  //   video.play();
  // } else {
  //   video.pause();
  // }
  video.paused ? video.play() : video.pause();
}

function playButton () {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon)
  toggle.textContent = icon
}

// hook up the event listener
video.addEventListener('click', playVideo)
video.addEventListener('play', playButton)
video.addEventListener('pause', playButton)
