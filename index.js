const  http = require("http");
const port = 3000;



console.log(j.FindAndReplace("*","l"));
const server = http.createServer((req,res)=>{
    let j = req.url.slice(req.url.indexOf('/'));
    console.log(j);
switch(req.url ) {
    
    case "/saleh" :      
    res.write(`Welcome ${req.url.slice(1)}`);
    break; 
    case "/hamdi" : 
    res.write(`Welcome ${req.url.slice(1)}`);
    break;
    default : 
    res.write("Welcome Anonying");
}
   
   res.end();
})
server.listen(port,()=>{
    console.log(`Server Is Running on port ${port}`);
});
