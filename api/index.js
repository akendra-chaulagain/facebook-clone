const express = require("express");
const app = express();
const dotenv = require("dotenv");

// config dot env
dotenv.config({ path: "./config.env" });

// port no
const PORT = process.env.PORT;


app.get("/", (req, res) => {
  res.send("Akendra chaulagain from home page");
});

app.listen(PORT, () => {
  console.log(`Port no: ${PORT}`);
});
