class AddToCart{


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