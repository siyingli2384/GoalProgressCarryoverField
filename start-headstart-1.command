#!/bin/bash
cd "$(dirname "$0")" || exit 1

echo "Starting headstart-1..."
echo
echo "App:             http://127.0.0.1:3004"
echo "Admin dashboard: http://127.0.0.1:3004/admin"
echo
echo "Keep this window open while using headstart-1."
echo "Press Control+C to stop the server."
echo

SITE_NICKNAME=headstart-1 PORT=3004 node server.js
