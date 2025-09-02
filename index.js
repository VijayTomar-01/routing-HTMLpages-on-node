const http = require('http')
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT;

const pagesDirectory = path.join(__dirname, 'pages');
const publicDirectory = path.join(__dirname, 'public') 

const fileTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "application/javascript",
    ".png": "image/png"
}

const app = http.createServer((req,res)=>{
    let filePath;

    // Serving the static files from the the public directory 
    if(
        req.url.startsWith('/style.css') || 
        req.url.startsWith('/script.js') || 
        req.url.startsWith('/images')
    ){
        filePath = path.join(publicDirectory, req.url)
    } else {
        // Routes for HTML pages
        switch (req.url) {
            case '/':
            case 'nav': 
                filePath = path.join(pagesDirectory, '/nav.html');
                res.statusCode = 200;
                break;

            case '/home':
                filePath = path.join(pagesDirectory, 'home.html');
                res.statusCode = 200;
                break;

            case '/services':
                filePath = path.join(pagesDirectory, 'service.html')
                res.statusCode = 200;
                break;

            case '/contact-us':
                filePath = path.join(pagesDirectory, 'contactUs.html')
                res.statusCode = 200;
                break;

                case '/about-us':
                    filePath = path.join(pagesDirectory, 'aboutUs.html')
                    res.statusCode = 200;
                    break;
            default:
                filePath = path.join(pagesDirectory, 'Error.html')
                break;
        }
        
    }

    const ext = path.extname(filePath);
    const contentType = fileTypes[ext] || 'text/html';

    fs.readFile(filePath, (error, data)=>{
            if(error){
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end('500 - Internal server Error')
            } else{
                res.writeHead(res.statusCode, {"Content-Type": contentType})
                res.end(data)
            }
        })

})

app.listen(PORT, ()=>{
    console.log(`The Laundry Mart page is up and running on http://localhost:${PORT}`);
    
})