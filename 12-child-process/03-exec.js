#!/usr/bin/node

const cp=require('child_process');

cp.exec('cat -n 03-exec.js',function(err,out,error){
  if(err){
    console.error(error);
    process.exit(1);
  }
  console.log(out);
});
