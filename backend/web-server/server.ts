require("dotenv").config();
import express from "express";

const webserver = process.env.WEB_SERVER;
const port = process.env.WEB_SERVER_PORT;

const app = express();

app.get("/", (req) => {
  // req.name = "bob";
  console.log("root pathhhh");
});

app.listen(port, () => {
  console.log(`Web server listening on ${webserver}:${port}/`);
});
