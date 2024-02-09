import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the OrangeHRM Demo Website',(dataTable)=>{
    dataTable.hashes().forEach((element)=>{
        cy.visit(element.url)
    })
})

When('I enter valid credentials',(dataTable)=>{
    dataTable.hashes().forEach((element) => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(element.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(element.password)
    });    
})

When('I enter invalid credentials',(dataTable)=>{
    dataTable.hashes().forEach((element) => {
        
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(element.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(element.password)
    });    
})

When('I click on Login button',()=>{
    cy.get('.oxd-button').click()
})

Then('I should be navigated to the Dashboard',()=>{
    cy.get('.oxd-topbar-header-breadcrumb > .oxd-text',{timeout:5000}).should('contain','Dashboard')
})

Then('I should get error message',(dataTable)=>{
    dataTable.hashes().forEach((element)=>{
        cy.get('.oxd-alert-content > .oxd-text',{timeout:5000}).should('contain',element.errorMssg)
    })
})