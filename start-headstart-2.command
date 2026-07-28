#!/bin/bash
cd "$(dirname "$0")" || exit 1

echo "Starting headstart-2..."
echo
echo "App:             http://127.0.0.1:3002"
echo "Admin dashboard: http://127.0.0.1:3002/admin"
echo
echo "Keep this window open while using headstart-2."
echo "Press Control+C to stop the server."
echo

SITE_NICKNAME=headstart-2 PORT=3002 node server.js
