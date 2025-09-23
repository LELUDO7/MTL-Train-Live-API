#!/bin/bash
#start script pull from GitHub before starting
git reset --hard origin/main
git fetch origin

sleep 2;

node index.js
