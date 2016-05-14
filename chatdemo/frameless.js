const window = require('electron').remote.BrowserWindow;
let win = window.getFocusedWindow();

document.getElementById('min').onclick = function(){         
    win.minimize();    
}

document.getElementById('close').onclick = function(){         
    win.close();    
}