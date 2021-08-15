/* jshint esversion: 6 */

// Runs practice game
// Practice game has the ability to play various game
function runPractice() {
    window.location.href = 'practice.html';
}

// Runs challenge game
function runChallenge() {
    window.location.href = 'challenge.html';
}


var solveModal = document.getElementById('solveModal');
var continueBtn = document.getElementById('continue-btn');
var exitBtn = document.getElementById('exit-btn');
var closeXSolve = document.getElementById('close-top-solve');

// Solve modal, used in practice and challenge games

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
    resetTimer();
};

// When the user clicks anywhere outside of the modal, close the modal
window.onclick = function (event) {
    if (event.target == solveModal) {
        solveModal.style.display = "none";
        resetTimer();
    }
};