var http = require('http');
var express = require('express');
var requestProxy = require('express-request-proxy');
var app = express();
var config = require('./proxy.json');

for (var i = 0; i < config.remoteApiServers.length; i++) {
    app.all(config.remoteApiServers[i].localPath,
        requestProxy({
            url: config.remoteApiServers[i].remotePath
        })
    );
    app.all(config.remoteApiServers[i].localPath + '/*',
        requestProxy({
            url: config.remoteApiServers[i].remotePath + '/*'
        })
    );
}

app.use(config.localServer.publicBaseUrl, express.static(config.localServer.publicDir));

app.listen(config.localServer.port, function () {
    console.log('Proxy Server running at localhost:' + config.localServer.port);
});