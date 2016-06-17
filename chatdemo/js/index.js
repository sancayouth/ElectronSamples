'use strict';
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipc = electron.ipcMain;
const ipcRenderer = require('electron').ipcRenderer

//windows
var mainWindow = null;
var settingsWindow = null;

  mainWindow = new BrowserWindow({
      height: 300,
      transparent: true,
      resizable:false,
      frame:false
  mainWindow.on('closed', function () {
    mainWindow = null
}

app.on('ready', createWindow)

ipc.on('close-main-window', () => {
    app.quit();
});


ipc.on('show-conf', () => {
    if (settingsWindow) {
        return;
    }

        width: 420,
        resizable: false,
    });

    settingsWindow.loadURL('file://' + __dirname + '/config.html');
    settingsWindow.on('closed',  () => {
        settingsWindow = null;
    });
});

ipc.on('close-config-window', () => {
    settingsWindow.close();
});

    mainWindow.webContents.send('changed-nickname', arg.name);
});
