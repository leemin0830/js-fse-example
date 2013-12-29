var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({port: 8080});

wss.connection=function(ws){
}

wss.broadcast = function(data) {
    for(var i in this.clients){
        this.clients[i].send(data);
	}
};