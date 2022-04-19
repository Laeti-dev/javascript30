// get elements
  const player = document.querySelector(".player");
  const video = player.querySelector(".player__video");
  const progressBar = player.querySelector(".progress");
  const progressFilled = player.querySelector(".progress__filled")
  const toggle = player.querySelector(".toggle");
  const skipButtons = player.querySelector('[data-skip');
  const range = player.querySelector(".player__slider");
// build out functions
function playVideo() {
  if (video.paused == true){
    video.play();
  } else {
    video.pause();
  }
}


// hook up the event listener
toggle.addEventListener('click', playVideo)
