'use strict';
const electron = require('electron');
const { app, BrowserWindow, ipcRenderer } = electron;

const ipc = electron.ipcMain;



//windows
var mainWindow = null;
var settingsWindow = null;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 400,
        height: 300,
        transparent: true,
        resizable: false,
        frame: false
    });
    mainWindow.loadURL(`file://${__dirname}/html/index.html`)
    mainWindow.on('closed', function() {
        mainWindow = null
    });
}

app.on('ready', createWindow)

ipc.on('close-main-window', () => {
    app.quit();
});


ipc.on('show-conf', () => {
    if (settingsWindow) {
        return;
    }

    settingsWindow = new BrowserWindow({
        width: 420,
        height: 90,
        resizable: false,
        frame: false
    });

    settingsWindow.loadURL(`file://${__dirname}/html/config.html`);
    settingsWindow.on('closed', () => {
        settingsWindow = null;
    });
});

ipc.on('close-config-window', () => {
    settingsWindow.close();
});

ipc.on('change-nickname', (event, arg) => {
    mainWindow.webContents.send('changed-nickname', arg.name);
});