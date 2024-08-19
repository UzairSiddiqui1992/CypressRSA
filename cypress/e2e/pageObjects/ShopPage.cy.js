class ShopPage{

    checkoutButton(){
        return cy.get("ul li.nav-item.active")
    }
}

export default ShopPage