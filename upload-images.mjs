// upload-images.js
import fs from 'fs';
import path from 'path';
import cloudinary from './lib/cloudinary.js'; // or require('./lib/cloudinary')

const imagesDir = path.join(process.cwd(), 'public');
const outputFile = path.join(process.cwd(), 'cloudinary-images.json');

async function uploadImages() {
  const imageMap = {};

  // read all files from the images directory
  const files = fs.readdirSync(imagesDir);

  for (const file of files) {
    const filePath = path.join(imagesDir, file);
    if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      console.log(`Uploading ${file}...`);

      try {
        // optional: specify a folder in Cloudinary
        const result = await cloudinary.uploader.upload(filePath, {
          folder: 'my-nextjs-site', // or any folder name you like
          public_id: path.parse(file).name,
          overwrite: true,
        });

        // store the secure URL in a map
        imageMap[file] = result.secure_url;
      } catch (err) {
        console.error(`Failed to upload ${file}:`, err);
      }
    }
  }

  // write the JSON mapping of local filenames => cloudinary URLs
  fs.writeFileSync(outputFile, JSON.stringify(imageMap, null, 2));
  console.log(`Upload complete! Image map saved to: ${outputFile}`);
}

uploadImages();
