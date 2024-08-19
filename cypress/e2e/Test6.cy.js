/// <reference types='Cypress'/>
/// <reference types='cypress-iframe'/>

import 'cypress-iframe'

describe('Verify the iFrame', () => {

    //1st way

    it('Verify the handle one iFrame', () => {

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        
        // Ensure the iFrame is loaded
        cy.frameLoaded('#courses-iframe')
        
        // Click the mentorship link
        cy.iframe().find("li a[href='mentorship']").eq(0).click()
        
        // Add a small wait to ensure content loads
        cy.wait(2000)
        
        cy.iframe().find("h1.pricing-title").should('have.length', 2)
    })


    //2nd way to handle iFrame

    it.only('Verify nested frame from the internet heroku website', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Frames').click()
        cy.contains('iFrame').click()
        cy.url().should('eq', 'https://the-internet.herokuapp.com/iframe')
    
        cy.get('#mce_0_ifr').then($iframe => {
            const $body = $iframe.contents().find('body');
            cy.wrap($body).find('p').then($p => {
                cy.log($p.text());
                expect($p.text()).to.equal('Your content goes here.');
            });
        });
    })
    

it('Verify nested frame from the internet heroku website', () => {
    cy.visit('https://the-internet.herokuapp.com/');
    cy.contains('Frames').click();
    cy.contains('iFrame').click();
    cy.url().should('eq', 'https://the-internet.herokuapp.com/iframe');

            cy.get('#mce_0_ifr').then($iframe => {
                const $body = $iframe.contents().find('body');
    
                cy.wrap($body).find('p').should('be.visible').and('contain', 'Your content goes here.');
            });
        });
    });

