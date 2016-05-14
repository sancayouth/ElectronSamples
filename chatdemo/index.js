const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow


function createWindow () { 
  mainWindow = new BrowserWindow({
      width: 400, 
      height: 300,
      resizable:false,
      frame:false
  });  
  mainWindow.loadURL(`file://${__dirname}/index.html`)
  
  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow)