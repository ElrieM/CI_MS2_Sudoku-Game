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

        // Navigates to Rules game page
        cy.get('.navbar-nav').contains('Rules').click({force: true});
        cy.title().should('include', "Rules");
        cy.go('back');

    });
});