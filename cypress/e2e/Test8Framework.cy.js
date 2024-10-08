///<reference types="Cypress"/>

import HomePage from "./pageObjects/HomePage.cy";
import ShopPage from "./pageObjects/ShopPage.cy";
import AddToCart from "./pageObjects/AddToCart.cy";
//import cypress from "cypress";

describe("My Second Test Suite", () => {

    before(function () {

        cy.fixture("example").then(function (data) {

            this.data = data
        })

        cy.log(Cypress.env("url"))
        cy.log(Cypress.env("userId"))
        cy.log(Cypress.env("password"))

    });

    it("My First Test Cases from DDT", function () {

        const homePage = new HomePage()
        const shopPage = new ShopPage()
        const addToCart = new AddToCart()

    
        cy.visit(Cypress.env('url')+"/angularpractice/")


        //Name
        homePage.getNameTextBox().type(this.data.name);

        //Gender
        homePage.getGender().select(this.data.gender).should('have.value', "Male")

        //Assertions

        //check the two way binding
        homePage.getTwoWayBinding().should('have.value', this.data.name)

        //If you want assertions on any attribute then used have.attr and if you want to get a value then used prop()
        homePage.getNameTextBox().should('have.attr', 'minlength', '2').and('have.attr', "type", "text")

        //second way 
        homePage.getNameTextBox().should('have.attr', 'minlength').then((minLengthValue) => {

            cy.log(minLengthValue);  // Log the value to Cypress' command log
        });

        //check disabled or not

        homePage.getEnterPerune().should('be.disabled')

        //navigate to the other website

        homePage.getNavigatedShop().click()

        //calling custom function from support/command.js file

        this.data.productName.forEach((element) => {
            cy.selectProduct(element)
        })

        shopPage.checkoutButton().click()

        var sum = 0;



        addToCart.getTotalPriceEachProduct().each(($el, index, $list) => {

            let totalValueProduct = $el.text()

            let actualTotal = totalValueProduct.split(" ")
            actualTotal = actualTotal[1]
            sum = Number(sum) + Number(actualTotal)
        }).then(function () {

            cy.log(sum)

        })

        addToCart.getTotalPrice().each(($el, index) => {

            let grandTotal = $el.text()
            let totalPrice = grandTotal.split(" ")
            totalPrice = totalPrice[1]
            cy.log(totalPrice)

            expect(Number(sum)).to.equal(Number(totalPrice))
        })

        //cy.contains("Checkout").click()

        addToCart.getCheckoutButton().click()
        addToCart.getCountryTextBox().type("Pak")

        //global configuration change
        Cypress.config('defaultCommandTimeout', 8000)

        addToCart.getSelectCountry().click()
        addToCart.getClickPurchaseBtn().click()
        addToCart.getSuccessMessage().then((getText) => {

            const actualValue1 = getText.text()
            cy.log(actualValue1)
            expect(actualValue1.includes('Thank you! Your order will be delivered in next few weeks')).to.be.true
        })

    })
})