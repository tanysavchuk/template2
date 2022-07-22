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
  res.sendFile("index.html", { root: __dirname });
});
app.get("/contacts", (req, res) => {
  res.sendFile("contacts.html", { root: __dirname });
});
app.get("/blog", (req, res) => {
  res.sendFile("blog.html", { root: __dirname });
});
app.get("/pages", (req, res) => {
  res.sendFile("pages.html", { root: __dirname });
});
app.get("/shop", (req, res) => {
  res.sendFile("shop.html", { root: __dirname });
});
app.get("/promotion", (req, res) => {
  res.sendFile("promotion.html", { root: __dirname });
});

server.listen(3000, () => {
  console.log("listening on  port 3000");
});
