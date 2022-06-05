import zlib from 'node:zlib'
import fs from 'fs'

export const decompress = async (input, output) => {
    const read = fs.createReadStream(input)
    const write = fs.createWriteStream(output)
    const unzip = zlib.createGunzip()

    read.pipe(unzip).pipe(write)
};

decompress('files/archive.gz', 'files/fileToCompress.txt')
    .then(() => console.log('Successfully decompressed'))