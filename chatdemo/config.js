const ipc = require('electron').ipcRenderer


document.getElementById('close').onclick = function(){         
    ipc.send('close-config-window');    
}

document.getElementById('btnConfig').onclick = function(){    
    var input = document.querySelector('.input_config');    
    if (input.value!==''){              
      ipc.send('change-nickname', {name:input.value});      
    }                  
} 
