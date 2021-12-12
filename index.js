// SETUP - DON'T DELETE ///////////
const express = require("express");
const { engine } = require("express-handlebars");
const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("./public"));
////////////////////////////////////

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/info", (req, res) => {
  res.render("info");
});

app.get("/projects/futura", (req, res) => {
  res.render("project-futura");
});

app.get("/projects/greek-theater", (req, res) => {
  res.render("project-greek-theater");
});

app.get("/projects/infographics", (req, res) => {
  res.render("project-infographics");
});

app.get("/projects/judaikit", (req, res) => {
  res.render("project-judaikit");
});

app.get("/projects/jumper92", (req, res) => {
  res.render("project-jumper92");
});

app.get("/projects/luminaire", (req, res) => {
  res.render("project-luminaire");
});

app.get("/projects/metoo", (req, res) => {
  res.render("project-metoo");
});

app.get("/projects/myposterboom", (req, res) => {
  res.render("project-myposterboom");
});

app.get("/projects/softcrab", (req, res) => {
  res.render("project-softcrab");
});

app.get("/projects/stephenwilks", (req, res) => {
  res.render("project-stephenwilks");
});

app.get("/projects/xyz", (req, res) => {
  res.render("project-xyz");
});

app.get("*", (req, res) => {
  res.redirect("/");
});

// SETUP - DON'T DELETE ///////////
if (require.main == module) {
  app.listen(process.env.PORT || 8080, () =>
    console.log("server running on 8080")
  );
}
////////////////////////////////////
