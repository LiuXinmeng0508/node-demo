#!/usr/bin/node

const EventEmitter=require('events').EventEmitter,
      util=require('util');

function Radio(station){
  EventEmitter.call(this);

  var self=this;
  
  setTimeout(()=>{
    self.emit('play');
  },0);

  setTimeout(()=>{
    self.emit('stop');
  },5000);
}

util.inherits(Radio,EventEmitter);

module.exports=Radio;
