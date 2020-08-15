const { app, BrowserWindow } = require('electron');
const { is } = require('electron-util');
const TrayGenerator = require('./trayGenerator');

const path = require('path');

let mainWindow;

const createMainWindow = () => {
  mainWindow = new BrowserWindow({
    backgroundColor: '#fff',
    width: 300,
    height: 300,
    webPreferences: {
      devTools: is.development,
      nodeIntegration: true,
      backgroundThrottling: false,
    },
    show: false,
    frame: false,
    fullscreenable: false,
    resizable: false,
    skipTaskbar: true,
  });

  if (is.development) {
    //mainWindow.webContents.openDevTools({ mode: 'detach' });
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  }
};

app.on('ready', () => {
  createMainWindow();
  const Tray = new TrayGenerator(mainWindow);
  Tray.createTray();
});

if (process.platform==="darwin") { 
  app.dock.hide();
}
