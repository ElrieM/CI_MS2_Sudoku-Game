/* jshint esversion: 6 */

// Test 404 error page

describe('404 error page test', () => {
    it('Loads 404 page and check contents', () => {
        // Navigate to 404 error page
        cy.visit('https://elriem.github.io/CI_MS2_Sudoku-Game/404.html');
        // Test page loaded
        cy.url().should('include', "404.html");
        // Check contents
        cy.get('.text-center').should('include.text', "Page Not Found");
    });
});