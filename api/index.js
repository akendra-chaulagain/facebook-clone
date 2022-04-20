const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth")

// config dot env
dotenv.config({ path: "./config.env" });

// port no
const PORT = process.env.PORT;

// database
require("./DataBase/DB")

// middleware
app.use("/api/v1/auth",authRoutes)


app.listen(PORT, () => {
  console.log(`Port no: ${PORT}`);
});
