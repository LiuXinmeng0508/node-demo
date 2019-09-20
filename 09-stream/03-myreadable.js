#!/usr/bin/node

const Read=require('stream').Readable;

function MyReadable(){
  Read.call(this);

  var c ='a'.charCodeAt(0);

  MyReadable.prototype._read=(){
    this.push(String.fromChanCode(c++));
    if(c>'z'.charCodeAt(0) this.push(null));
  }
}

MyReadable.prototype=Read.prototype;
module.exports=MyReadable;
