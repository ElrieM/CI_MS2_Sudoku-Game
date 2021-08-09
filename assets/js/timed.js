/* jshint esversion: 6 */

// Runs challenge game
function runChallenge() {
    window.location.href = 'challenge.html';
}

window.onload = timedGame();

function timedGame() {
    var totalBlank = 20;

    var level = document.getElementById('level-select');
    // Assign number of cells blank based on level selection
    // Adapted from https://stackoverflow.com/questions/37538217/how-to-get-addeventlistener-to-work-with-a-select-tag
    level.addEventListener("change", function () {
        totalBlank = this.value;
        console.log(totalBlank);
        solveGrid(solvedGrid, playGrid);
        createchallengeGame(playGrid);
        displaychallengeGrid();
        resetclock();
        startclock();
    }, false);

    console.log(totalBlank);

    // New game button: creates new puzzle and resets stopwatch clock
    document.getElementById("newButton").addEventListener("click", function () {
        solveGrid(solvedGrid, playGrid);
        createchallengeGame(playGrid);
        displaychallengeGrid();
        resetclock();
        startclock();
    });

    // Solve game button: shows puzzle solution and resets stops stopwatch clock
    document.getElementById("solveButton").addEventListener("click", function () {
        displaySolvedGrid();
        stopclock();
    });
    
    // Restart game button: creates new puzzle and resets stopwatch clock
    document.getElementById("restartButton").addEventListener("click", function () {
        totalBlank = 0;
        console.log(totalBlank);
        displaychallengeGrid();
        resetclock();
    });

    // Button to start clock
    document.getElementById("start").addEventListener("click", startclock);

    // Button to stop clock
    document.getElementById("stop").addEventListener("click", stopclock);

    // Puzzle creating function Adapted from https://github.com/reymon359/web-experiments/blob/master/Sudoku%20Board%20Generator/script.js

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

    var playGrid = [
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

    // Create game grid solution
    function solveGrid(solvedGrid, playGrid) {

        let randomTimes = Math.floor((Math.random() * 8) + 1); // Randomise grid by adding 1 for a random amount of times

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                solvedGrid[i][j] += randomTimes;
                solvedGrid[i][j] %= 9;
                solvedGrid[i][j]++;
                playGrid[i][j] = solvedGrid[i][j];
            }
        }

        console.log(randomTimes);
        console.log(solvedGrid);
        console.log(playGrid);

        return solvedGrid, playGrid;
    }

    // Creates game grid on load
    solveGrid(solvedGrid, playGrid);

    // Create play grid, empty randomly selected cells
    function createchallengeGame(playGrid) {
        gridSolution = playGrid;

        let randomCell;

        for (let m = 0; m < totalBlank; m++) {
            randomCell = Math.floor(Math.random() * (81 - 1) + 1);

            selectedRow = Math.floor(randomCell / 9);
            selectedCol = randomCell % 9;

            playGrid[selectedRow][selectedCol] = 0;
        }

        console.log(playGrid);
        console.log(solvedGrid);
        return playGrid;
    }

    // Display game grid, showing nil values as blank cells
    function displaychallengeGrid() {

        displayGrid = createchallengeGame(playGrid);

        console.log(displayGrid);

        for (i = 1; i < 10; i++) { // Box number
            let box = document.getElementById(`box-${i}`);
            box.innerHTML = ""; // Clears previous grid

            // Sets value of row based on box
            if (i === 1 || i === 2 || i === 3) {
                rowLower = 1 - 1;
                rowUpper = 3;
            } else if (i === 4 || i === 5 || i === 6) {
                rowLower = 4 - 1;
                rowUpper = 6;
            } else if (i === 7 || i === 8 || i === 9) {
                rowLower = 7 - 1;
                rowUpper = 9;
            }

            // Sets value of column based on box
            if (i === 1 || i === 4 || i === 7) {
                colLower = 1 - 1;
                colUpper = 3;
            } else if (i === 2 || i === 5 || i === 8) {
                colLower = 4 - 1;
                colUpper = 6;
            } else if (i === 3 || i === 6 || i === 9) {
                colLower = 7 - 1;
                colUpper = 9;
            }

            // Displays values in grid
            for (let j = rowLower; j < rowUpper; j++) { // Row index
                for (let k = colLower; k < colUpper; k++) { // Column index
                    if (displayGrid[j][k] === 0) {
                        box.innerHTML += `
                        <div class="cell">
                        <label for inputVal></label>
                        <input class="input-cell" name="inputVal" id="inputVal" type="number" step="1" min="1" max="9" maxlength="1"></div>`;
                    } else {
                        box.innerHTML += `<div class="cell">${(displayGrid[j][k])}</div>`;
                    }
                }
            }
        }
    }

    // Display challenge grid on load
    displaychallengeGrid();

    // Display solved grid
    function displaySolvedGrid() {

        displayGridSolution = solvedGrid;

        console.log(displayGridSolution);

        for (i = 1; i < 10; i++) { // Box number
            let solBox = document.getElementById(`box-${i}`);
            solBox.innerHTML = ""; // Clears previous grid

            // Sets value of row based on box
            if (i === 1 || i === 2 || i === 3) {
                rowLowerSol = 1 - 1;
                rowUpperSol = 3;
            } else if (i === 4 || i === 5 || i === 6) {
                rowLowerSol = 4 - 1;
                rowUpperSol = 6;
            } else if (i === 7 || i === 8 || i === 9) {
                rowLowerSol = 7 - 1;
                rowUpperSol = 9;
            }

            // Sets value of column based on box
            if (i === 1 || i === 4 || i === 7) {
                colLowerSol = 1 - 1;
                colUpperSol = 3;
            } else if (i === 2 || i === 5 || i === 8) {
                colLowerSol = 4 - 1;
                colUpperSol = 6;
            } else if (i === 3 || i === 6 || i === 9) {
                colLowerSol = 7 - 1;
                colUpperSol = 9;
            }

            // Displays values in grid
            for (let j = rowLowerSol; j < rowUpperSol; j++) { // Row index
                for (let k = colLowerSol; k < colUpperSol; k++) { // Column index
                    if (displayGridSolution[j][k] === 0) {
                        solBox.innerHTML += `<div class="cell"></div>`;
                    } else {
                        solBox.innerHTML += `<div class="cell">${(displayGridSolution[j][k])}</div>`;
                    }
                }
            }
        }
    }

}


// Countup clock on loading page
// Adapted from https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak
const clock = document.getElementById('stopwatch');

var min = 0;
var sec = 0;
var stoptime = true;

function startclock() {
    if (stoptime == true) {
        stoptime = false;
        clockCycle();
    }
    if (m < 0) {
        return;
    }

    document.getElementById('timer').innerHTML =
        m + ":" + s;
    console.log(m);
    setTimeout(startTimer, 1000);
}
// Starts clock on load
startclock();

function stopclock() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function clockCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);

        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }

        clock.innerHTML = min + ':' + sec;

        functionsetTimeout("clockCycle()", 1000);
    }
  }

function resetclock() {
    clock.innerHTML = '00:00';
    min = 0;
    sec = 0;
}