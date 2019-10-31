#!/usr/bin/node

const fs=require('fs'),
      dir=process.argv[2];

fs.mkdirSync(dir,function(err,data){
  if(err || typeof(dir)==='undefined'){
    console.error('命令行参数不正确');
    process.exit(1);
  }else{
    console.log(data.toString('utf8'));
  }
});
