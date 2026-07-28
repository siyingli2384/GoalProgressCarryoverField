#!/bin/bash
cd "$(dirname "$0")" || exit 1

echo "Starting rigid-1..."
echo
echo "App:             http://127.0.0.1:3003"
echo "Admin dashboard: http://127.0.0.1:3003/admin"
echo
echo "Keep this window open while using rigid-1."
echo "Press Control+C to stop the server."
echo

SITE_NICKNAME=rigid-1 PORT=3003 node server.js
