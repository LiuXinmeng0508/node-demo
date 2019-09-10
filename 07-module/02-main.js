#!/usr/bin/node

/*
const p=require('./02-export-var.js');

console.dir(module);
console.log(p);
*/

/*
const circle=require('./02-export-function');

console.log('r=10,cirrcle area:%d,circle circumference:%d',circle(10).circumference());
console.dir()
*/

/*
const circle=require('./02-export-object.js'),
      log=console.log;

log('r=10,circle diameter:',circle.area(10));
log('r=10,circle.area:',circle.area(10));
console.dir(module);
*/

var area=require('./02-export-object-v2.js');
console.log('r=10,circle area:',circlr.area(10));
console.log('r==10,diameter:',circle.area(10));



