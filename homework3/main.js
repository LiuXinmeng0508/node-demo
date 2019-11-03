const fs = require('fs');
const http = require('http');
const URL = require('url');
const qs = require('querystring');
const path = require('path');
const {chapterList, userList} = require('./data');

var nowChapter = {};
var Id;
http.createServer((req,res)=>{
    if(req.url === '/list'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./chapterList.html','utf-8',function(err,data){
            if(err){
                console.error(err);
            }    
            else{
                if(req.method === 'GET'){
                    res.write(data.toString());
                    res.end();
                }
            }
        });
    }else if(req.url === '/login'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./login.html','utf-8',function(err,data){
            if(err){
                console.error(err);
            }
            res.write(data.toString());
            res.end();
        })
    }else if(URL === '/login_bg.jpg'){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        fs.readFile('./login_bg.jpg','binary',function(err,data){
            if(err){
                console.error(err);
            }else{
                res.write(data,'binary');
                res.end();
            }
        })  
    }else if(req.url === '/addChapter/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./addChapter.html','utf-8',function(err,data){
            if(err){
                console.error(err);
            }
            res.write(data.toString());
            res.end();
        })
    }else if(URL.parse(req.url).pathname == '/detail'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.readFile('./chapter.html','utf-8',function(err,data){
            if(err){
                console.error(err);
            }else{
                res.write(data.toString());
                res.end(data);
            }
        })
    }else if(URL.parse(req.url).pathname == '/listmanager'){
        console.log(URL.parse(req.url, true).query.username);
        if(URL.parse(req.url, true).query.username == userList[0].username&&URL.parse(req.url, true).query.pwd == userList[0].pwd){
            res.writeHead(200,{'Content-Type':'text/html'});
            fs.readFile('./list.html','utf-8',function(err,data){
                if(err){
                    console.error(err);
                }else{
                    res.write(data.toString());
                    res.end(data);
                }  
            })
        }else{
            res.end('404');
        }
    }else if(req.url == '/a/'){
        res.write(JSON.stringify(chapterList));
        res.end();
    }else if(req.url !=='/'){
        var newurl = '.'+req.url;
        res.writeHead(200,{'Content-type':"text/css"});
        fs.readFile(newurl, (err, data)=> {
            if (err) {
                console.error(err);
            }else{
                res.end(data);
            }
        });
    }else if(req.url == '/nowChapter/'){
        res.writeHead(200,{'Content-Type':'text/json'});
        nowChapter=chapterList[Id];
        res.end(JSON.stringify(nowChapter));
    }else if(req.url=='/add'){
        var nd={};
        req.on('data',function(data){
            nd=data.toString('utf8');
            var chap = qs.parse(nd);
            var tit = chap.title;
            var cont = chap.content;
            var len = chapterList.length+1;
            var date = new Date();
            var newChapter = {
                "chapterId":len,
                "chapterName":tit,
                "chapterDes":tit,
                "chapterContent":cont,
                "publishTimer":date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate(),
                "author":"admin",
                "views":1022
            }
            chapterList.push(newChapter);
        })
    }
}).listen(8083);
