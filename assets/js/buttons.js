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

// Theme changer
// Adapted from https://www.studytonight.com/post/build-a-theme-switcher-for-your-website-with-javascript

let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

if (style == null) {
    setTheme('light');
} else {
    setTheme(style);
}

for (let i of switches) {
    i.addEventListener('click', function () {
        let theme = this.dataset.theme;
        console.log(theme);
        setTheme(theme);
    });
}

function setTheme(theme) {
    if (theme == 'light') {
        document.getElementById('switcher-id').href = './assets/css/light.css';
    } else if (theme == 'bright') {
        document.getElementById('switcher-id').href = './assets/css/bright.css';
    } else if (theme == 'dark') {
        document.getElementById('switcher-id').href = './assets/css/dark.css';
    }
    localStorage.setItem('style', theme);
}