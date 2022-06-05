const { createHash } = await import('node:crypto')
import path from 'path'
import fs from 'node:fs'
import { stdout } from 'node:process'

export const calculateHash = async (path) => {
    const hash = createHash('sha256')
    const file = fs.createReadStream(path)
    file.pipe(hash).setEncoding('hex').pipe(stdout)
};

calculateHash(path.resolve('files', 'fileToCalculateHashFor.txt')).then(() => console.log('Successfully calculated'))