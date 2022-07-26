const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/home", (req, res, next) => {
	res.sendFile(__dirname + "/public/views/home.html");
});

app.get("/about", (req, res, next) => {
	res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res, next) => {
	res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/galery", (req, res, next) => {
	res.sendFile(__dirname + "/public/views/galery.html");
});

app.listen(3000, () => {});
