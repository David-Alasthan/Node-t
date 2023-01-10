const http = require("http")
const EventEmitter = require("events")

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

myEmitter.on('newSale', () => {
    console.log("There was a new sale ");
})

myEmitter.on("newSale", () => {
    console.log("Costumer name: David");
})

myEmitter.on("newSae", stock => {
    console.log(`There are now ${stock} items left in stock`);
})

myEmitter.emit('newSale', 9);

/////////////////////////////////////

const server = http.createServer();

server.on('request', (req, res) => {
    console.log("Request Receive");
    console.log(req.url);
    res.end("Request Receive");
})

server.on('request', (req, res) => {
    res.end("Another request ");
})

server.on("close", () => {
    console.log("Server Closed!!");
})

server.listen(9000, '127.0.0.1', () => {
    console.log("Waiting for request....");
}); 