const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');


let mainWindow, addWindow;

const createWindow = () => {
    const mainWindow = new BrowserWindow({});

    mainWindow.loadFile('index.html');
    return mainWindow;
}

app.whenReady().then(() => {
    mainWindow = createWindow();

    app.on('activate', ()=> {
        if(BrowserWindow.getAllWindows().length === 0) createWindow();
    })
    
    mainWindow.on('closed', () => {
        app.quit();
    })
})

app.on('window-all-closed', () => {
    app.quit();
})