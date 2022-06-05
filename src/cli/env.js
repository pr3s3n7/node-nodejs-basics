export const parseEnv = () => {
    process.env.RSS_name1 = 'value1'
    process.env.RSS_name2 = 'value2'

    const env = process.env

    for (let key in env) {
        if (key.substr(0, 4) === 'RSS_') {
            console.log(`${key}=${env[key]}`)
        }
    }
};

parseEnv()