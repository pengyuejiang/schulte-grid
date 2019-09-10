// Basic setup
const express = require("express");
const app = express();
// Import core
const core = require("./core.js");
// Use resources under public/
app.use(express.static("public"));

// Routing
app.get("/:difficulty", function(req, res) {
    printLog("GET /" + req.params.difficulty);
    res.render("game.ejs", {
        difficulty: req.params.difficulty
    });
    console.log(core.foo);
});

app.get("*", function(req, res) {
    res.redirect("/easy");
});

// Run locally
app.listen(3000, function() {
    printLog("Server started");
});

function printLog(message) {
    console.log(new Date().toLocaleString() + ": " + message);
}
