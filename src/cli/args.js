export const parseArgs = () => {
    process.argv.forEach((val, index, array) => {
        if (val.substr(0, 2) === '--') {
            console.log(`${val.substr(2)} is ${array[index + 1]}`)
        }
    })
};

parseArgs()