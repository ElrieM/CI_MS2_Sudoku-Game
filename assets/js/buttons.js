// New puzzle generates on click of button
// Cells can only have a value of 1 to 9
// Each box can only contain a number once
// Some cells set to hide value, value compared to user input

function createPuzzle() {
    for (let i = 1; i < 10; i++) {
        let box = document.getElementById(`box-${i}`);

        for (let j = 1; j < 10; j++) {
            let value = Math.floor(Math.random() * 9 + 1);

            box.innerHTML += `<div class="cell">${value}</div>`
            console.log(value);
        }
    }
}