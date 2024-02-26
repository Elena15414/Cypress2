const {email, password} = require('../fixtures/example.json')
//import {loginReg}  from '../support/login.js'

describe('template spec', () => {

   it('login happy test', () => {
      
    cy.visit (' http://qamid.tmweb.ru/admin')
    cy.contains ("Авторизоваться").should("be.visible")
    cy.get ("[for=email] > .login__input").type(email)
    cy.get ("[for=pwd] > .login__input").type(password)
    cy.get (".login__button").click()

    cy.contains ("Управление залами").should("be.visible")
    const movie = "Зверополис"
    cy.contains(movie).should("be.visible")
    exports.movie = movie

 })
})