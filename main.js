const http=require('http')
// const dateModule=require('./myDateModule')

http.createServer((request,response)=>{
response.writeHead(200,{'content-type':'text/html'})

  // response.write('Hello World\n')
  // response.write(dateModule.CurrentDateTime())

response.end()
}).listen(4000)