const https = require('https');

// Goal: learn about internal workings of nodejs - OS delegation and network

const start = performance.now();

const doRequest = () => {
    https.request('https://www.google.com', res => {
        res.on('data', () => {});
        res.on('end', () => {
            console.log(performance.now() - start);
        })
    }).end();
}


doRequest();
doRequest(); 
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();
doRequest();

/*
Learning:
doesn't quite work same like threadpool (handled by libuv) 
network requests get delegated even further to OS level. (node -> libuv -> os)
*/

