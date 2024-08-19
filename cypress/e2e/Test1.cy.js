///<reference types="Cypress"/>

describe("Verify the Smoke Suite",()=>{

    it.only('Verify that user add a product using ADD TO CART button using index',()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input.search-keyword").type("ca")
        cy.get(".product:visible").should('have.length',4)
        
        //Parent-child chaining
        cy.get(".products").find('.product').should('have.length',4)

        //Index
        cy.get(".products").find(".product").eq(1).contains("ADD TO CART").click()
        
        cy.get(':nth-child(1) > :nth-child(3) > strong').contains("1")
        cy.get(".cart-info tr:nth-child(1) td:nth-child(3)").should('have.text','1')
    
    })

    it('Verify that user add a product using ADD TO CART Using product name',()=>{
        
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input.search-keyword").type("ca")
        cy.get(".product:visible").should('have.length',4)

        //grabbing text
        cy.get(".products").find(".product").each(($el, index, $list) => {
        
            const vegText=$el.find("h4.product-name").text()
            if(vegText.includes('Cashews - 1 Kg')){
                cy.wrap($el).find("button").click()
            }
        })

        cy.get(':nth-child(1) > :nth-child(3) > strong').contains("1")
        cy.get(".cart-info tr:nth-child(1) td:nth-child(3)").should('have.text','1')
    })
})