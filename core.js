function generateRandNumSeries(difficulty) {
    var numSeries = [];
    for (var i = 0; i < difficulty; i++) {
        // Create a candidate integer
        var temp = Math.ceil(Math.random() * size);
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

// Export module so that the server can use it.
module.exports = {
    generateRandNumSeries
}
