/// <reference types = "cypress" />
// it('IsVisitWebsite',function()
// {
//     cy.visit('http://automationpractice.com/index.php')
//     cy.get('#contact-link > a').click()
    

//     if (cy.get('#submitMessage > span').click())
//     {
//         if (cy.get('#email').select.length == 0)
//         {
//            alert("its null")
//         }
//     }
//     else
//     {
//         alert("its not  null")
//     }
   
    
// })




describe('Automation Example',() => {
    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php')
    })
    
    it('Go To contact Page',()=>{
        cy.wait(1000)
        cy.get('#contact-link > a').click() 
        cy.get('#submitMessage > span').click()
        cy.wait(1000)
        cy.get('ol > li').should('have.text','Invalid email address.')
                
    })
    
})