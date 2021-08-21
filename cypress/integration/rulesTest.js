/* jshint esversion: 6 */

// Test rules page
describe('rules page test', () => {
    it('Loads rules page and check contents', () => {
        // Navigate to rules page
        cy.visit('https://elriem.github.io/CI_MS2_Sudoku-Game/rules.html');
        
        // Test page loaded
        cy.url().should('include', "rules.html");
        
        // Check contents
        cy.get('.text-center').should('include.text', "How to Play");
        
        // Test navigation bar links
        // Navigates to Landing page
        cy.get('.navbar-nav').contains("Home").click({force: true});
        cy.title().should('include', "Home");
        cy.go('back');
    
        // Navigates to Practice game page
        cy.get('.navbar-nav').contains('Practice').click({force: true});
        cy.title().should('include', "Practice");
        cy.go('back');

        // Navigates to Challenge game page        
        cy.get('.navbar-nav').contains('Challenge').click({force: true});
        cy.title().should('include', "Challenge");
        cy.go('back');

    });
});