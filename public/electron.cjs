const { app, BrowserWindow } = require('electron')

const path = require('path');
const isDev = require('electron-is-dev');

let win;

function createWindow() {
  win = new BrowserWindow({width: 900, height: 680});
  win.loadURL(isDev ? 'http://localhost:5173' : `file://${path.join(__dirname, '../dist/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
  }
  win.on('closed', () => win = null);
}

app.whenReady().then(()=>{
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
