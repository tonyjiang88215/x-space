const { app, BrowserWindow } = require("electron");

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    if (process.env.NODE_ENV === "development") {
        
        /**
         * Development Mode
         * 1. Install React Dev Tools
         * 2. when React Dev Tools installed, startup and open Dev Tools
         */
        const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
        installExtension(REACT_DEVELOPER_TOOLS)
            .then((name) => {
                // 
                mainWindow.loadURL("http://localhost:3722");
                mainWindow.webContents.openDevTools();
            })
            .catch((err) => {
                console.log('An error occurred: ', err);
            });

    } else {

        /**
         * Production Mode
         * Load compiled bundle files
         */
        mainWindow.loadFile("dist/index.html");
        mainWindow.webContents.openDevTools();
    }

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
}



app.on("ready", createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (!mainWindow) {
        createWindow();
    }
})