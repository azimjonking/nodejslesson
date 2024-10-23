// sammi.ac dagi kodlar
/*
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
      fs.readFile(
        path.join(__dirname, "templates", "index.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url === "/about") {
      fs.readFile(
        path.join(__dirname, "templates", "about.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url === "/contact") {
      fs.readFile(
        path.join(__dirname, "templates", "contact.html"),
        "utf-8",
        (err, content) => {
          if (err) throw err;
          res.end(content);
        }
      );
    } else if (req.url === "/api/admin") {
      // res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

      const admin = {
        name: "Azimjon",
        surname: "Jalilov",
        job: "Full-Stack developer",
      };

      res.end(JSON.stringify(admin));
    }
  } else if (req.method === "POST") {
    const body = [];

    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

    req.on("data", (data) => {
      body.push(Buffer.from(data));
    });

    req.on("end", () => {
      const message = body.toString().split("=")[1];

      res.end(`Name successfully added: ${message}`);
    });
  }
});

server.listen(3000, () => {
  console.log(`Server has been started on port: 3000`);
});



*/

// yuqorida yozilgan kodlarning yaxshiroq varianti

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // Har GET so‘rovda avtomatik response yuborishni kechiktiramiz
    if (req.url === "/") {
      serveFile("index.html", res);
    } else if (req.url === "/about") {
      serveFile("about.html", res);
    } else if (req.url === "/contact") {
      serveFile("contact.html", res);
    } else if (req.url === "/api/admin") {
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });

      const admin = {
        name: "Azimjon",
        surname: "Jalilov",
        job: "Full-Stack developer",
      };

      return res.end(JSON.stringify(admin)); // return qo'shildi
    } else {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      return res.end("<h1>404 - Page Not Found</h1>"); // return qo'shildi
    }
  } else if (req.method === "POST") {
    const body = [];

    req.on("data", (data) => {
      body.push(data);
    });

    req.on("end", () => {
      const message = Buffer.concat(body).toString().split("=")[1];

      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(`Name successfully added: ${message}`);
    });
  }
});

// Statik HTML fayllarni xizmat qilish uchun funksiya
function serveFile(filename, res) {
  const filePath = path.join(__dirname, "templates", filename);

  fs.readFile(filePath, "utf-8", (err, content) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/html; charset=utf-8" });
      return res.end("<h1>Internal Server Error</h1>"); // return qo'shildi
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(content);
  });
}

server.listen(3000, () => {
  console.log(`Server has been started on port: 3000`);
});
