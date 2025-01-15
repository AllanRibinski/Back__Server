const http = require('http');

const server =http.createServer((req, res)=>{
    console.log("Efetuando pedido!\n");
    
    res.setHeader('content-type','text/html')
    res.write("<h1>O que voce quer?</h1>");
    res.write("<h2>Dormir</h2>");
    res.write("<h3>cafezinho</h3>");
    res.end();
})

server.listen(3000, 'localhost', ()=>{
    console.log("Servidor no ar!!!!");
    
})
