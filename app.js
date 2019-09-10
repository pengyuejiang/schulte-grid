// Basic setup
const express = require("express");
const app = express();
// Use resources under public/
app.use(express.static("public"));

// Routing
app.get("/", function(req, res) {
    console.log(new Date().toLocaleString() + ": GET /");
    console.log(res);
    res.render("game.ejs");
});

// Run locally
app.listen(3000, function() {
    console.log(new Date().toLocaleString() + ": Server started");
});
