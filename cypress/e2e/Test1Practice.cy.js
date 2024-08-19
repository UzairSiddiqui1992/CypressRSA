///<reference types="Cypress"/>

describe("Verify the Smoke Suite",()=>{

    it('Verify that user add a product using ADD TO CART button text using index',()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input.search-keyword").type("ca")
        cy.get(".product:visible").should('have.length',4)

        //aliasing
        cy.get(".products").as("productsLocator")

        cy.get("@productsLocator").find(".product").eq(1).contains("ADD TO CART").click()
        cy.get("img[alt='Cart']").click()
        cy.get("tbody tr:nth-child(1) td:nth-child(3)").should('have.text','1')    
    })

    it('Verify that user add to cart through text',function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input.search-keyword").type("ca")
        cy.get(".product:visible").should('have.length',4)

          //aliasing
          cy.get(".products").as("productsLocator")

        cy.get("@productsLocator").find(".product").each(($el,index,$list) =>{

            const productName=$el.find(".product-name").text()

            if(productName.includes("Carrot")){
                cy.wrap($el).find("button",'ADD TO CART').click()
            }
        })

        cy.get("img[alt='Cart']").click()
        cy.get("tbody tr:nth-child(1) td:nth-child(3)").should('have.text','1')


        cy.get(".brand").then(function(logotext){

            const logo=logotext.text()
            cy.log("The text is: "+logo )
            console.log(logo)
            expect(logo).contains("GREENKART")
        })
    })

    it.only("Verify E2E functionality of GREEN CART Application",()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get("input.search-keyword").type("ca")

        //assertion
        cy.get(".product:visible").should('have.length',4)

        //Aliases
        cy.get(".products").as("productsSectionLocator")
        

        cy.get("@productsSectionLocator").find(".product").each(($el, index, $list)=>{

            const vegName=$el.find(".product-name").text()
            if(vegName.toUpperCase().includes("CARROT")){
                cy.wrap($el).find("button","ADD TO CART").click()
            }
        })
        //Alias
        cy.get(".brand").as("logoText")
        

        cy.get("@logoText").then(function(heading){

            const headingText=heading.text()
            cy.log(headingText)

            //assertion
            cy.get("@logoText").should('have.text',"GREENKART")
        })

        cy.get('.cart-icon > img').click()

        //Alias
        cy.get("div.product-info p.product-name:visible").as("product-Name")

        //assertion
        cy.get("@product-Name").should("have.text","Carrot - 1 Kg")

        cy.contains("PROCEED TO CHECKOUT").click()
        cy.contains("Place Order").click()
        cy.get(".chkAgree").check()
        cy.contains("Proceed").click()

        cy.get("div.wrapperTwo span:nth-child(1)").as("ConfirmationText")

        cy.get("@ConfirmationText").then(function(confirmMessage){

            const messgeConfirm=confirmMessage.text()
            const actualMessage=messgeConfirm.replace(/\s+/g, ' ').trim();
            cy.log(actualMessage)
            expect(actualMessage).include("Thank you, your order has been placed successfully You'll be redirected to Home page shortly!!")
        })
    })
})