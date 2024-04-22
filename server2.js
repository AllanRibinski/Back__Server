const http = require("http");
const fs = require("fs");

let port = 3000;
let host = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  fs.readFile("page1.html", (erro, data) => {
    if (erro) {
      res.write("Deu errado, sinto muito!");
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, host, () => {
  console.log("Servidor inicializado");
});