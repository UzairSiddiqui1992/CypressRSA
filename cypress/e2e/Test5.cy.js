///<reference types='Cypress'/>
describe("Verify the Sanity Test Suite",()=>{

    it("Verify the Mouse Hover functionlaity with jQuery show method",()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/#top')
    })


    it("Verify the Mouse hover functionality with forceClick method",()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        cy.url().should('eq','https://rahulshettyacademy.com/AutomationPractice/#top')
    })

    it("Verify the mouse hover for internet heroku app",()=>{

        cy.visit("https://the-internet.herokuapp.com/")
        cy.contains('Hovers').click()
        cy.url().should('eq','https://the-internet.herokuapp.com/hovers')
        cy.get('.figcaption').invoke('show')

        cy.get(".figure:nth-of-type(1) div h5").then((headingText)=>{

            const actualHeading= headingText.text()
            expect(actualHeading).to.equal('name: user1')
        })
        
        cy.get(".figcaption a[href*='/1']").then((text)=>{
                const heading=text.text()
                expect(heading).to.equal('View profile')
        })
    })

    it.only("Verify the mouse hover from force click on Heroku app",()=>{
        cy.visit("https://the-internet.herokuapp.com/")
        cy.contains('Hovers').click()
        cy.url().should('eq','https://the-internet.herokuapp.com/hovers')

        cy.get('div.figure:nth-of-type(1) div.figcaption a').click({force:true})

        cy.url().should('eq','https://the-internet.herokuapp.com/users/1')
    })
})