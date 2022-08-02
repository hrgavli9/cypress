/// <reference types = "cypress" />
describe('Signup Testing',()=>{

    before(() => {
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
    })
    it('Blank Form',()=>{
        cy.get('#SubmitCreate > span').click()
        cy.wait(1000)
        cy.get('ol > li').should('have.text', 'Invalid email address.')
        cy.wait(1000)
    })

    it('ivalid Email', () => {
        cy.get('#email_create').type('hr{enter}')
        cy.wait(1000)
        cy.get('ol > li').should('have.text', 'Invalid email address.')
        cy.wait(1000)
        cy.get('#email_create').type('@gmail{enter}')
        cy.wait(1000)
        cy.get('ol > li').should('have.text', 'Invalid email address.')
        cy.wait(1000)
        cy.get('#email_create').type('.com{enter}')
        cy.wait(1000)
    })

    it('Invalid Password',()=>{
        cy.get('#customer_firstname').type('harsha')
        cy.get('#customer_lastname').type('gavli')
        cy.get('#submitAccount > span').click()
        cy.get('.alert').contains('passwd is required.')

        cy.get('#passwd').type('123')
        cy.get('#submitAccount > span').click()
        cy.get('.alert').contains('passwd is invalid.')

    })

    it('invalid Postal Code',()=>{
        cy.get('#postcode').type('12')
        cy.get('#submitAccount > span').click()
        cy.get('.alert').contains('It must follow this format: 00000')
        cy.get('#postcode').type('345')
        cy.get('#submitAccount > span').click()
    })

})
