// import { app, BrowserWindow } from "electron";
// import { fileURLToPath } from "url";
// import { dirname, join } from "path";
// import fetch from "node-fetch";
// import { spawn } from "child_process";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// let mainWindow;

// function createWindow() {
//   mainWindow = new BrowserWindow({
//     width: 1280,
//     height: 800,
//     webPreferences: {
//       contextIsolation: true,
//       nodeIntegration: false,
//     },
//   });

//   // Wait for Next.js to start before loading
//   const checkServer = () => {
//     fetch("http://localhost:3000")
//       .then(() => {
//         mainWindow.loadURL("http://localhost:3000");
//       })
//       .catch(() => {
//         setTimeout(checkServer, 1000); // retry every 1s
//       });
//   };

//   checkServer();
// }

// app.whenReady().then(() => {
//   // Start the Next.js dev server
//   const nextServer = spawn("npm", ["run", "dev"], {
//     cwd: join(__dirname),
//     shell: true,
//   });

//   nextServer.stdout.on("data", (data) => {
//     console.log(`Next.js: ${data}`);
//   });

//   nextServer.stderr.on("data", (data) => {
//     console.error(`Next.js Error: ${data}`);
//   });

//   createWindow();
// });

// app.on("activate", () => {
//   if (BrowserWindow.getAllWindows().length === 0) createWindow();
// });

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") {
//     app.quit();
//   }
// });


import { app, BrowserWindow } from "electron";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fetch from "node-fetch";
import { spawn } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  mainWindow.loadURL("http://localhost:3000");
}

// Function to poll the Next.js server until it's ready
function waitForServerReady(url, callback) {
  const tryFetch = () => {
    fetch(url)
      .then(() => {
        console.log("✅ Next.js server is up.");
        callback();
      })
      .catch(() => {
        console.log("⏳ Waiting for Next.js to start...");
        setTimeout(tryFetch, 1000);
      });
  };
  tryFetch();
}

app.whenReady().then(() => {
  // Start the Next.js dev server
  const nextServer = spawn("npm", ["run", "dev"], {
    cwd: join(__dirname),
    shell: true,
  });

  nextServer.stdout.on("data", (data) => {
    console.log(`Next.js: ${data}`);
  });

  nextServer.stderr.on("data", (data) => {
    console.error(`Next.js Error: ${data}`);
  });

  // Wait until the server is ready before creating the window
  waitForServerReady("http://localhost:3000", createWindow);
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    waitForServerReady("http://localhost:3000", createWindow);
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
