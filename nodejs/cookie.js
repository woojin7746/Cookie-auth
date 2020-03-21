var http = require("http");
var cookie = require("cookie");

http
  .createServer(function(request, response) {
    var cookies = {};
    if (request.headers.cookie !== undefined) {
      var cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies.yummy_cookie);
    response.writeHead(200, {
      "Set-cookie": [
        "yummy_cookie=choco",
        "tasty_cookie=strawberry",
        `Permanenet=cookies; Max-Age=${60 * 60 * 24 * 30}`,
        "Secure=Secure; Secure",
        "HttpOnly=HttpOnly; HttpOnly;",
        "Path=path; Path=/cookie",
        "Domain=domain; Domain=o2.org"
      ]
    });
    response.end("Cookie!");
  })
  .listen(3000);
