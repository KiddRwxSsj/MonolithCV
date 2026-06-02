const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 1000,
    minHeight: 700,
    icon: path.join(__dirname, 'icon.png'), // Puedes añadir un icono .png luego
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Ocultar el menú por defecto de Windows (Archivo, Editar, Ver...)
  mainWindow.setMenuBarVisibility(false);

  // Cargar el menú principal
  mainWindow.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});