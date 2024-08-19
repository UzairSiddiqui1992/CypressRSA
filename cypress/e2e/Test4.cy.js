///<reference types='Cypress'/>
describe('Verify the DataTables Value',()=>{

    it("Verify the Specific tables value price",()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('tr td:nth-child(2)').each(($el, index, $list)=>{

           const targetValue= $el.text()
           if(targetValue.includes('Python')){

            cy.get('tr td:nth-child(2)').eq(index).next().then((price)=>{

                const priceValue=price.text()
                expect(priceValue).to.equal('25')
            })

           }
        })


    })



})