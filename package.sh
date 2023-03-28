#!/bin/bash

# Prepare dist folders
rm -rf ./dist/chrome
rm -rf ./dist/firefox

mkdir -p ./dist/chrome
mkdir -p ./dist/firefox

# Copy files - Chrome/Edge
cp ./src/background-chrome.js ./dist/chrome/background.js
cp ./src/inject.js ./dist/chrome
cp ./src/manifest-chrome.json ./dist/chrome/manifest.json
cp -r ./src/icons/ ./dist/chrome/icons

# Copy files - Firefox
cp ./src/background-firefox.js ./dist/firefox/background.js
cp ./src/inject.js ./dist/firefox
cp ./src/manifest-firefox.json ./dist/firefox/manifest.json
cp -r ./src/icons/ ./dist/firefox/icons

# Zip
cd ./dist
cd ./chrome && zip -r ../load-more-pr-chromium.zip .
cd .. 
cd ./firefox && zip -r ../load-more-pr-firefox.zip .

