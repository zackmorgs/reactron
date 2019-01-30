console.log('electron-main');
/*

Every Electron app starts with a main script, 
very similar to how a Node.js application is started. 
The main script runs in the "main process". To display 
a user interface, the main process creates renderer 
processes – usually in the form of windows, 
which Electron calls BrowserWindow.

*/

const { app, BrowserWindow } = require('electron');

// console.log(Object.keys(app));

let mainWindow = null;
//

// boilerplate setup

const createWindow = function() {
  console.log('createWindow')
  mainWindow = new BrowserWindow({
    width: 640,
    height: 480
  });
  console.log('mainWindow:', mainWindow);
  // mainWindow.loadFile('./public/index.html');
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.on('closed', (mainWindow = null));
}

app.on('window-all-closed', function() {
  console.log('window-all-closed');

  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function() {
  console.log('activate');
  if (mainWindow === null) {
    createWindow();
  }
});

// ... main processes
