#!/usr/bin/node

const http=require('http'),
      url=require('url'),
      qs=require('querystring'),
      log=console.log;
http.createServer((req,res)=>{
  log('request URL:',req.url);
  var addr=url.parse(req.url);

  log('path-name:',addr.pathname);
  log('path parse:',addr.pathname.split('/'));
  log('query string:',addr.query);
  log('qs parse',qs.parse(addr.query));

  res.end('OK!');
}).listen(8080);

