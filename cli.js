#!/usr/bin/env node
const { generatePlaceholder } = require('./index');
const fs = require('fs');

const imagePath = process.argv[2];

if (!imagePath) {
  console.error('Please provide an image path.');
  process.exit(1);
}

generatePlaceholder(imagePath)
  .then((placeholder) => {
    console.log('Base64 Placeholder:', placeholder);
  })
  .catch((error) => console.error(error.message));
