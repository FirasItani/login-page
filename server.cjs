/** @format */

const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const OUT = path.join(__dirname, "invite_codes.txt");

app.post("/save-code", (req, res) => {
  console.log("POST /save-code", req.body); // added log
  const { email, code } = req.body;
  if (!code || typeof code !== "string")
    return res.status(400).json({ error: "Invalid code" });
  if (!email || typeof email !== "string")
    return res.status(400).json({ error: "Invalid email" });

  const safeEmail = email.replace(/[\r\n]/g, " ").trim();
  const safeCode = code.replace(/[\r\n]/g, " ").trim();
  const line = `${safeEmail} | ${safeCode}\n`;

  fs.appendFile(OUT, line, (err) => {
    if (err) return res.status(500).json({ error: "write failed" });
    res.json({ ok: true });
  });
});

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server listening http://localhost:${PORT}`)
);
