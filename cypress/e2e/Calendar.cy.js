///<reference types="Cypress"/>

describe("Calendar Test Case",()=>{

    it("Verify the date selection",()=>{

        const year="2028";
        const date="15";
        const month="12";
        
        const expectedList=[month, date, year]

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.contains("a","Top Deals").invoke("removeAttr","target").click()

        cy.get('.react-date-picker__calendar-button').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        cy.get('.react-calendar__navigation__label__labelText').click()
        //year
        cy.contains("button",year).click()
        //month
        cy.get("abbr").eq(Number(month)-1).click()
        //date
        cy.contains("abbr",date).click()

        //Assertions

        cy.get(".react-date-picker__inputGroup__input").each(($el, index, $list)=>{

            cy.wrap($el).invoke('val').should('eq',expectedList[index])
        })
    })
})