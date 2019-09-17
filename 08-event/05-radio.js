#!/usr/bin/node

const EventEmitter=require('events').EventEmitter,
      util=require('util');

  var _listeners={};
  EventEmitter.call(this);
  var self=this;
  
  setTimeout(()=>{
    emit('play',station);
  },0);

  setTimeout(()=>{
    emit('stop',station);
  },5000);
  function emit(ent,arg){
    if(typeof(_listeners[evt])==='undefined'){
      console.error('Error:%s not defined',evt);
      process.exit(1);
    }
    _listeners[evt].forEach(fn)=>{
      fn.call(this.arg);
    };
}

this.on=(evt,fn)=>{
  if(typeof _listeners[evt]==='undefined'){
    _listeners[evt]=[];
  }

  _listeners[evt].push(fn);
};
}

