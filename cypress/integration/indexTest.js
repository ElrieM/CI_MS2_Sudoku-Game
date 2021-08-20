/* jshint esversion: 6 */

// Test landing page
describe('Index test', () => {
    it('Loads index page and tests navigation from page', () => {
        //Navigate to landing page
        cy.visit('https://elriem.github.io/CI_MS2_Sudoku-Game/index.html');
        // Test navigation bar links
        cy.get('.navbar-nav').contains("Home");
        cy.location('pathname').should('include', 'index.html');
    
        // Navigates to Practice game page
        cy.get('.navbar-nav').contains('Practice').click({force: true});
        cy.go('back');

        // Navigates to Challenge game page        
        cy.get('.navbar-nav').contains('Challenge').click({force: true});
        cy.go('back');

        // Navigates to Rules game page
        cy.get('.navbar-nav').contains('Rules').click({force: true});
        cy.go('back');

        // Navigates to practice game from page body
        cy.get('#btn-practice').click();
        cy.go('back');

        // Navigates to challenge game from page body
        cy.get('#btn-challenge').click();
        cy.go('back');

        // Navigates to rules from page body
        cy.get('#btn-rules').click();
        cy.go('back');
    });
});