var canvas;
var ctx;
var toolType;
var mousePressed=false;

function init() {
	canvas=document.getElementById('mainCanvas');
	canvas.addEventListener('mousedown',onmousedown);
	canvas.addEventListener('mouseup',onmouseup);
	document.addEventListener('mouseup',onmouseup);
	canvas.addEventListener('mousemove',onmousemove);

	ctx=canvas.getContext('2d');
}

function onmousedown(e){
	mousePressed=true;
	toolType=document.getElementById('toolType').value;
	ctx.beginPath();
	ctx.strokeStyle=document.getElementById('color').value;
	ctx.moveTo(e.x-canvas.offsetLeft,e.y-canvas.offsetTop);
	draw(e.x-canvas.offsetLeft, e.y-canvas.offsetTop);
}

function onmouseup(e){
	mousePressed=false;
}

function onmousemove(e){
	if(mousePressed)
		draw(e.x-canvas.offsetLeft,e.y-canvas.offsetTop);
}

function draw(x,y){
	switch (toolType) {
	case 'line':
		drawLine(x,y);
		break;
	case 'rect':
		drawRect(x,y);
		break;
	case 'circle':
		drawCircle(x,y);
		break;
	}	
}

function drawLine(x,y){
	ctx.lineTo(x,y);
	ctx.stroke();
}

function drawRect(x,y){
	ctx.rect(x,y,50,50);
	ctx.stroke();	
}

function drawCircle(x,y){
	ctx.beginPath();
	ctx.arc(x,y,50,0,2*Math.PI);
	ctx.stroke();	
}

onload = init;