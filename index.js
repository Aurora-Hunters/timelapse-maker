const path = require('path');
const fs = require('fs');
const logger = require('./app/utils/logger');
const { app, BrowserWindow } = require('electron')

const IS_DEV = require('electron-is-dev');

async function createWindow () {
  const windowOptions = {
    width: 400,
    height: 420,
    webPreferences: {
      nodeIntegration: true
    },
    resizable: IS_DEV
  };

  const win = new BrowserWindow(windowOptions)

  win.loadFile('index.html');

  if (IS_DEV) {
    win.webContents.openDevTools();
  }
}

app.whenReady().then(async () => {
  try {
    await createWindow();

    /**
     * Enable autoupdates for production version
     */
    if (!IS_DEV) {
      require('./app/utils/autoupdater');
    }
  } catch (error) {
    logger.error(error);

    app.quit();
  }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
