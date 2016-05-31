const window = require('electron').remote.BrowserWindow;
let win = window.getFocusedWindow();
const ipc = require('electron').ipcRenderer

document.getElementById('min').onclick = function(){         
    win.minimize();    
}

document.getElementById('close').onclick = function(){         
    ipc.send('close-main-window');    
}

document.getElementById('cog').onclick = function(){      
    ipc.send('show-conf');
}