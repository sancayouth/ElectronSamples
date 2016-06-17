const ipc = require('electron').ipcRenderer;
const io = require('socket.io-client');
const socket = io.connect('http://localhost:5000');

let nickname = '';

document.querySelector('.input_chat').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if ((key === 13) && (this.value!=='')) {
       emit(this.value);
       addMsg('me', this.value);
    }
});
document.getElementById('btnId').onclick = function(){
    var input = document.querySelector('.input_chat');
    if (input.value!==''){
      emit(input.value);
      input.value = '';

function addMsg(_class, msg) {
    me_you.appendChild(document.createTextNode(msg));
    msg.appendChild(me_you);
    element.appendChild(msg);
}

function emit(msg){
   socket.emit('new message', {
     nickname:nickname,
     message: msg
}
  if (data.nickname!==nickname){
      document.querySelector('.name').innerHTML = data.nickname;
      addMsg('you', data.message);
});


ipc.on('changed-nickname', (event, arg) => {
    nickname = arg;
});
