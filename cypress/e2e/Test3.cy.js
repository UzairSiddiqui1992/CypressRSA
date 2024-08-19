///<reference types='Cypress'/>

describe("Verify the Feature of Cypress",()=>{
    it("Verify the alert in Cypress",function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()

        cy.get('#confirmbtn').click()


        cy.on('window:alert',(str)=>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>{

            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            return false;        
        })
        cy.go('back')
    })


    it.only('verify the conifrm alert in internet heroku app',()=>{
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('JavaScript Alerts').click()

       cy.contains('Click for JS Alert').click()
       cy.contains('Click for JS Confirm').click()

        cy.on('window:alert',(str)=>{
            expect(str).to.equal('I am a JS Alert')
        })

        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('I am a JS Confirm')
            
        })

    })


    it("Verify the child window with different domain website",function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("#opentab").invoke('removeAttr','target').click()

        cy.origin("https://www.qaclickacademy.com/",()=>{

            cy.get('li.nav-item a[href*="about.html"]').click()
            cy.get('.mt-50 h2').should('contain',"Welcome to QAClick Academy")
            
        })
        
    })

    it("Handling Child Window",()=>{

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".blinkingText").invoke('removeAttr','target').click()

        cy.get('div.header-text h2 span').should('contain','Learn Earn & Shine')
    })

    it('Verify the child window with jQuery function prop',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').then(function(getHref){

            const actualUrl=getHref.prop('href')
           cy.visit(actualUrl)
            cy.origin(actualUrl,()=>{
                cy.get("div#navbarSupportedContent a[href*='about']").click()
                cy.url().should('include','about.html')
            })
        })
    })
    it("Verify the child window on internet heroku",()=>{

        cy.visit("https://the-internet.herokuapp.com/")
        cy.contains('Multiple Windows').click()
        cy.url().should('include','windows')
        cy.get('div.example h3').then((validateHeading)=>{
            const headingText=validateHeading.text()
            expect(headingText).to.equal('Opening a new window')
        })
        
        cy.get('div.example a').invoke('removeAttr','target').click()
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        cy.go('back')

        cy.get('div.example a').then((childWindow)=>{
            const url=childWindow.prop('href')
            cy.visit(url)
            cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        })
    })
})