var fs = require('fs');
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    fs.readFile('asset/navbar.html', (err, data) => {
        if (err) throw err

        res.writeHead(200, { 'Content-Type': 'text-html' })
        res.write(data);
    })
    // UNTUK MEMUNCULKAN PDF, KOMEN CODINGAN DIATAS

    var url = req.url;

    if (url === '/') {
        fs.readFile("asset/home.html", function (err, data) {
            res.end(data);
        });
    }
    else if (url === "/visi") {
        fs.readFile("asset/visi.html", function (err, data) {
            res.end(data);
        });
    }
    else if (url === "/sambutan") {
        fs.readFile("asset/sambutan.html", function (err, data) {
            res.end(data);
        });
    }
    else if (url === '/blog') {
        fs.readFile("asset/blog.html", function (err, data) {
            res.end(data);
        });
    }
    else if (url === '/perpustakaan') {
        res.writeHead(200, { 'Content-Type': 'application/pdf' });
        fs.readFile('pdf/sample.pdf', function (err, data) {
            res.end(data)
        })
    }
    else {
        res.write('404 Not Found bang');
        res.end();
    }
}).listen(9000, function () {

    console.log("http://localhost:9000");
});