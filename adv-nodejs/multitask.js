const https = require('node:https');
const crypto = require('node:crypto');
const fs = require('node:fs');

const start = performance.now();

const doRequest = () => {
    https.request('https://www.google.com', res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log('network: ', performance.now() - start);
        })
    }).end();
}

const doHash = () => {
    crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
        console.log('hash: ', performance.now() - start);
    })
}

doRequest();

fs.readFile('multitask.js','utf8', () => {
    console.log('fs: ', performance.now() - start);
})

doHash();
doHash();
doHash();
doHash();

/* 

Output:

network:  313.0693747997284
hash:  630.9744999408722
fs:  631.9687077999115
hash:  632.3291659355164
hash:  654.4605829715729
hash:  662.085207939148

Task: guess the console log order and explain why?

- network call gets delegated to the OS (and executes independently) 
- fs is ideally very fast (36.453) but...
- fs and crypto tasks are handled by threadpool.
    fs (reading the drive) task is an i/o operation that involves waiting (first get the file stats, then get actual content - 2 trips)...
    so in the meantime, while waiting, the next crypto task gets scheduled, later when one of the crypto task
    is done, fs task gets alloted to that particular thread and then finishes its execution (is faster than the other crypto tasks which get done subsequently). 
- note: adding the 5th thread to threadpool would make fs execute first. (due to the availability of idle thread for scheduling) and reducing to 1 thread would make fs execute last.
*/


