const sharp = require('sharp');

/**
 * Generates a base64 placeholder for an image.
 * @param {string} imagePath - Path to the image file.
 * @returns {Promise<string>} - Base64 encoded string of the blurred image.
 */
async function generatePlaceholder(imagePath) {
  try {
    const buffer = await sharp(imagePath)
      .resize(10) // Resize to 10x10 pixels
      .blur(1) // Apply slight blur
      .toBuffer();
    return `data:image/jpeg;base64,${buffer.toString('base64')}`;
  } catch (error) {
    throw new Error(`Error generating placeholder: ${error.message}`);
  }
}

module.exports = { generatePlaceholder };
