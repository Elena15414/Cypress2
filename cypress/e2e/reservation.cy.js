const {movie} = require("./login.cy")

describe('reservation spec', () => {
  it('passes', () => {
    cy.visit('https://qamid.tmweb.ru/client/index.php')

    const movie = "Зверополис"
    cy.contains(movie).should("be.visible")
    cy.get(':nth-child(3) > .movie-seances__time').click()
    const seats = require('../fixtures/selectors.json')
    seats.forEach(seat => {
    cy.get('buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})').click();
  })
    cy.get('.acceptin-button').click()
    cy.contains("Вы выбрали билеты:").should("be.visible")
    //cy.get('.acceptin-button').click()
    //cy.contains("Электронный билет").should("be.visible")


  })
})