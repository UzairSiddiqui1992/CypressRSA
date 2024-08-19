///<reference types="Cypress"/>

describe("My Second Test Suite",function(){

    it("Verify the Checkboxes",()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //to check the checkboxes
        cy.get("#checkBoxOption1").check().should('be.checked').and('have.value',"option1")

        //to uncheck the checkboxes
        cy.get("#checkBoxOption1").uncheck().should('not.be.checked')

        //to checked all the checkboxes
        cy.get("[type='checkbox']").check(["option1","option2","option3"]).should('be.checked')

    })

    it("Verify the Static Dropdown",function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        //handle static dropdown

        //select from the option value capital O
        cy.get("select").select("Option3").should('have.value','option3')

        //select from the value option from the DOM small o
        cy.get("select").select("option3").should('have.value',"option3")


        //handle dynamic dropdown

        cy.get('#autocomplete').type("Pa")

        cy.get('.ui-menu-item div').each(($el, index, $list)=>{

            if($el.text()==="Pakistan"){
                cy.wrap($el).click()
            }
        })
        
        cy.get('#autocomplete').should('have.value','Pakistan')


        //visibility and invisibility

        cy.get('#displayed-text').should('be.visible')

        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').should('not.be.visible')

        cy.get('#show-textbox').click()

        cy.get('#displayed-text').should('be.visible')


        //radio button

        cy.get('input[value="radio2"]').check().should('be.checked')

    })                                                                                                                                                                                                       

})