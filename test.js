let http = require("http");
//node has this http just as browser has the document object
//Job of a server is to listen to incoming requests
let myApp = http.createServer(function (req, resp) {
  if (req.url == "/") {
    resp.end("Hello, and welcome to our home page");
  }
  if (req.url == "/about") {
    resp.end("Thank you for the interest in our Company");
  }
  resp.end("We cannot find the page you are looking for");
});
//tell the app to start listening
//pass a port number as an argument
myApp.listen(3000);
