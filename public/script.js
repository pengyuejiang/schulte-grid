// Variables
// I forgot to initialize it, that's why it didn't work!
var blocksDone = 0;
var tds = document.querySelectorAll("td");

// Add event listeners for every block
for (var i = 0; i < tds.length; i++) {
    tds[i].addEventListener("click", function() {
        // If the player is clicking in the right order, text turns green
        if (this.textContent == blocksDone + 1) {
            if (blocksDone === 0) {
                startTime = new Date();
            }
            this.classList.add("done");
            blocksDone++;
            if (blocksDone === tds.length) {
                endTime = new Date();
                var timeTaken = endTime - startTime;
                // document.querySelector("table").classList.add("vanish");
                document.querySelector("#grid").innerHTML =
                    '<p id="message">' + 'You have finished in ' +
                    '<span id="highlight">' +
                    Math.round(timeTaken / 1000) +
                    "</span>" + " seconds!" + "</p>";
            }
        }
    });
}
