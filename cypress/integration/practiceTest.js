/* jshint esversion: 6 */

// Test practice game page
describe('Practice game page test', () => {
    it('Loads practice game page and check contents', () => {
        // Navigate to practice game page
        cy.visit('https://elriem.github.io/CI_MS2_Sudoku-Game/practice.html');
        
        // Test page loaded
        cy.url().should('include', "practice.html");
        
        // Check game grid generates
        cy.get('.game-grid').find('#box-1').should('have.class', 'box')
        .find('.cell');
        cy.get('.game-grid').find('#box-2').should('have.class', 'box')
        .find('.cell');
        cy.get('.game-grid').find('#box-3').should('have.class', 'box')
        .find('.cell');
        cy.get('.game-grid').find('#box-4').should('have.class', 'box')
        .find('.cell');
        cy.get('.game-grid').find('#box-5').should('have.class', 'box')
        .find('.cell');
        cy.get('.game-grid').find('#box-6').should('have.class', 'box')
        .find('.cell');
        cy.get('.game-grid').find('#box-7').should('have.class', 'box')
        .find('.cell');
        cy.get('.game-grid').find('#box-8').should('have.class', 'box')
        .find('.cell');
        cy.get('.game-grid').find('#box-9').should('have.class', 'box')
        .find('.cell');

        // Test navigation bar links
        // Navigates to Landing page
        cy.get('.navbar-nav').contains("Home").click({force: true});
        cy.title().should('include', "Home");
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