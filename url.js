const { parse } = require('path');
const url=require('url')
const addr='http://localhost:8080/default.html year=2023&month=may';
const q=url.parse(addr,true);

console.log(q.host);
console.log(q.hostname);
console.log(q.path);
console.log(q.search);