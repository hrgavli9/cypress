/// <reference types = "cypress" />
describe('Login Testing',()=>{
    before(()=>{
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
    })

    it('Blank Form',()=>{
        cy.get('#SubmitLogin > span').click()
        cy.get('ol > li').should('have.text','An email address required.')
    })

    it('ivalid Email',()=>{
        cy.get('#email').type('hr{enter}')
        cy.get('ol > li').should('have.text', 'Invalid email address.')
        cy.wait(1000)
        cy.get('#email').type('@gmail{enter}')
        cy.get('ol > li').should('have.text', 'Invalid email address.')
        cy.wait(1000)
        cy.get('#email').type('.com{enter}')
        cy.get('ol > li').should('have.text', 'Password is required.')
    })

    it('Invalid Password',()=>{
        cy.get('#passwd').type('123{enter}')
        cy.get('ol > li').should('have.text','Invalid password.')
        cy.wait(1000) 
        cy.get('#passwd').type('123{enter}')
        cy.get('ol > li').should('have.text', 'Authentication failed.')
        cy.get('ol > li').contains('Authentication failed.')
    })

})
