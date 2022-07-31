/// <reference types = "cypress" />

describe('ContactUs Testing', () => {
    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php')
        cy.wait(1000)
        cy.get('#contact-link > a').click()
    })

    //Direct Click on send Button
    it('Go To contact Page', () => {
        cy.get('#submitMessage > span').click()
        cy.wait(1000)
        cy.get('ol > li').should('have.text', 'Invalid email address.')

    })

    it

})