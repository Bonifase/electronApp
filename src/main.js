const { app, BrowserWindow } = require('electron');
const path = require('path');

const isMac = process.platform === 'darwin';

// modify your existing createWindow() function
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Electron Test App",
    width: 500,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'src/preload.js')
    }
  })

  mainWindow.loadFile('src/renderer/index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});
