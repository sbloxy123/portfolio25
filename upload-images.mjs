import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import cloudinary from './lib/cloudinary.js';

const allowedExtensions = /\.(jpg|jpeg|png|gif|webp|svg)$/i;

function getAllFiles(dir, allFiles = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      getAllFiles(fullPath, allFiles);
    } else {
      // Only add if it matches allowed extensions
      if (allowedExtensions.test(entry.name)) {
        allFiles.push(fullPath);
      }
    }
  }
  return allFiles;
}

async function main() {
  const baseDir = path.join(process.cwd(), 'public/images');
  const files = getAllFiles(baseDir);

  const uploadedMap = {};

  for (const filePath of files) {
    // Derive a Cloudinary folder based on subdirectory structure
    // e.g. 'projects/rosco.png'
    const relativePath = path.relative(baseDir, filePath);
    const folderInCloud = path.dirname(relativePath); // e.g. 'projects'
    const fileName = path.parse(filePath).name; // e.g. 'rosco'

    console.log(`Uploading ${relativePath}...`);
    try {
      const result = await cloudinary.uploader.upload(filePath, {
        folder: `my-site/${folderInCloud}`, // nest under my-site/projects, my-site/stack-icons, etc.
        public_id: fileName,
        overwrite: true,
      });
      uploadedMap[relativePath] = result.secure_url;
    } catch (err) {
      console.error(`Failed to upload ${relativePath}: ${err.message}`);
    }
  }

  fs.writeFileSync(
    path.join(process.cwd(), 'cloudinary-images.json'),
    JSON.stringify(uploadedMap, null, 2),
  );
  console.log('Upload complete!');
}

main();
