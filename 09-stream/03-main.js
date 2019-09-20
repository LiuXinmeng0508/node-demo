#!/usr/bin/node

const MyReadable=require('./03-myreadable');

var r=new MyReadable();
r.pipe(process.stdout)
