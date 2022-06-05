import zlib from 'node:zlib'
import fs from 'fs'

export const compress = async (input, output) => {
    const read = fs.createReadStream(input)
    const write = fs.createWriteStream(output)
    const gzip = zlib.createGzip()

    read.pipe(gzip).pipe(write)
};

compress('files/fileToCompress.txt', 'files/archive.gz')
    .then(() => console.log('Successfully compressed'))