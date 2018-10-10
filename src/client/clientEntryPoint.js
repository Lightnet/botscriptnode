//console.log("test");

var socket = io();
socket.on('connection', function(socket){
    console.log('a user connected');
});
//socket.on('chat message', function(msg){
//  console.log('message: ' + msg);
//});
socket.on('chat message', function(msg){
	console.log("incoming message...");
	$('#messages').append($('<li>').text(msg));
	let element = document.getElementById("boxmessage");
	element.scrollTop = element.scrollHeight;
});

$('#minput').keypress(function(e){
	console.log("test");
	if(e.which == 13) {
		let msg = $('#minput').val();
		if (!msg){
			return;
		}
		socket.emit('chat message', $('#minput').val());
		$('#minput').val('');
	}
	//return false;
});
/*
$('form').submit(function(){
  	socket.emit('chat message', $('#m').val());
  	$('#m').val('');
  	return false;
});
*/