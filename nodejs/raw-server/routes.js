const fs = require('node:fs');

const requestHandler = (req, res) => {
    console.log('incoming request...')

    const url = req.url;
    const method = req.method;


    if(url === '/'){
        res.setHeader('Content-Type', 'text/html')
        res.write( 
            `
            <html>
            <head>
                <title>Hello world</title>
            </head>
                <body>
                    <p>Welcome to SSR</p>
                    <form method='POST' action='/message' >
                    <input type='text' name='message'></input>
                    <button type='submit'>send</button>
                    </form>

                </body>
            </html>
            `
        );
        return res.end();
    }

    if(url === '/message' && method == 'POST'){
        const body = [];
        // console.log('message...')

        req.on('data', (chunk) => {
            // console.log('chunk', chunk)
            body.push(chunk);
        })

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message, ()=>{
                res.statusCode= 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
    
    res.setHeader('Content-Type', 'text/html')
    res.write( 
        `
        <html>
        <head>
            <title>Hello world</title>
        </head>
            <body>
                <h1>Welcome to nodejs baby!</h1>
            </body>
        </html>
        `
    );

    return res.end();
}

module.exports = requestHandler;