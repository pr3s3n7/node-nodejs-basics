import fs from "fs";
import fs_extra from 'fs-extra'
import path from "path";
import {fileURLToPath} from "url";
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const copy = async (dirname, todirname) => {
    const err = new Error('FS operation failed')

    fs.mkdir(path.resolve(__dirname, todirname), error => {
        if (error) throw err
    })

    fs.readdirSync(dirname).forEach(element => {
        fs.lstatSync(path.resolve(dirname, element)).isFile() ?
            fs.copyFileSync(path.resolve(dirname, element), path.resolve(todirname, element)) :
            copy(path.resolve(dirname, element), path.resolve(todirname, element))
    });
}

copy('files', 'files_copy').then(() => console.log('Successfully copied'))