/* jshint esversion: 6 */

// Adapted from https://www.emailjs.com/docs/sdk/send-form/

window.onload = function () {
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('Sudoku', 'MS2-Contact-Form', this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    });
};