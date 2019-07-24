//console.log("test");

import Vue from 'vue';
//import Vue from 'vue/dist/vue.runtime.common.js';
Vue.config.productionTip = false

import VueGun from 'vue-gun';

//gun.js
//import Gun from 'gun';//node
import Gun from 'gun/gun';//browser
import 'gun/sea';
//custom chain gun.js
import 'gun/nts';
import 'gun/lib/time';
import 'gun/lib/path';
import 'gun/lib/load';
import 'gun/lib/open';
import 'gun/lib/then';
import 'gun/lib/unset';

import App from "./App.vue";

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

var gun;

	if(location.origin == 'http://localhost:3000'){
        gun = Gun({
            peers:['http://localhost:8080' + '/gun'],
            secure: false, //not added?
        });
        console.log('local gun.js');
    }else{
        gun = Gun(location.origin + '/gun');
        console.log('host gun.js');
    }
    gun.on('hi', peer => {//peer connect
        console.log('peer connect!');
        //displayeffectmessage('Connect to peer!');
    });
    gun.on('bye', (peer)=>{// peer disconnect
        console.log('Disconnected from peer!');
    });

    Vue.use(VueGun, {
        gun: gun // must be passed in at `gun` key
    });

var app = new Vue({
	el: '#app',
	render: h => h(App),
	components: { App },
	data: {
		blogin: false,
	},
	created(){
		this.$on('view', this.view);
	},
	methods: {
		view(event){
			//this.$root.$emit('view','account'); //top root vue
			//console.log("view event", event);
			//console.log(this.$root)
			this.$root.$children[0].$emit('view',event)
		}
	}
})