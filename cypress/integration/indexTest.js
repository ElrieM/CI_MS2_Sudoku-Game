/* jshint esversion: 6 */

// Test landing page
describe('Index test', () => {
    it('Loads index page and tests navigation from page', () => {
        //Navigate to landing page
        cy.visit('https://elriem.github.io/CI_MS2_Sudoku-Game/index.html');
        
        // Test page loaded
        cy.url().should('include', "index.html");

        // Test navigation bar links
        // Navigates to Landing page
        cy.get('.navbar-nav').contains("Home");
        cy.location('pathname').should('include', 'index.html');
    
        // Navigates to Practice game page
        cy.get('.navbar-nav').contains('Practice').click({force: true});
        cy.title().should('include', "Practice");
        cy.go('back');

        // Navigates to Challenge game page        
        cy.get('.navbar-nav').contains('Challenge').click({force: true});
        cy.title().should('include', "Challenge");
        cy.go('back');

        // Navigates to Rules game page
        cy.get('.navbar-nav').contains('Rules').click({force: true});
        cy.title().should('include', "Rules");
        cy.go('back');

        // Test navigation from body of page
        // Navigates to practice game page
        cy.get('#btn-practice').click();
        cy.location('pathname').should('include', 'practice.html');
        cy.go('back');

        // Navigates to challenge game page
        cy.get('#btn-challenge').click();
        cy.location('pathname').should('include', 'challenge.html');
        cy.go('back');

        // Navigates to rules page
        cy.get('#btn-rules').click();
        cy.location('pathname').should('include', 'rules.html');
        cy.go('back');
    });
});