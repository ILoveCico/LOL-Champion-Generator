const fs = require('fs');

// Function to get random `n` champions
function getRandomNChampions(n) {
    // Read and parse JSON file
    const data = JSON.parse(fs.readFileSync('champion.json', 'utf8'));
    
    // Extract champion names
    const championNames = Object.keys(data.data);

    // Shuffle array and get n random items
    const shuffled = championNames.sort(() => 0.5 - Math.random());
    const randomChampions = shuffled.slice(0, n);

    // Return formatted result
    return "Team: " + randomChampions.join(", ");
}

// Call the function and get 10 random champions
console.log