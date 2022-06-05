import fs from "fs"
import path from 'path'

export const create = async (dirname, filename) => {
    fs.writeFile(path.resolve(dirname, filename), 'I am fresh and young', { flag: 'wx' }, err => {
        if (err) throw new Error('FS operation failed')
    })
};
create('files', 'fresh.txt').then(() => console.log('Successfully created file'))