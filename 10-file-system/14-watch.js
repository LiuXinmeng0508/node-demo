#!/usr/bin/node

const fs=require('fs'),
      dst=process.argv[2];
/*
      mod=process.argv[2],
      dst=process.argv[3];
*/
//fs.chmodSync(dst,Number(mod));
fs.watch(dst,function(evt,file){
  console.log("%sevt happend with file:%s",evt,file);
})
