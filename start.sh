#!/bin/bash
#start script pull from GitHub before starting
git reset --hard origin/main
git fetch origin
node index.js
