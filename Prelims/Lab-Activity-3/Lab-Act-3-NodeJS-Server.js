//Laboratory Act 3
//Fernan, Rolyn Joyce F.
//WD - 201

var http = require('http');

var server = http.createServer(function (req, res) {
  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is Home Page.</h1><p>Created by Rolyn Joyce Fernan.</p></body></html>'
    );
    res.end();
  } else if (req.url == '/student') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is The Student Page.</h1><p>Contents of this page will be uploaded soon</p></body></html>'
    );
    res.end();
  } else if (req.url == '/admin') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is The Student Page.</h1><p>Contents of this page will be uploaded soon</p></body></html>'
    );
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is The About Page.</h1><p>Contents of this page will be uploaded soon</p></body></html>'
    );
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is The Contact Page.</h1><p>Contents of this page will be uploaded soon</p></body></html>'
    );
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(
      '<html><body><h1>This is The Gallery Page.</h1><p>Contents of this page will be uploaded soon</p></body></html>'
    );
    res.end();
  } else res.end('Invalid Request!');
});

server.listen(5000);
console.log('Node.js web server is at port 5000 is running..');
