const fs = require("fs");
const http = require("http");
const url = require("url");

// Blocking synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `This all obvious : ${textIn}. \n Created on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);

// console.log("file written");

// Non-blocking asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (error, data1) => {
//   if (error) return console.log("ERROR");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (error, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (error, data3) => {
//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written ");
//       });
//     });
//   });
// });
// console.log("will read file!s");

///////////////////////////////
//  SERVER
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
// const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  if (pathName === "/" || pathName === "/overview") {
    res.end("hello from overview");
  } else if (pathName === "/product") {
    res.end("hello from product");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Contect-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page not found</h1>");
  }
});

server.listen(8080, () => {
  console.log("Listening to the port 8080");
});
