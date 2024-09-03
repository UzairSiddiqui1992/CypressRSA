class AddToCart{


    getTotalPriceEachProduct(){
        return cy.get("tr td:nth-child(4) strong")
    }

    getTotalPrice(){
        return cy.get("h3 strong")
    }
    
    getCheckoutButton(){

        return cy.get("button.btn-success")
    }

    getCountryTextBox(){
        return cy.get("#country")
    }

    getSelectCountry(){
        return cy.get("div.suggestions ul li a")
    }

    getClickPurchaseBtn(){
        return cy.get("input[value='Purchase']")
    }


    getSuccessMessage(){
        return cy.get('div.alert-success')
    }
}

export default AddToCart