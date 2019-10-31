#!/usr/bin/node

const fs=require('fs'),

Object.defineProperty(global, '__stack', {
  get: function(){
        var orig = Error.prepareStackTrace;
        Error.prepareStackTrace = function(_, stack){
          return stack;
        };
        var err = new Error;
        Error.captureStackTrace(err, arguments.callee);
        var stack = err.stack;
        Error.prepareStackTrace = orig;
        return stack;                          
  }
});

Object.defineProperty(global, '__line', {
  get: function(){
        return __stack[1].getLineNumber();
          
  }

});
try{
  console.log("filename:" + __FILE__ + "." + __LINE__ + ",\t" + "filesize" + new Date().toISOString() + " Message ");
}catch(err){
  console.error('命令行参数不正确');
  process.exit(1);
}
