/* jshint esversion: 6 */

window.onload = function () {
    timedGame();
    startCountdown();
};

window.onload = timedGame();

var levelBlank = 20;

var level = document.getElementById('level-select');
// Assign number of cells blank based on level selection
// Adapted from https://stackoverflow.com/questions/37538217/how-to-get-addeventlistener-to-work-with-a-select-tag
level.addEventListener("change", function () {
    levelBlank = this.value;
    timedGame();
    console.log(totalBlank);
}, false);

function timedGame() {

    totalBlank = levelBlank;

    if (totalBlank == undefined) {
        totalBlank = 20;
    }
    
    // New game button: creates new puzzle and resets stopwatch Countdown
    document.getElementById("newButton").addEventListener("click", function () {
        if (totalBlank == 0) {
            totalBlank = levelBlank;
        }
        solveTimedGrid(SolvedTimedGrid, playTimedGrid);
        createTimedGame(playTimedGrid);
        displayTimedGrid();
        startCountdown();
    });

    // Solve game button: shows puzzle solution and resets stops stopwatch Countdown
    document.getElementById("solveButton").addEventListener("click", function () {
        displaySolvedTimedGrid();
        stopCountdown();
    });

    // Restart game button: creates new puzzle and resets stopwatch Countdown
    document.getElementById("restartButton").addEventListener("click", function () {
        totalBlank = 0;
        console.log(totalBlank);
        displayTimedGrid();
        resetCountdown();
    });

    // Button to start Countdown
    document.getElementById("count-start").addEventListener("click", startCountdown);

    // Button to stop Countdown
    document.getElementById("count-stop").addEventListener("click", stopCountdown);

    // Puzzle creating function Adapted from https://github.com/reymon359/web-experiments/blob/master/Sudoku%20Board%20Generator/script.js

    var SolvedTimedGrid = [
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

    var playTimedGrid = [
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
    function solveTimedGrid(SolvedTimedGrid, playTimedGrid) {

        let randomNum = Math.floor((Math.random() * 8) + 1); // Randomise grid by adding 1 for a random amount of times

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                SolvedTimedGrid[i][j] += randomNum;
                SolvedTimedGrid[i][j] %= 9;
                SolvedTimedGrid[i][j]++;
                playTimedGrid[i][j] = SolvedTimedGrid[i][j];
            }
        }

        return SolvedTimedGrid, playTimedGrid;
    }

    // Creates game grid on load
    solveTimedGrid(SolvedTimedGrid, playTimedGrid);

    // Create play grid, empty randomly selected cells
    function createTimedGame(playTimedGrid) {
        gridSolution = playTimedGrid;

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
                        box.innerHTML += `
                        <div class="cell">
                        <label for inputVal></label>
                        <input class="input-cell" name="inputVal" id="inputVal" type="number" step="1" min="1" max="9" maxlength="1"></div>`;
                    } else {
                        box.innerHTML += `<div class="cell">${(dispTimedGrid[j][k])}</div>`;
                    }
                }
            }
        }
    }

    // Display Timed grid on load
    displayTimedGrid();

    // Display Solved grid
    function displaySolvedTimedGrid() {

        displayTimedGridSolution = SolvedTimedGrid;

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



    // Countdown Countdown on loading page
    // Adapted from https://codepen.io/jmikey/pen/tFHrp

    console.log(totalBlank);



    var secondsRemaining;
    var intervalHandle;
    var stoptime = true;

    function tick() {
        // countdown timer space
        var timeDisplay = document.getElementById("countdownTimer");

        // convert seconds to mm:ss
        var min = Math.floor(secondsRemaining / 60);
        var sec = secondsRemaining - (min * 60);

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
        }

        //subtract from seconds remaining
        secondsRemaining--;

    }

    function startCountdown() {
        // set minutes
        let minutes;

        if (totalBlank === 20) {
            minutes = 5;
        } else if (totalBlank === 30) {
            minutes = 10;
        } else if (totalBlank === 40) {
            minutes = 15;
        }

        // how many seconds
        secondsRemaining = minutes * 60;

        //every second, call the "tick" function
        // have to make it into a variable so that you can stop the interval later!!!
        intervalHandle = setInterval(tick, 1000);

    }

    function resetCountdown() {

        min = 0;
        sec = 0;
    }

    function stopCountdown() {
        if (stoptime == false) {
            stoptime = true;
        }
    }
}