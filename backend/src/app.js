const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const admissionRoutes = require("./routes/admissionRoutes");
const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:8080",
  })
);
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "BMS Academy backend is running.",
    apiBase: "/api",
    health: "/api/health",
  });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/admissions", admissionRoutes);
app.use("/api/contact-inquiries", contactRoutes);

app.use(errorHandler);

module.exports = app;
