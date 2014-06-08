var video;

function init() {
	video = document.getElementById('myVideo');
	video.src = 'http://www.w3schools.com/html/mov_bbb.mp4';
	btnPlayPause.addEventListener('click', onBtnPlayPauseClick);
	btnStop.addEventListener('click', stop);
	btnFullscreen.addEventListener('click', switchFullscreen);
}

function onBtnPlayPauseClick(e) {
	if (video.paused) {
		play();
	} else {
		pause();
	}
}

function play() {
	video.play();
}

function pause() {
	video.pause();
}

function stop() {
	video.currentTime=0;
	video.pause();
}

function switchFullscreen() {
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	}
}

onload = init;