const http = require('http');
const hostname = '127.0.0.1';
const port = 3011;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<!DOCTYPE html> <head> <title>Curr&iacuteculo</title></head> \
              <body>\
                <div id="main"> \
                      <p><center><h1><strong> Giovanna Rodrigues Araujo </strong></h1> \
                       <h2> Rua Serra Preta, 501, Jardim Danfer, S&atildeo Paulo, SP</h2> \
                       <h2> (011)94894-1535 | (11)2541-3245 </h2> \
                       <h2> giovanna.rodrigues@sou.inteli.edu.br </h2> \
                       <h2> 17 anos | Brasileira | Solteira <h2></center></p></div> \
              </body> \
           </html>');
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});