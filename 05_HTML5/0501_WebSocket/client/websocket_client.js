var msginput = document.getElementById('msginput');
var msgsend = document.getElementById('msgsend');
var msgbox = document.getElementById('msgbox');
var ws;

function send(msg){
	ws.send(msg);
}

function append(msg){
	msgbox.value+=('\n'+msg);
}

function onsend(evt){
	if(msginput.value.length>0){
		send(msginput.value);
	}
	msginput.value='';
}

function checkEnter(evt){
	if(evt.keyCode=='13'){
		 onsend(evt);
	}
}

function init() {
	ws = new WebSocket('ws://localhost:8080/');
	ws.onopen = function() {
		append('connected');
	};
	ws.onmessage = function(evt) {
		var msg = evt.data;
		append(msg);
	};
	ws.onclose = function() {
		append('Connection is closed...');
	};
	
	msgsend.onclick=onsend;
	msginput.onkeypress=checkEnter;
}

init();