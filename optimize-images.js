import sharp from 'sharp';
import { readdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const GALLERY_DIR = './public/gallery';

async function optimizeImages() {
  console.log('🎨 Optimizing gallery images...\n');

  const files = await readdir(GALLERY_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|JPG|PNG)$/i.test(file)
  );

  if (imageFiles.length === 0) {
    console.log('No images found!');
    return;
  }

  console.log(`Found ${imageFiles.length} images\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(GALLERY_DIR, file);
    const fileName = path.parse(file).name;
    const outputPath = path.join(GALLERY_DIR, `${fileName}.webp`);

    if (existsSync(outputPath)) {
      console.log(`⏭️  Skipping ${file} (already optimized)`);
      continue;
    }

    try {
      await sharp(inputPath)
        .rotate() // Auto-rotate based on EXIF orientation
        .resize(1920, 1920, { 
          fit: 'inside',
          withoutEnlargement: true 
        })
        .webp({ quality: 85 })
        .toFile(outputPath);

      console.log(`✓ Optimized: ${file} → ${fileName}.webp`);
    } catch (error) {
      console.error(`✗ Failed: ${file}`, error.message);
    }
  }

  console.log('\n✨ Done! Your images are now optimized.');
  console.log('\n📝 Next steps:');
  console.log('1. Check the .webp files look good');
  console.log('2. Delete the old .jpg/.png files if satisfied');
  console.log('3. Your gallery will load much faster now!');
}

optimizeImages().catch(console.error);