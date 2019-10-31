#!/usr/bin/node

const http=require('http'),
      log=console.log;
http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  
  res.end('OK!');
  }).listen(8080);
