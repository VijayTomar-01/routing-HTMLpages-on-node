# Laundry Mart HTTP server 
It's a simple http server built with node to serve the static files (html, css, js and images)


## Structure

```
project/
├─ pages/
│  ├─ aboutUs.html
│  ├─ contactUs.html
│  ├─ Error.html
│  ├─ home.html
│  ├─ nav.html
│  └─ service.html
├─ public/
│  ├─ images/
│  │  ├─ afford-price.png
│  │  ├─ delivery.png
│  │  ├─ laundry.png
│  │  ├─ logo.png
│  │  └─ support.png
│  ├─ script.js
│  └─ style.css
├─ serverTestScreenshots/
│  ├─ AboutusTests/
│  │  ├─ aboutusNetworkTest.png
│  │  ├─ aboutusTest.png
│  │  └─ reqResMethodUrl.png
│  ├─ contactTest/
│  │  ├─ contactNetworkTest.png
│  │  ├─ contactTest.png
│  │  └─ resreqMethodUrl.png
│  ├─ errorTest/
│  │  ├─ ErrorNetworkTest.png
│  │  ├─ ErrorTest.png
│  │  └─ resReqMethodUrl.png
│  ├─ homeTests/
│  │  ├─ homeNetworkTest.png
│  │  ├─ homeTest.png
│  │  └─ reqResMethodUrl.png
│  ├─ navTests/
│  │  ├─ navNetworkRespons.png
│  │  ├─ navPage.png
│  │  └─ reqResWithMethodAndUrl.png
│  └─ serviceTests/
│     ├─ resReqMethodUrl.png
│     ├─ servicesNetworkTest.png
│     └─ servicesTest.png
├─ .env
├─ .gitignore
├─ index.js
├─ package-lock.json
├─ package.json
└─ readme.md

```
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
    
    Routing is implemented with a simple switch statement:
        /home -> home.html
        /about-us -> aboutUs.html
        /contact-us -> contactUs.html
        /services -> service.html
        /nav -> nav.html
    Any invalid route → Error.html (custom 404 page)

## Routes Tested

### Nav Route
[Nav Page](./serverTestScreenshots/navTests/navPage.png)
[Nav Network](./serverTestScreenshots/navTests/navNetworkRespons.png)
[Nav Req/Res](./serverTestScreenshots/navTests/reqResWithMethodAndUrl.png)

### Home Route
[Home Page](./serverTestScreenshots/homeTests/homeTest.png)
[Home Network](./serverTestScreenshots/homeTests/homeNetworkTest.png)
[Home Req/Res](./serverTestScreenshots/homeTests/reqResMethodUrl.png)

### Service Route
[Service Page](./serverTestScreenshots/serviceTests/servicesTest.png)
[Service Network](./serverTestScreenshots/serviceTests/servicesNetworkTest.png)
[Service Req/Res](./serverTestScreenshots/serviceTests/resReqMethodUrl.png)

### Contact Route
[Contact Page](./serverTestScreenshots/contactTest/contactTest.png)
[Contact Network](./serverTestScreenshots/contactTest/contactNetworkTest.png)
[Contact Req/Res](./serverTestScreenshots/contactTest/resreqMethodUrl.png)

### About Route
[About Page](./serverTestScreenshots/AboutusTests/aboutusTest.png)
[About Network](./serverTestScreenshots/AboutusTests/aboutusNetworkTest.png)
[About Req/Res](./serverTestScreenshots/AboutusTests/reqResMethodUrl.png)

### Error Route
[Error Page](./serverTestScreenshots/errorTest/ErrorTest.png)
[Error Network](./serverTestScreenshots/errorTest/ErrorNetworkTest.png)
[Error Req/Res](./serverTestScreenshots/errorTest/resReqMethodUrl.png)


## For instatallation & setup

    -> clone the server
    -> npm i (for node_modules and package-lock.json)
    -> create .env file and store PORT=4000 (npm i dotenv) or replace process.env.port with PORT = xyz(your port)  
    -> Start the server npm run dev (for nodemon) or npm run start (for node)
