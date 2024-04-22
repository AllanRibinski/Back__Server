//sistema de rotas simples

const http= require('http');
const fs = require('fs');

let porta = 3000;
let host = 'localhost';

const server = http.createServer((req, res)=>{
    res.setHeader("content-type", "text/html")
    let html_pag = "";

    switch(req.url){
        case '/':
            html_pag = "home.html"
            res.statusCode = 200;
            break;
        case '/home':
            html_pag = "home.html"
            res.statusCode = 200;
            break;
        case '/servicos':
            html_pag = "servicos.html"
            res.statusCode = 200;
            break; 
        case '/sobre':
            html_pag = "sobre.html"
            res.statusCode = 200;
            break;
        default:
            html_pag = "404.html"
            res.statusCode = 200;
            break;

    }
    fs.readFile('./html/'+html_pag,(erro,data)=>{
        if(erro){
            console.log(erro);
            res.end();
        }
        else{
            res.write(data);
            res.end();
        }
    })
})

server.listen(porta, host,()=>{
    console.log("Servidor iniciado!")
})

//hora de criar a infra de html
//criar sistema de rotas
