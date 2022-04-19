// get elements
  const player = document.querySelector(".player");
  const video = player.querySelector(".player__video");
  const progressBar = player.querySelector(".progress");
  const progressFilled = player.querySelector(".progress__filled")
  const toggle = player.querySelector(".toggle");
  const skipButtons = player.querySelectorAll('[data-skip]');
  const ranges = player.querySelectorAll(".player__slider");


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
  toggle.textContent = icon
}

function skip() {
  // console.log(this.dataset.skip); WHICH IS A STRING
  video.currentTime += parseFloat(this.dataset.skip);
}

function rangeValueUpdate() {
  video[this.name] = this.value
}

// hook up the event listener
video.addEventListener('click', playVideo);
toggle.addEventListener('click', playVideo);

video.addEventListener('play', playButton);
video.addEventListener('pause', playButton);

skipButtons.forEach(button =>
  button.addEventListener('click', skip)
  );

ranges.forEach(range =>
  range.addEventListener('change', rangeValueUpdate)
  );
ranges.forEach(range =>
  range.addEventListener('mousemove', rangeValueUpdate)
);
