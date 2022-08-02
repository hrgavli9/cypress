/// <reference types = "cypress" />
describe('Check website', () => {
    beforeEach('Base Website', () => {
        cy.visit('http://automationpractice.com/index.php')
    })


    // just make for ststic website

    it('specials',()=>{
        cy.get('.toggle-footer > :nth-child(1) > a').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=prices-drop')
    })

    it('Best Seller', () => {
        cy.get('.toggle-footer > :nth-child(3) > a').click()
        cy.wait(2000)
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=best-sales')
    })
    
    it('Our Stores', () => {
         cy.get('.toggle-footer > :nth-child(4) > a').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?controller=stores')
    })

    it('About Us', () => {
       cy.get('.toggle-footer > :nth-child(7) > a').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?id_cms=4&controller=cms')
    })
    it('Women', () => {
       cy.get('.list > .tree > :nth-child(1) > [href="http://automationpractice.com/index.php?id_category=3&controller=category"]').click()
        cy.url().should('eq', 'http://automationpractice.com/index.php?id_category=3&controller=category')
    })

})
