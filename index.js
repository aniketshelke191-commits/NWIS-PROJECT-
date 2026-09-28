import express from "express";

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.use(express.static("public/css"));
app.use(express.static("public/script"));

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard.ejs");
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
