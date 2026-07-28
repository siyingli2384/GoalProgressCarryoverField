#!/bin/bash
cd "$(dirname "$0")" || exit 1

echo "Starting rigid-2 backend and frontend..."
echo
echo "Backend dashboard: http://127.0.0.1:3001/admin"
echo "App:               http://127.0.0.1:5173"
echo
echo "Keep this window open while using the app."
echo "Press Control+C to stop both servers."
echo

SITE_NICKNAME=rigid-2 PORT=3001 node server.js &
BACKEND_PID=$!

node node_modules/vite/bin/vite.js --host 127.0.0.1 &
FRONTEND_PID=$!

cleanup() {
  kill "$BACKEND_PID" "$FRONTEND_PID" 2>/dev/null
}

trap cleanup EXIT INT TERM
wait
