const {readFileSync,writeFileSync}=require('fs')
writeFileSync('demofile.html','Hii ,I am Nagaraj,from cse')
console.log(readFileSync('demofile.html','utf-8'))
