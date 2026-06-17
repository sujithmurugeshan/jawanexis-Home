const fs = require('fs');

function getJpegSize(filePath) {
  const buffer = fs.readFileSync(filePath);
  let offset = 2; // Skip FFD8

  while (offset < buffer.length) {
    const marker = buffer.readUInt16BE(offset);
    offset += 2;

    if (marker >= 0xFFC0 && marker <= 0xFFC3) {
      // SOF0 to SOF3
      offset += 3; // Skip length and precision
      const height = buffer.readUInt16BE(offset);
      const width = buffer.readUInt16BE(offset + 2);
      return { width, height };
    } else {
      const length = buffer.readUInt16BE(offset);
      offset += length;
    }
  }
  return null;
}

const size = getJpegSize('src/assets/hr-students-blazers.png');
console.log('Width:', size.width, 'Height:', size.height);
