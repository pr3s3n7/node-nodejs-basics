import { stdout } from 'node:process'
import path from 'path'
import fs from 'node:fs'

export const read = async (path) => {
    const read = fs.createReadStream(path)

    read.pipe(stdout)
};

read(path.resolve('files', 'fileToRead.txt')).then(() => console.log('Successfully read file'))