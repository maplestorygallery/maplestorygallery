var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('socket connect : '+ socket.id);
    socket.on('connection', function(){
    });
    socket.on('disconnect', function(){
    });
    socket.on('message', function(msg){
      io.emit('message', msg);
    });
});
http.listen(process.env.PORT, function(){
    console.log('SERVER IS READY FOR ['+process.env.IP+':'+process.env.PORT+']');
});
