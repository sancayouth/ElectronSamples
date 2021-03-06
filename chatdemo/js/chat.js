const ipc = require('electron').ipcRenderer;
const io = require('socket.io-client');
const socket = io.connect('http://localhost:5000');

let nickname = '';

document.querySelector('.input_chat').addEventListener('keypress', function(e) {
    let key = e.which || e.keyCode;
    if ((key === 13) && (this.value !== '')) {
        emit(this.value);
        addMsg('me', this.value);
        this.value = '';
    }
});

document.getElementById('btnId').onclick = function() {
    let input = document.querySelector('.input_chat');
    if (input.value !== '') {
        emit(input.value);
        addMsg('me', input.value);
        input.value = '';
    }
}

function addMsg(_class, _msg) {
    let me_you = document.createElement('span');
    me_you.className = _class;
    me_you.appendChild(document.createTextNode(msg));
    let msg = document.createElement('div');
    msg.className = 'msg';
    msg.appendChild(me_you);
    let element = document.querySelector('.messages');
    element.appendChild(_msg);
}


function emit(msg) {
    socket.emit('new message', {
        nickname: nickname,
        message: msg
    });
}

socket.on('message created', function(data) {
    if (data.nickname !== nickname) {
        document.querySelector('.name').innerHTML = data.nickname;
        addMsg('you', data.message);
    }
});


ipc.on('changed-nickname', (event, arg) => {
    nickname = arg;
});