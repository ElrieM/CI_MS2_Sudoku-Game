var solvedGrid = [
    [8, 6, 1, 7, 9, 4, 3, 5, 2],
    [3, 5, 2, 1, 6, 8, 7, 4, 9],
    [4, 9, 7, 2, 5, 3, 1, 8, 6],
    [2, 1, 8, 9, 7, 5, 6, 3, 4],
    [6, 7, 5, 3, 4, 1, 9, 2, 8],
    [9, 3, 4, 6, 8, 2, 5, 1, 7],
    [5, 2, 6, 8, 1, 9, 4, 7, 3],
    [7, 4, 3, 5, 2, 6, 8, 9, 1],
    [1, 8, 9, 3, 4, 7, 2, 6, 5]
];

var playGrid = [];

// Create game grid solution
function solveGrid(solvedGrid) {

    let randomTimes = Math.floor((Math.random() * 8) + 1); // Randomise grid by adding 1 for a random amount of times

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            solvedGrid[i][j] += randomTimes;
            solvedGrid[i][j] %= 9;
            solvedGrid[i][j]++;
        }
    }

    console.log(randomTimes);
    console.log(solvedGrid);

    return solvedGrid;
}

solveGrid(solvedGrid);

let selectedCells = [];

// Create play grid, empty randomly selected cells

function runPractice(playGrid) {
    playGrid = solvedGrid;
 
    let totalBlank = 24; // Easy / Medium / Hard
    let randomCell;

    for (let m = 0; m < totalBlank; m++) {
        randomCell = Math.floor(Math.random() * (81-1) + 1);

        selectedRow = Math.floor(randomCell/9);
        selectedCol = randomCell % 9;
        console.log(`Cell: ${randomCell}`);
        console.log(`Row: ${selectedRow}`);
        console.log(`Col: ${selectedCol}`);

        playGrid[selectedRow][selectedCol] = 0;
    }

    console.log(playGrid);
    return playGrid;

}
runPractice(playGrid);

