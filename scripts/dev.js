import { spawn } from "node:child_process";

const processes = [
  spawn("node", ["server.js"], {
    stdio: "inherit",
    shell: process.platform === "win32",
  }),
  spawn("npm", ["run", "dev:frontend", "--", "--host", "127.0.0.1"], {
    stdio: "inherit",
    shell: process.platform === "win32",
  }),
];

function stopAll() {
  processes.forEach((child) => {
    if (!child.killed) child.kill();
  });
}

process.on("SIGINT", () => {
  stopAll();
  process.exit(0);
});

process.on("SIGTERM", () => {
  stopAll();
  process.exit(0);
});

processes.forEach((child) => {
  child.on("exit", (code) => {
    if (code && code !== 0) {
      stopAll();
      process.exit(code);
    }
  });
});
