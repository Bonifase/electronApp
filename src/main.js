const { app, BrowserWindow, Menu, ipcRenderer } = require('electron');
const path = require('path');

const isMac = process.platform === 'darwin';



// modify your existing createWindow() function
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Todo App",
    width: 800,
    height: 600,

  })

  mainWindow.loadFile(path.join(__dirname, '/renderer/index.html'))
}

app.whenReady().then(() => {

  // Main menu
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);

  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});

// Menu template
const menuTemplate = [
  {
    label: 'Edit',
    submenu: [{
      label: 'Undo'
    }]
  },
  {
    label: 'Selection',
    submenu: [{
      label: 'Select All'
    }]
  }
]

if (isMac) {
  let name = 'Todo App'
  menuTemplate.unshift({
    label: name,
    submenu: [{
      label: 'Quit',
      accelerator: 'Command+Q',
      click: function () {
app.quit() }
}] })
}
let windowMenu = {
  label: 'Window',
  role: 'window',
  submenu: [{
    label: 'Minimize',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: 'Close',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }, {
    type: 'separator'
  }, {
    label: 'Reopen Window',
    accelerator: 'CmdOrCtrl+Shift+T',
    enabled: false,
    key: 'reopenMenuItem',
    click: function () {
      app.emit('activate')
} }]
}

const helpMenu = {
  label: 'Help',
  role: 'window',
  submenu: [{
    label: 'Minimize',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }]
}

menuTemplate.push(windowMenu)


// Create todo window
function createTodoWindow(params) {
  const newTodoWindow = new BrowserWindow({
    title: "New Todo",
    width: 350,
    height: 350,

  })
}

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});
