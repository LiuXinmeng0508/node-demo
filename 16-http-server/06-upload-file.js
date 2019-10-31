#!/usr/bin/node

const http = require('http');
      fs   = require('fs'),
      qs   = require('querystring'),
      log  = require('util').debuglog('UPLOAD-FILE');

http.createServer((req, res) => {
    log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
    log(req.headers);
    log('');

    if(req.method === 'POST') {
      if(req.url !== '/upload') {
        show(res, errorPage);
        return;                  
      }

      req.setEncoding('binary');
      var file;
      req.on('data', (data)=>{
        file += data;                             
      });

      req.on('end', ()=>{
        log(file.split('\r\n'));
        var buf = file.split('\r\n')[4];
        var files = file.split('\r\n')[1].split(';');
        var fileName = qs.parse(files[2].trim())['filename'];
        fileName = fileName.slice(1, fileName.length-1);
        fs.writeFileSync(fileName, buf, {'encoding': 'binary'});
                                                            
      });

      show(res, okPage);
                        
      } else {
          if(req.url === '/') {
                  show(res, uploadPage);
                      
      } else {
                  show(res, errorPage);
                      
      }
            
    }
http.createServer((req, res) =>{

}).listen(8080);

