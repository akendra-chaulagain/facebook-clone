const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const helmet = require("helmet");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");
const infoRoutes = require("./routes/info");

// config dot env
dotenv.config({ path: "./config.env" });

// port no
const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

// customized middleware
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/info", infoRoutes);

app.listen(PORT, () => {
  console.log(`Port no: ${PORT}`);
});
