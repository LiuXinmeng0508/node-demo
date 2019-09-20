#!/usr/bin/node

const fs=require('fs'),
      dst=process.argv[2];
/*
      mod=process.argv[2],
      dst=process.argv[3];
*/
//fs.chmodSync(dst,Number(mod));
console.log(fs.statSync(dst));
