/* jshint esversion: 6 */

window.onload = function () {
    practiceGame();
    displayPracticeGrid();
    startTimer();
};

/* ------------------------------------------------------------------------------- */
// Practice game generator
var totalBlank;
var levelBlank = 20; // Initial game level set to easy
var level = document.getElementById('level-select');
// Initial solved grid
// Sets array form of 9 rows with 9 values each
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
// Initial play grid (same as solved grid until blank cells are removed)
// Sets array form of 9 rows with 9 values each
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

// Game control buttons
// New game button: creates new puzzle and resets stopwatch timer
document.getElementById("newButton").addEventListener("click", function () {
    if (totalBlank == 0) { // Resets blank cells (changes to nil if game grid is reset)
        totalBlank = levelBlank;
    }
    practiceGame(); // Generates new puzzle
    displayPracticeGrid(); // Displays puzzle with blank cells for game
    resetTimer(); // Resets timer to start from nil
});

// Solve game button: shows puzzle solution and resets stops stopwatch timer
// Alert adapted from https://www.tutorialspoint.com/How-to-delay-a-JavaScript-function-call-using-JavaScript
document.getElementById("solveButton").addEventListener("click", function () {
    displaySolvedGrid(); // Displays solved game grid
    setTimeout(function () {
        resetTimer(); // Resets timer to start from nil
        solveModal.style.display = "block";
    }, 100);
});

// Restart game button: creates new puzzle and resets stopwatch timer
document.getElementById("restartButton").addEventListener("click", function () {
    totalBlank = 0;
    displayPracticeGrid();
});

// Puzzle creating function adapted from https://github.com/reymon359/web-experiments/blob/master/Sudoku%20Board%20Generator/script.js

// Assign number of cells blank based on level selection
// Adapted from https://stackoverflow.com/questions/37538217/how-to-get-addeventlistener-to-work-with-a-select-tag

level.addEventListener("change", function () {
    levelBlank = this.value;
    practiceGame();
    displayPracticeGrid();

    if (totalBlank == undefined) {
        totalBlank = 20;
    }

    localStorage.setItem('totalBlank', levelBlank); // Stores number of cells to be blank for later usage in play grid

    resetTimer();
}, false);

// Generates game for play, starting with solution and then creating grid for play with random blank cells
function practiceGame() {

    totalBlank = levelBlank; // fetches number of blank cells to generate
    console.log(totalBlank);

    // Create game grid solution
    function solveGrid(solvedGrid, playGrid) {

        // Randomly select number of times to add to grid
        let randomTimes = Math.floor((Math.random() * 8 - 1) + 1); // Randomise grid by adding 1 for a random amount of times

        // Adds 1 to cell for selected random number of times
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                solvedGrid[i][j] += randomTimes;
                solvedGrid[i][j] %= 9;
                solvedGrid[i][j]++;
                playGrid[i][j] = solvedGrid[i][j];
            }
        }
        return solvedGrid, playGrid;
    }

    // Creates game grid on load
    solveGrid(solvedGrid, playGrid);

    // Create play grid, empty randomly selected cells
    function createPracticeGame(playGrid) {

        let randomCell;
        let selectedRow;
        let selectedCol;

        // Converts random cell into row and column, replaces selected cell with 0
        for (let m = 0; m < totalBlank; m++) {
            randomCell = Math.floor(Math.random() * (81 - 1) + 1);

            selectedRow = Math.floor(randomCell / 9);
            selectedCol = randomCell % 9;

            playGrid[selectedRow][selectedCol] = 0;
        }
        return playGrid;
    }
    createPracticeGame(playGrid);
    return solvedGrid, playGrid;
}

// Display game grid, showing nil values as blank cells
function displayPracticeGrid() {

    let displayGrid = playGrid;
    let rowLower;
    let rowUpper;
    let colLower;
    let colUpper;

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
                if (displayGrid[j][k] === 0) {
                    box.innerHTML += `
                        <div class="cell">
                        <input class="input-cell" aria-label="row ${j} cell ${k}" name="inputVal" id="inputVal" type="number" step="1" min="1" max="9" maxlength="1">
                        </div>`;
                } else {
                    box.innerHTML += `<div class="cell">${(displayGrid[j][k])}</div>`;
                }
            }
        }
    }
}

// Display solved grid
function displaySolvedGrid() {

    let displayGridSolution = solvedGrid;

    for (let i = 1; i < 10; i++) { // Box number

        let solBox = document.getElementById(`solBox-${i}`);
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
                if (displayGridSolution[j][k] === 0) {
                    solBox.innerHTML += `<div class="cell"></div>`;
                } else {
                    solBox.innerHTML += `<div class="cell">${(displayGridSolution[j][k])}</div>`;
                }
            }
        }
    }
}

console.log(solvedGrid);

// Countup timer on loading page
// Timer control buttons
// Button to stop timer (pauses game)
document.getElementById("stop").addEventListener("click", function () {
    stopTimer();
    pauseModal.style.display = "block";
});

// Adapted from https://dev.to/gspteck/create-a-stopwatch-in-javascript-2mak
const timer = document.getElementById('stopwatch');

var min = 0;
var sec = 0;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
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

        timer.innerHTML = min + ':' + sec;

        setTimeout(function () {
                timerCycle();
            },
            1000);
    }
}

function resetTimer() {
    timer.innerHTML = '00:00';
    min = 0;
    sec = 0;
    startTimer();
}

/* ------------------------------------------------------------------------------- */
// Modal for pause button, adapted from https://www.w3schools.com/howto/howto_css_modals.asp

var pauseModal = document.getElementById('pauseModal');
var closeBtn = document.getElementById('close-btn');
var closeX = document.getElementById('close-top');

// When the user clicks on close button, close the modal
closeBtn.onclick = function () {
    pauseModal.style.display = "none";
    startTimer();
};

// When the user clicks on the close X at the top, close the modal
closeX.onclick = function () {
    pauseModal.style.display = "none";
    startTimer();
};

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function (event) {
    if (event.target == pauseModal) {
        pauseModal.style.display = "none";
        startTimer();
    }
};

/* ------------------------------------------------------------------------------- */
// Solve modal, displays solution to puzzle

var solveModal = document.getElementById('solveModal');
var continueBtn = document.getElementById('continue-btn');
var exitBtn = document.getElementById('exit-btn');
var closeXSolve = document.getElementById('close-top-solve');

// Modal for solve button, adapted from https://www.w3schools.com/howto/howto_css_modals.asp
// When the user clicks on close button, close the modal
exitBtn.onclick = function () {
    solveModal.style.display = "none";
    window.location.href = 'index.html';
};

// Continue button, resets timer and generates new game
continueBtn.onclick = function () {
    solveModal.style.display = "none";
    practiceGame(); // Generates new puzzle
    displayPracticeGrid(); // Displays puzzle with blank cells for game
    resetTimer(); // Resets timer to start from nil
};

// When the user clicks on the close X at the top, close the modal
closeXSolve.onclick = function () {
    solveModal.style.display = "none";
    practiceGame(); // Generates new puzzle
    displayPracticeGrid(); // Displays puzzle with blank cells for game
    resetTimer(); // Resets timer to start from nil
};

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function (event) {
    if (event.target == solveModal) {
        solveModal.style.display = "none";
        practiceGame(); // Generates new puzzle
        displayPracticeGrid(); // Displays puzzle with blank cells for game
        resetTimer(); // Resets timer to start from nil
    }
};

// Make modal draggable
$(function () {
    $("#solveModal").draggable();
});