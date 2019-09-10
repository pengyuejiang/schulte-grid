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
    var difficulty = core.decodeDifficulty(req.params.difficulty);
    res.render("game.ejs", {
        difficulty: difficulty,
        numSeries: core.generateRandNumSeries(difficulty)
    });
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
