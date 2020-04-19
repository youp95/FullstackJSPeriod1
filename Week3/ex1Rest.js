const http = require("http");
const { getSecureRandoms } = require("/.exercise1.js");
const endPoint = "/api/securerandoms";

const server = http.createServer((req, res) => {
    if (req.url === endPoint) {
      res.setHeader('Content-Type', 'application/json');
      (async() => {
      const numbers = [48, 40, 32, 24, 16, 8];
      let randObjs = {
          title: numbers.length + "randoms"
    };
    let result = await getSecureRandoms(numbers);
    randObjs.randoms = result;
    res.write(JSON.stringify(randObjs, null, '\t'));
    return res.end();
})();
}
    if (req.url === '/') {
      res.setHeader('Content-Type', 'text/html');
      res.write(`<h2>Exercise 1</h2>
      <p>Exposes this endpoint <a href="${endPoint}"><code>${endPoint}</code></a></p>`);
      return res.end();
    }
  });
 
  server.listen(3000);
  console.log('listening on 3000');