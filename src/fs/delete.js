import fs from "fs"
import path from 'path'

export const remove = async (dirname, filename) => {
    fs.unlink(path.resolve(dirname, filename), err => {
        if (err) throw new Error('FS operation failed')
    })
};

remove('files', 'fileToRemove.txt').then(() => console.log('Successfully removed files'))