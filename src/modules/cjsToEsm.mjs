import path from 'path';
import { release, version } from 'os';
import { createServer as createHttpServer } from 'http';
import { fileURLToPath } from 'url'
import './files/c.js'
import { createRequire } from 'node:module'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const require = createRequire(import.meta.url)

const random = Math.random();

export let unknownObject;

random > 0.5 ? unknownObject = require('./files/a.json') : unknownObject = require('./files/b.json')

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

export const createMyServer = createHttpServer((_, res) => res.end('Request accepted'));


