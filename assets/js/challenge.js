/* jshint esversion: 6 */

window.onload = function () {
    timedGame();
    displayTimedGrid();
    startCountdown();
};

/* ------------------------------------------------------------------------------- */
// Challenge game generator
var totalBlank;
var levelBlank = 20; // Initial game level set to easy
var gameSeconds = 300; // Initial game seconds to play
var level = document.getElementById('level-select');
var inputCells = [];
// Initial solved grid
// Sets array form of 9 rows with 9 values each
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
// Initial play grid (same as solved grid until blank cells are removed)
// Sets array form of 9 rows with 9 values each
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

// Game control buttons
// New game button: creates new puzzle and resets stopwatch Countdown
document.getElementById("newTButton").addEventListener("click", function () {
    if (totalBlank == 0) {
        totalBlank = levelBlank;
    }
    timedGame(); // generates game grid
    displayTimedGrid(); // display game grid
    resetCountdown(); // resets timer
});

// Solve game button: shows puzzle solution and resets stops stopwatch Countdown
// Alert adapted from https://www.tutorialspoint.com/How-to-delay-a-JavaScript-function-call-using-JavaScript
document.getElementById("solveTButton").addEventListener("click", function () {
    displaySolvedTimedGrid();
    setTimeout(function () {
        solveModal.style.display = "block";
    }, 100);
});

// Restart game button: creates new puzzle and resets stopwatch Countdown
document.getElementById("restartTButton").addEventListener("click", function () {
    totalBlank = 0;
    displayTimedGrid();
});

// Puzzle creating function Adapted from https://github.com/reymon359/web-experiments/blob/master/Sudoku%20Board%20Generator/script.js

// Assign number of cells blank based on level selection
// Adapted from https://stackoverflow.com/questions/37538217/how-to-get-addeventlistener-to-work-with-a-select-tag
level.addEventListener("change", function () {
    levelBlank = this.value;
    let levelSeconds = 0;
    timedGame();
    displayTimedGrid();

    if (levelBlank == 20) {
        levelSeconds = 300; // 5 minutes * 60 seconds
    } else if (levelBlank == 30) {
        levelSeconds = 600; // 10 minutes * 60 seconds
    } else if (levelBlank == 40) {
        levelSeconds = 900; // 15 minutes * 60 seconds
    }
    gameSeconds = levelSeconds;

    if (totalBlank == undefined) {
        totalBlank = 20;
    }

    localStorage.setItem('totalBlank', levelBlank);
    localStorage.setItem('gameSeconds', levelSeconds);
    
    resetCountdown();
}, false);

// Generates game for play, starting with solution and then creating grid for play with random blank cells
function timedGame() {

    totalBlank = levelBlank; // fetches number of blank cells to generate
    
    // Create game grid solution
    function solveTimedGrid(solvedTimedGrid, playTimedGrid) {

        // Randomly select number of times to add to grid
        let randomNum = Math.floor((Math.random() * 8 - 2) + 1); // Randomise grid by adding 1 for a random amount of times

        // Adds 1 to cell for selected random number of times
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
        
        let randCell;
        let selRow;
        let selCol;

        // Converts random cell into row and column, replaces selected cell with 0
        for (let m = 0; m < totalBlank; m++) {
            randCell = Math.floor(Math.random() * (81 - 1) + 1);

            selRow = Math.floor(randCell / 9);
            selCol = randCell % 9;

            playTimedGrid[selRow][selCol] = 0;
        }
        return playTimedGrid;
    }
    createTimedGame(playTimedGrid);
    return solvedTimedGrid, playTimedGrid;
}


// Display game grid, showing nil values as blank cells
function displayTimedGrid() {

    let gridSolution = solvedTimedGrid;
    let dispTimedGrid = playTimedGrid;
    let rowLower;
    let rowUpper;
    let colLower;
    let colUpper;
    let cellNum;

    for (let i = 1; i < 10; i++) { // Box number
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
                        <input class="input-cell" aria-label="row ${j} cell ${k}" id="cell-${cellNum}" name="inputVal-${cellNum}" type="number" step="1" min="1" max="9" maxlength="1"></div>`;
                } else {
                    box.innerHTML += `<div class="cell"">${(dispTimedGrid[j][k])}</div>`;
                }
            }
        }
    }
}

// Display solved grid
function displaySolvedTimedGrid() {

    let displayTimedGridSolution = solvedTimedGrid;

    for (let i = 1; i < 10; i++) { // Box number
        let solBox = document.getElementById(`solTBox-${i}`);
        let rowLowerSol;
        let rowUpperSol;
        let colLowerSol;
        let colUpperSol;

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

// Countdown Countdown on loading page
// Adapted from https://codepen.io/jmikey/pen/tFHrp 
var timeDisplay = document.getElementById("countdownTimer");

var intervalHandle;
let secondsRemaining = gameSeconds;
var min;
var sec;

function countdownCycle() {

    // converts remaining / game seconds into mm:ss
    min = Math.floor(secondsRemaining / 60);
    sec = secondsRemaining - (min * 60);

    //add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }

    // Update time displayed every second
    timeDisplay.innerHTML = min.toString() + ":" + sec;

    // stop is down to zero
    if (secondsRemaining === 0) {
        alert("Time's Up!");
        clearInterval(intervalHandle);
    }

    //subtract from seconds remaining
    secondsRemaining--;

}

// Starts countdown cycle
function startCountdown() {
    //every second, call the countdownCycle function
    intervalHandle = setInterval(countdownCycle, 1000);
}

// Resets countdown timer
function resetCountdown() {
    secondsRemaining = gameSeconds;
}

// Solve modal, used in practice and challenge games

var solveModal = document.getElementById('solveModalTimed');
var continueBtn = document.getElementById('continue-timed-btn');
var exitBtn = document.getElementById('exit-timed-btn');
var closeXSolve = document.getElementById('close-top-timed-solve');

// Modal for solve button, adapted from https://www.w3schools.com/howto/howto_css_modals.asp
// When the user clicks on close button, close the modal
exitBtn.onclick = function () {
    solveModal.style.display = "none";
    window.location.href = 'index.html';
};

// Continue button, resets timer and generates new game
continueBtn.onclick = function () {
    solveModal.style.display = "none";
    timedGame(); // Generates new puzzle
    displayTimedGrid(); // Displays puzzle with blank cells for game
    secondsRemaining = gameSeconds;
};

// When the user clicks on the close X at the top, close the modal
closeXSolve.onclick = function () {
    solveModal.style.display = "none";
    timedGame(); // Generates new puzzle
    displayTimedGrid(); // Displays puzzle with blank cells for game
    secondsRemaining = gameSeconds;
};

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function (event) {
    if (event.target == solveModal) {
        solveModal.style.display = "none";
        timedGame(); // Generates new puzzle
        displayTimedGrid(); // Displays puzzle with blank cells for game
        secondsRemaining = gameSeconds;
    }
};

// Make modal draggable
$(function () {
    $("#solveModalTimed").draggable();
});
