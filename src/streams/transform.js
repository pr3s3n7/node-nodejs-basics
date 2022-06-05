import { stdin, stdout } from 'node:process'
import stream from 'stream'

export const transform = async () => {

    const transform = new stream.Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });

    stdin.pipe(transform).pipe(stdout)
};

transform().then(() => console.log('Successfully transformed'))