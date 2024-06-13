// utils/convertImage.js
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Function to convert image to WebP
const convertImageToWebP = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath).webp({ quality: 80 }).toFile(outputPath);
    console.log(`Converted ${inputPath} to ${outputPath}`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
};

// Process images in the specified directory
const processImages = async (sourceDir, destDir) => {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
  }

  const files = fs.readdirSync(sourceDir);
  const imageExtensions = ['.jpg', '.jpeg', '.png'];

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext)) {
      const sourceFilePath = path.join(sourceDir, file);
      const destFilePath = path.join(destDir, `${path.parse(file).name}.webp`);
      await convertImageToWebP(sourceFilePath, destFilePath);
    }
  }
};

// Example usage
const sourceDir = path.join(__dirname, '../public/images');
const destDir = path.join(__dirname, '../public/images-webp');

processImages(sourceDir, destDir);
