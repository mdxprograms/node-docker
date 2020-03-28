const express = require("express");

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const app = express();
app.get("/", (req, res) =>
  res
    .json({
      message: "Hello"
    })
    .status(200)
);

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
