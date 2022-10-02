const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
if(req.url==='/about')
{
    res.end('Here is the about page!!!!')
}
res.end(
    `
    <h1>Opps!!</h1>
    <p>We can't seeem to find the page u are looking for!!</p>
    <a href="/">Back home</a>
    `
)
}) 

server.listen(5000)