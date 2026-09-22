const { app, BrowserWindow, protocol, net, Menu } = require("electron");
const path = require("path");
const fs = require("fs");

const DIST = path.join(__dirname, "..", "dist");
const APP_ORIGIN = "app://./";

app.setName("USB Physical Security");

protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true },
  },
]);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

async function serveFromDist(url) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(url).pathname);
  } catch {
    pathname = "/_shell.html";
  }
  const rel = pathname.replace(/^\/+/, "") || "_shell.html";
  let file = path.join(DIST, rel);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    // Client-side routes (e.g. /project-info) fall back to the SPA shell.
    file = path.join(DIST, "_shell.html");
  }
  try {
    const body = await fs.promises.readFile(file);
    const type = MIME[path.extname(file).toLowerCase()] || "application/octet-stream";
    return new Response(body, { headers: { "content-type": type } });
  } catch (err) {
    console.error("serve error", url, err.message);
    return new Response("Not found", { status: 404 });
  }
}

function createWindow(targetUrl) {
  const win = new BrowserWindow({
    width: 1120,
    height: 780,
    minWidth: 900,
    minHeight: 640,
    title: "USB Physical Security",
    backgroundColor: "#0a0a0c",
    autoHideMenuBar: true,
    icon: path.join(__dirname, "..", "public", "favicon.png"),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  win.webContents.setWindowOpenHandler(({ url }) => {
    // Open in-app pages (Project Info) in a second app window; external
    // links go to the system browser.
    if (url.startsWith(APP_ORIGIN)) {
      createWindow(url);
      return { action: "deny" };
    }
    if (url.startsWith("http")) void require("electron").shell.openExternal(url);
    return { action: "deny" };
  });

  win.webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith(APP_ORIGIN)) {
      event.preventDefault();
      if (url.startsWith("http")) void require("electron").shell.openExternal(url);
    }
  });

  if (targetUrl) {
    win.loadURL(targetUrl);
  } else {
    win.loadURL(APP_ORIGIN);
  }
  if (process.env["ECHECK"]) {
    win.webContents.on("did-finish-load", () => {
      win.webContents
        .executeJavaScript("JSON.stringify({title: document.title, text: document.body.innerText.slice(0, 120), loc: location.href})")
        .then((s) => console.log("ECHECK:", s))
        .catch((e) => console.log("ECHECK-ERR:", e.message));
    });
    win.webContents.on("did-fail-load", (_e, code, desc) => console.log("ECHECK-FAIL:", code, desc));
  }
  return win;
}

app.whenReady().then(() => {
  protocol.handle("app", (request) => serveFromDist(request.url));
  Menu.setApplicationMenu(null);
  createWindow(APP_ORIGIN);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow(APP_ORIGIN);
  });
});

app.on("window-all-closed", () => {
  app.quit();
});
