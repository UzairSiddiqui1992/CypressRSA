///<reference types='Cypress'/>

describe("Verify Automate Calendar feature",()=>{
    it("Verify Automate Calendar flow",()=>{

        const monthNumber="12";
        const date="25";
        const year="2028";
        const expectedList=[monthNumber,date,year]
        
        cy.visit(Cypress.env("url")+"/seleniumPractise/#/")
        cy.get('div.cart a:nth-child(2)').then((newUrl)=>{

            const url=newUrl.prop('href')
            cy.visit(url)
        })

    cy.get('button.react-date-picker__calendar-button').click()
    cy.get('button.react-calendar__navigation__label span').click()
    cy.get('button.react-calendar__navigation__label span').click()
    cy.contains('button',year).click()
    cy.get('abbr').eq(Number(monthNumber)-1).click()
    cy.contains('abbr',date).click()

    //Assertions
    cy.get('.react-date-picker__inputGroup__input').each(($el,index)=>{

        cy.wrap($el).invoke("val").should('eq',expectedList[index])

    })
        
    })
})