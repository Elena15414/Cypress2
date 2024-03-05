const {email, password} = require('../fixtures/example.json')

describe('template spec', () => {

   beforeEach ( () =>{
    cy.visit ('/')
  })

  it ('valid login', () => {
    cy.contains ("Авторизоваться").should("be.visible")
    cy.login ( email, password)
    cy.contains ("Управление залами").should ("be.visible")
  })
})