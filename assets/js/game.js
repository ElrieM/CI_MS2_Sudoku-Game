// New puzzle generates on click of button
// Cells can only have a value of 1 to 9
// Each box can only contain a number once
// Some cells set to hide value, value compared to user input


// Starting point for grid
const grid = [
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

window.onload = createPuzzle();

// Puzzle creating function Adapted from https://github.com/reymon359/web-experiments/blob/master/Sudoku%20Board%20Generator/script.js
function createPuzzle() {

    let randomTimes = Math.floor((Math.random() * 9 - 2 + 1) + 2); // Randomise grid by adding 1 for a random amount of times

    for (let n = 0; n < randomTimes; n++) { // Add 1 to each grid item for randomTimes (random number of times)
        for (let i = 0; i < 9; i++) { // Row index
            for (let j = 0; j < 9; j++) { // Column index
                if (grid[i][j] + 1 === 10) {
                    grid[i][j] = 1;
                } else {
                    grid[i][j] += 1;
                }
            }
        }
    }


    // Copy grid contents to board
    for (let c = 1; c < 82; c++) { // Counts through all 81 cells
        for (let k = 1; k < 10; k++) { // Runs through each of the 9 boxes
            let box = document.getElementById(`box-${k}`);
            box.innerHTML = ""; // Clears previous grid

            if (k === 1 || k === 2 || k === 3) {
                rowLower = 1 - 1;
                rowUpper = 3;
            } else if (k === 4 || k === 5 || k === 6) {
                rowLower = 4 - 1;
                rowUpper = 6;
            } else if (k === 7 || k === 8 || k === 9) {
                rowLower = 7 - 1;
                rowUpper = 9;
            }

            if (k === 1 || k === 4 || k === 7) {
                colLower = 1 - 1;
                colUpper = 3;
            } else if (k === 2 || k === 5 || k === 8) {
                colLower = 4 - 1;
                colUpper = 6;
            } else if (k === 3 || k === 6 || k === 9) {
                colLower = 7 - 1;
                colUpper = 9;
            }

            for (let i = rowLower; i < rowUpper; i++) { // Row index
                for (let j = colLower; j < colUpper; j++) { // Column index
                    box.innerHTML += `<div class="cell">${(grid[i][j])}</div>`;
                }
            }
        }
    }

        // Randomly select cells to empty
        let selectedCells = [];
        let totalBlank = 24;
        let randomCell;

        for (let m = 0; m < totalBlank; m++) {
            randomCell = Math.floor(Math.random() * 81 + 1);

            if (m === 0) {
                selectedCells.push(randomCell);
            } else {
                do {
                    randomCell = Math.floor(Math.random() * 81 + 1);
                }
                while (selectedCells.includes(randomCell) || randomCell === 0);
                selectedCells.push(randomCell);
            }
        }
        console.log(selectedCells);

    }