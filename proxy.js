var http = require('http')
  , httpProxy = require('http-proxy')
  , options = {
     hostnameOnly: true,
     router: {
      'hostname': '127.0.0.1:3000',
      'www.hostname': '127.0.0.1:3000'
     }
    }
  , proxyServer = httpProxy.createServer(options);
proxyServer.listen(8000);
console.log('proxy started');
