import Worker from 'worker_threads'
import os from 'os'

export const performCalculations = async () => {
    const cpuThreads = os.cpus()
    const arr = []
    for (let i = 0; i < cpuThreads.length; i++) {
        arr.push(
            new Promise((resolve, reject) => {
                    new Worker.Worker('./worker.js', {
                        workerData: 10 + i
                    }).on('message', data => resolve({ data })
                    ).on('error', error => reject({ error }))
            })
        )
    }
    const result = await Promise.allSettled(arr)
    return result
};

console.log(await performCalculations())