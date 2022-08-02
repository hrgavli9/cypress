/// <reference types = "cypress" />
describe('ContactUs Testing', () => {
    before(() => {
        cy.visit('http://automationpractice.com/index.php')
    })
    
    
    it('Go to contact us page', () => {
        cy.get('#contact-link > a').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=contact')
    })

    it('Check For Blank Form',()=>{
        cy.get('#submitMessage > span').click()
        cy.wait(2000)
        cy.get('ol > li').should('have.text','Invalid email address.')
    })
    
    it('submit contact us', () => {
        cy.get('#id_contact').select('2')
        cy.get('#email').type('hrgavali9@gmail.com')
        cy.get('#id_order').type('order_128978924981')
        cy.get('#fileUpload').attachFile('../../images/download.jpg')
        cy.get('#submitMessage > span').click()
        cy.contains('The message cannot be blank.');
        
        cy.get('#message').type('Contrary to popular belief Lorem Ipsum is random text')
        cy.get('#fileUpload').attachFile('../../images/download.jpg')
        cy.get('#submitMessage > span').click()
        cy.contains('Your message has been successfully sent to our team.');
    })


    it('go to home page', () => {
        cy.get('li > .btn > span').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php')
    })
    

})
