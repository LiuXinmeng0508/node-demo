#!/usr/bin/node

const fs=require('fs'),
      mod=process.argv[2],
      dst=process.argv[3];

fs.chownSync(dst,uid,gid);

