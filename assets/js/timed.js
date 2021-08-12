/* jshint esversion: 6 */

window.onload = function () {
    timedGame();
    startCountdown();
};

var levelBlank = 20;
var gameSeconds = 300;

var level = document.getElementById('level-select');
// Assign number of cells blank based on level selection
// Adapted from https://stackoverflow.com/questions/37538217/how-to-get-addeventlistener-to-work-with-a-select-tag
level.addEventListener("change", function () {
    levelBlank = this.value;
    let levelSeconds = 0;
    timedGame();
    if (levelBlank == 20) {
        levelSeconds = 300;
    } else if (levelBlank == 30) {
        levelSeconds = 600;
    } else if (levelBlank == 40) {
        levelSeconds = 900;
    }
    gameSeconds = levelSeconds;
    localStorage.setItem('gameSeconds', levelSeconds);
    resetCountdown();
}, false);

function timedGame() {

    totalBlank = levelBlank;

    if (totalBlank == undefined) {
        totalBlank = 20;
    }

    localStorage.setItem('totalBlank', levelBlank);

    // New game button: creates new puzzle and resets stopwatch Countdown
    document.getElementById("newButton").addEventListener("click", function () {
        if (totalBlank == 0) {
            totalBlank = levelBlank;
        }
        solveTimedGrid(solvedTimedGrid, playTimedGrid);
        createTimedGame(playTimedGrid);
        displayTimedGrid();
        resetCountdown();
    });

    // solve game button: shows puzzle solution and resets stops stopwatch Countdown
    // Alert adapted from https://www.tutorialspoint.com/How-to-delay-a-JavaScript-function-call-using-JavaScript
    document.getElementById("solveButton").addEventListener("click", function () {
        displaySolvedTimedGrid();
        stopCountdown();
        setTimeout(function () {
            alert("Play again?");
            solveTimedGrid(solvedTimedGrid, playTimedGrid);
            createTimedGame(playTimedGrid);
            displayTimedGrid();
            resetCountdown();
        }, 100);
    });

    // Restart game button: creates new puzzle and resets stopwatch Countdown
    document.getElementById("restartButton").addEventListener("click", function () {
        totalBlank = 0;
        console.log(totalBlank);
        displayTimedGrid();
    });

    // Puzzle creating function Adapted from https://github.com/reymon359/web-experiments/blob/master/Sudoku%20Board%20Generator/script.js

    var solvedTimedGrid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 2, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    var playTimedGrid = [
        [5, 3, 4, 6, 7, 8, 9, 1, 2],
        [6, 7, 2, 1, 9, 5, 3, 4, 8],
        [1, 9, 8, 3, 4, 2, 5, 6, 7],
        [8, 5, 9, 7, 6, 1, 4, 2, 3],
        [4, 2, 6, 8, 5, 3, 7, 9, 1],
        [7, 1, 3, 9, 2, 4, 8, 5, 6],
        [9, 6, 1, 5, 3, 7, 2, 8, 4],
        [2, 8, 7, 4, 1, 9, 6, 2, 5],
        [3, 4, 5, 2, 8, 6, 1, 7, 9]
    ];

    // Create game grid solution
    function solveTimedGrid(solvedTimedGrid, playTimedGrid) {

        let randomNum = Math.floor((Math.random() * 8 - 2) + 1); // Randomise grid by adding 1 for a random amount of times

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                solvedTimedGrid[i][j] += randomNum;
                solvedTimedGrid[i][j] %= 9;
                solvedTimedGrid[i][j]++;
                playTimedGrid[i][j] = solvedTimedGrid[i][j];
            }
        }
        return solvedTimedGrid, playTimedGrid;
    }

    // Creates game grid on load
    solveTimedGrid(solvedTimedGrid, playTimedGrid);

    // Create play grid, empty randomly selected cells
    function createTimedGame(playTimedGrid) {
        timedGrid = playTimedGrid;

        let randCell;

        for (let m = 0; m < totalBlank; m++) {
            randCell = Math.floor(Math.random() * (81 - 1) + 1);

            selRow = Math.floor(randCell / 9);
            selCol = randCell % 9;

            playTimedGrid[selRow][selCol] = 0;
        }
        return playTimedGrid;
    }

    // Display game grid, showing nil values as blank cells
    function displayTimedGrid() {
        gridSolution = solvedTimedGrid;
        let inputCells = [];

        dispTimedGrid = createTimedGame(playTimedGrid);

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
                    if (dispTimedGrid[j][k] === 0) {
                        inputCells.push(gridSolution[j][k]);
                        cellNum = ((i - 1) * 9) + (j % 3 * 3 + k % 3 + 1); // Reverse calculates to get cell number
                        box.innerHTML += `
                        <div class="cell">
                        <label for inputVal></label>
                        <input class="input-cell" id="cell-${cellNum}" name="inputVal-${cellNum}" type="number" step="1" min="1" max="9" maxlength="1"></div>`;
                    } else {
                        box.innerHTML += `<div class="cell"">${(dispTimedGrid[j][k])}</div>`;
                    }
                }
            }
        }
    }

    // Display timed grid on load
    displayTimedGrid();

    // Display solved grid
    function displaySolvedTimedGrid() {

        displayTimedGridSolution = solvedTimedGrid;

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
                    if (displayTimedGridSolution[j][k] === 0) {
                        solBox.innerHTML += `<div class="cell"></div>`;
                    } else {
                        solBox.innerHTML += `<div class="cell">${(displayTimedGridSolution[j][k])}</div>`;
                    }
                }
            }
        }
    }
}

// Countdown Countdown on loading page
// Adapted from https://codepen.io/jmikey/pen/tFHrp 
var timeDisplay = document.getElementById("countdownTimer");

var intervalHandle;
var stoptime = true;
let secondsRemaining = gameSeconds;
var min;
var sec;

function countdownCycle() {
    console.log(totalBlank, gameSeconds);

    // turn the seconds into mm:ss
    min = Math.floor(secondsRemaining / 60);
    sec = secondsRemaining - (min * 60);

    console.log(min, sec);

    //add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }

    // concatenate with colon
    var message = min.toString() + ":" + sec;

    // now change the display
    timeDisplay.innerHTML = message;

    // stop is down to zero
    if (secondsRemaining === 0) {
        alert("Time's Up!");
        clearInterval(intervalHandle);
        resetPage();
    }

    //subtract from seconds remaining
    secondsRemaining--;

}

function startCountdown() {
    //every second, call the countdownCycle function
    // have to make it into a variable so that you can stop the interval later!!!
    intervalHandle = setInterval(countdownCycle, 1000);

}


function resetCountdown() {
    secondsRemaining = gameSeconds;
}