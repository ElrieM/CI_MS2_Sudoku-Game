// New puzzle generates on click of button
// Cells can only have a value of 1 to 9
// Each box can only contain a number once
// Some cells set to hide value, value compared to user input

window.onload = createPuzzle();

function createPuzzle() {
    for (let i = 1; i < 10; i++) { // Runs through each of the 9 boxes
        let box = document.getElementById(`box-${i}`);
        box.innerHTML = ""; // Clears previous grid

        var testBox = [];

        for (let j = 1; j < 10; j++) { // Runs through each of the 9 cells within a box
            let value = Math.floor(Math.random() * 9 + 1); // Assigns a value between 1 and 9
            console.log(value);

            while (testBox.includes(value)) {
                if (j === 1) {
                    testBox.push(value);
                } else {
                    value = Math.floor(Math.random() * 9 + 1); // Assigns a value between 1 and 9
                    console.log(`New value:${value}`);
                }
            }

            testBox.push(value);

            box.innerHTML += `<div class="cell">${value}</div>`;
        }
    }
}