import { stdin } from 'node:process'
import fs from 'node:fs'
import path from 'path'

export const write = async (path) => {
    const file = fs.createWriteStream(path)

    stdin.pipe(file)
};

write(path.resolve('files', 'fileToWrite.txt')).then(() => console.log('Succesfully write'))