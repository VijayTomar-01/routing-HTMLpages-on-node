# Laundry Mart HTTP server 
It's a simple http server built with node to serve the static files (html, css, js and images)


## Structure

project
    => pages/ # HTML pages
         -> nav
         -> home
         -> aboutUs
         -> contautUs
         -> services
         -> error

    => public/ # Serves the static file
         -> images
         -> script.js
         -> style.css
    
    => index.js
    => .env
    => package.json

## How it works

### Creating the server
    To create the server initialise node and create through http.createServer and make it listen on the port

    To navigate the static html, css, js, and images use MIME(tells the server the type of files being sent) and serve these with the headers at the start (i used fileTypes as name in the project)

    Get the pages stored in the pagesDirectory(if created) using __dirname to store the absolute path

    When the server is created Serve the static files at the start and use path.join (combine multiple paths) for the static directory(if created)
    Note -> May use the ifelse condition for static files and pages navigation

    Note -> Used filePath variable so that to give the content-type: "text/html", for all the HTML files at once using path.extname(){returns file extension}
    Note -> Different from MIME served at the start of the server containg differnt static files(css, js, images etc)

    finally fs.readfile(){fileSystem} read all the files and i used it such that it return (error, data) call back for any error handling

## For instatallation $ setup

    -> clone the server
    -> npm i (for node_modules and package-lock.json)
    -> create .env file and store PORT=4000 (npm i dotenv) or replace process.env.port with PORT = xyz(your port)  
    -> Start the server npm run dev (for nodemon) or npm run start (for node)
