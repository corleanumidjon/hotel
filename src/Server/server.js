import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  if (req.method == "GET") {
    let url = JSON.parse(fs.readFileSync(path.join(process.cwd(), "api.json")));
    return res.end(JSON.stringify(url));
  }
});

server.listen(3000, console.log(3000));
