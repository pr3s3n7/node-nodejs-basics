import fs from "fs";

export const list = async (path) => {
    fs.access(path, error => {
        if (error) throw new Error('FS operation failed')
    })
    fs.readdir(path, (error, files) => {
        files.forEach(file => {
            console.log(file)
        })
    })
};

list('files')
    .then(() => console.log('Successfully read files'))