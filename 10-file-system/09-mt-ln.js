#!/usr/bin/node

const fs=require('fs');
switch(process.argv.length){
  case 4://hard link
    var src=process.argv[2],
        lnk=process.argv[3];

    fs.linkSync(src,lnk);
    break;

  case 5://soft link
    var opt=process.argv[2],
        src=process.argv[3],
        lnk=process.argv[4];

    if(opt !== '-s')ErrMsg();
    fs.symlinkSync()
    break;

  default://error
    ErrMsg();
}
function ErrMsg(){
  console.log('ERR:命令行语法不正确!');
}
