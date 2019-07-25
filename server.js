const SSE = require("sse");
const http = require("http");

let val = 0;
const server = http.createServer(function(req,res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Access-Control-Allow-Origin': '*'
    });

    setInterval(function() {
        val++
        msg = "id: msg1\ndata: test " + val + "\n\n";

        res.write(msg);
    }, 3000);
})

server.listen(8000, "127.0.0.1", function() {
    const sse = new SSE(server);
    sse.on("connection", function(client) {
        client.send("hi there!")
    })
})