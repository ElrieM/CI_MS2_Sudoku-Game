/* jshint esversion: 6 */

// Test contact page
describe('contact page test', () => {
    it('Loads contact page and check contents', () => {
        // Navigate to contact page
        cy.visit('https://elriem.github.io/CI_MS2_Sudoku-Game/contact.html');
        
        // Test page loaded
        cy.url().should('include', "contact.html");
        
        // Check contents
        cy.get('.text-center').should('include.text', "Contact");
        
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

        // Navigates to Rules page
        cy.get('.navbar-nav').contains('Rules').click({force: true});
        cy.title().should('include', "Rules");
        cy.go('back');

    });
});