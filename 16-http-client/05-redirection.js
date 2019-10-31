  
#!/usr/bin/node

const http = require('http');
const addr='http://www.sian.com/';
var isOK=false;

function get(addr){
  http.get(addr,function(res){
    console.log(`HTTP${res.httpVersion} ${res.statusCode} ${res.statusMessage}`);
    console.log(res.headers);
    console.log('');
    res.pipe(process.stdout);

    if(res.statusCode<400 && res.statusCode>=300){
      get(res.headers.location);
    }
  })
};
get(addr);
