import fs from "fs";

export const rename = async (filename, tofilename) => {
    const err = new Error('FS operation failed')

    fs.access(filename, error => {
        if (error) throw err
    })
    fs.access(tofilename, error => {
        if (!error) throw err
    })
    fs.rename(filename, tofilename, error => {
        if (error) throw err
    })
};

rename('files/wrongFilename.txt', 'files/wrongFilename.txt').then(() => console.log('Successfully renamed'))