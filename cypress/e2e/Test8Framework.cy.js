///<reference types="Cypress"/>

import HomePage from "./pageObjects/HomePage.cy";
import ShopPage from "./pageObjects/ShopPage.cy";

describe("My Second Test Suite",()=>{

before(function(){

    cy.fixture("example").then(function(data){

        this.data=data
    })

});

it("My First Test Cases from DDT",function(){

    const homePage=new HomePage()
    const shopPage=new ShopPage()

    cy.visit("https://rahulshettyacademy.com/angularpractice/")


    //Name
    homePage.getNameTextBox().type(this.data.name);

    //Gender
    homePage.getGender().select(this.data.gender).should('have.value',"Male")

    //Assertions

   //check the two way binding
    homePage.getTwoWayBinding().should('have.value',this.data.name) 

    //If you want assertions on any attribute then used have.attr and if you want to get a value then used prop()
    homePage.getNameTextBox().should('have.attr','minlength','2').and('have.attr',"type","text")
    
    //second way 
    homePage.getNameTextBox().should('have.attr', 'minlength').then((minLengthValue) => {
        
        cy.log(minLengthValue);  // Log the value to Cypress' command log
    });
    
    //check disabled or not

    homePage.getEnterPerune().should('be.disabled')
 
    //navigate to the other website
    
    homePage.getNavigatedShop().click()

    //calling custom function from support/command.js file

    this.data.productName.forEach((element)=>{
        cy.selectProduct(element)
    })

    shopPage.checkoutButton().click()

    cy.contains("Checkout").click()
    cy.get("#country").type("Pak")

    //global configuration change
    Cypress.config('defaultCommandTimeout',8000)

    cy.get('.suggestions li a').click()
    cy.contains('Purchase').click()
    cy.get('div.alert-success').then((getText)=>{

        const actualValue1=getText.text()
        cy.log(actualValue1)
        expect(actualValue1).include('Thank you! Your order will be delivered in next few weeks')
    })

})
})