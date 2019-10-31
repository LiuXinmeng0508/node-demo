#!/usr/bin/node

const server = require('http').createServer(),
      assert = require('assert');

http.createServer((req,res)=>{
  log('\n\n${req.method} ${req.url} ${req.httpVersion}');
  log(req.headers);
  log();

  switch(){
    case '/admin':
      var auth = req.headers.authorization;
      if(typeof auth)
      var usr = getUserNamePwd(auth);
      if(usr.username === 'wangding' && usr.password === '123'){
        showSecret(req,res);
      }else{
        showNormal(res)
      }

    default:
      showNormal();
      break;
  }
})

function showNormal(){
  res.end('hello!A good Day!');
}
function 

function getUserNamePwd(auth){
  log('authorization:',auth);
  if(typeof auth !== 'undefined'){
    auth = auth.split('');
    if(auth[0] === 'Basic'){
      var buf = new Buffer(auth[1],'base64');
      var usr = buf.toString('utf8')
    }
  }
}
