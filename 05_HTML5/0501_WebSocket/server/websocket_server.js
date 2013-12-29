var clients=[];
var broadcast = function(data) {
    for(var i in clients){
    	console.log('message is sent to client '+i+' : '+data);
        clients[i].send(data);
	}
};

var remove=function(ws){
	var index = clients.indexOf(ws);
	if(index>=0){
		console.log('client removed : '+index);
		clients.splice(index, 1);
	}
};

var onclose=function(){
	console.log('connect closed');
	remove(this);
};

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({port: 8080});

wss.on('connection',function(ws){
	clients.push(ws);
	ws.on('message',broadcast);
	ws.on('close',onclose);	
	console.log('client connected. client count = '+clients.length);
});

console.log('server started on 8080');