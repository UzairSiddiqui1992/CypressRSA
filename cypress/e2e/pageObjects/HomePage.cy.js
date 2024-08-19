class HomePage{

getNameTextBox(){
    return cy.get("div.form-group input[name='name']")
}

getGender(){
    return cy.get("select")
}

getTwoWayBinding(){
    return cy.get("h4 input")
}

getEnterPerune(){
    return cy.get("#inlineRadio3")
}

getNavigatedShop(){
    return cy.contains("Shop")
}
}
export default HomePage