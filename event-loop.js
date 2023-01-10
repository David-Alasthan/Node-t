const fs = require("fs")
const crypto = require("crypto") 

const start = Date.now();
process.env.UV_THREADPOOL_SIZE = 2;

setTimeout(() => console.log("Timer 1 Finish "), 0);
setImmediate(() => console.log('Immediate'))

fs.readFile('text-file.txt', () => {
    console.log('I/O Finished');
    
    setTimeout(() => console.log("Timer 1 Finish 00 "), 0);
    setTimeout(() => console.log("Timer 1 Finish 3000 "), 3000);
    setImmediate(() => console.log('Immediate'))

    process.nextTick(() => console.log('process.nexTick'))

    crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
    console.log(Date.now() - start, "Password encrypted");

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "Password encrypted");
    });

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "Password encrypted");
    });

    crypto.pbkdf2("password", "salt", 100000, 1024, "sha512", () => {
        console.log(Date.now() - start, "Password encrypted");
    });

} )

console.log("Hello from the top-level code");