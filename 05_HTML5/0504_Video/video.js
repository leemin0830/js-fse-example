function init() {	
	myVideo.src = 'http://www.w3schools.com/html/mov_bbb.mp4';
	
	btnPlayPause.addEventListener('click', onBtnPlayPauseClick);
	btnStop.addEventListener('click', stop);
	btnVolUp.addEventListener('click',volumeUp);
	btnVolDown.addEventListener('click',volumeDown);
	btnFullscreen.addEventListener('click', switchFullscreen);
}
function onBtnPlayPauseClick(e) {
	if (video.paused) {
		play();
		e.currentTarget.innerHTML='Pause';
	} else {
		pause();
		e.currentTarget.innerHTML='Play';
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

function volumeUp(){
	if(video.volume<0.9)video.volume+=0.1;
}

function volumeDown(){
	if(video.volume>0.1)video.volume-=0.1;
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