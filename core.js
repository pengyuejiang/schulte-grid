// Generate a random number series according to difficulty.
function generateRandNumSeries(difficulty) {
    var numSeries = [];
    for (var i = 0; i < difficulty; i++) {
        // Create a candidate integer
        var temp = Math.ceil(Math.random() * difficulty * difficulty);
        // Check for repetition
        for (var j = 0; j <= i; j++) {
            // If repeat found, try again
            if (temp === numSeries[j]) {
                i--;
                break;
            // Succeeds if no repetition
            } else if (j == i) {
                numSeries[i] = temp;
            }
        }
    }
    return numSeries;
}

// Turn difficulty into numerical representation
function decodeDifficulty(difficulty) {
    switch (difficulty) {
        case "medium":
            return 8;
            break;
        case "hard":
            return 10;
            break;
        default:
            return 6;
    }
}

// Export module so that the server can use it.
module.exports = {
    generateRandNumSeries,
    decodeDifficulty
}
