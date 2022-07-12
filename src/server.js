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
  res.sendFile("template2/src/index.html", { root: __dirname });
});
app.post("/save-your-spot", (req, res) => {
  res.sendFile("template2/src/index.html", { root: __dirname });
  console.log("POST save-your-spot: ", req.body.userName);
});
server.listen(3000, () => {
  console.log("listening on  port 3000");
});
