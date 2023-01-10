const fs = require("fs");
const server = require("http").createServer();

server.on('request', (req, res) => {
    //solution 1
    // fs.readFile('text-file.txt', (err, data) => {
    //     if(err) console.log("err");
    //     res.end(data);
    // })

    //solution 2
    // const readble = fs.createReadStream('texttt-file.txt')
    // readble.on('data', chunk => {
    //     console.log('Hello Readble');
    //     res.write(chunk)
    // })
    // readble.on('end', () => {
    //     res.end();
    // })
    // readble.on('error', error => {
    //     console.log('No Found');
    //     res.statusCode = 500;
    //     res.end("File is not found");
    // })

    //solution 3
    const readable = fs.createReadStream("text-file.txt")
    readable.pipe(res);
})

server.listen(9000, '127.0.0.1', () => {
    console.log('Listening ...');
})