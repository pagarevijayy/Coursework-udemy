const crypto = require('node:crypto');

// Goal: learn about internal workings of nodejs - event loop - threadpool (handled by libuv)

// Exercise: to detect presence of threadpool - default 4 threads run concurrently

// thread pool size can be changed e.g. 2, 5, etc.
// process.env.UV_THREADPOOL_SIZE = 2;

const start = performance.now();

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('1: ', performance.now() - start);
})

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('2: ', performance.now() - start);
})

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('3: ', performance.now() - start);
})

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('4: ', performance.now() - start);
})

crypto.pbkdf2('a', 'b', 100_000, 512, 'sha512', () => {
    console.log('5: ', performance.now() - start);
})

/*
Output:
1:  579.0507080554962 | thread 1 - async
3:  593.0998330116272 | thread 2 - async
4:  597.7496249675751 | thread 3 - async
2:  599.7035830020905 | thread 4 - async
5:  1111.064582824707 | thread 1 - (after completion of task 1)
*/