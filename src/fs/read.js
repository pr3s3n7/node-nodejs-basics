import fs from "fs";

export const read = async (path) => {
    fs.readFile(path, 'utf-8', (err, data) => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            console.log(data)
        }
    })
};

read('files/fileToRead.txt').then(() => console.log('Successfully read file'))