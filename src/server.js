import express, { json } from "express";
import path from "path";
import http from "http";
import { fileURLToPath } from "url";

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);
const app = express();

app.use("/static", express.static(path.join(__dirname, "../public")));
app.use(json());

const server = http.createServer(app);

app.get("/", (req, res) => {
  res.sendFile("pages/home/index.html", { root: __dirname });
});
app.get("/contacts", (req, res) => {
  res.sendFile("pages/contacts/index.html", { root: __dirname });
});
app.get("/blog", (req, res) => {
  res.sendFile("pages/blog/index.html", { root: __dirname });
});
app.get("/pages", (req, res) => {
  res.sendFile("pages/pages/index.html", { root: __dirname });
});
app.get("/shop", (req, res) => {
  res.sendFile("pages/shop/index.html", { root: __dirname });
});
app.get("/promotion", (req, res) => {
  res.sendFile("pages/promotion/index.html", { root: __dirname });
});

server.listen(3000, () => {
  console.log("listening on  port 3000");
});
