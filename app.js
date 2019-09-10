// Basic setup
const app = require("express")();

// Routing
app.get("/", function(req, res) {
    console.log(new Date().toLocaleString() + ": GET /");
    res.render("game.ejs");
});

// Run locally
app.listen(3000, function() {
    console.log(new Date().toLocaleString() + ": Server started");
});
