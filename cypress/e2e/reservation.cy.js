const {email, password} = require('../fixtures/example.json')
const seats = require('../fixtures/selectors.json')

describe('reservation spec', () => {
  beforeEach ( () =>{
    cy.visit ('/')
    cy.login (email, password)
  })
 
  it('movie name and reservation', () => {

    cy.get('[draggable="true"][data-film-id="118"] > .conf-step__movie-title').then(($el) => $el.textContent).should('have.text','Зверополис')
    cy.get('[draggable="true"][data-film-id="118"] > .conf-step__movie-title').invoke('text').then((text) => {
    cy.visit("qamid.tmweb.ru");
    cy.get(':nth-child(1) > .movie__info > .movie__description > .movie__title').should('have.text', text)
    })
    cy.get(':nth-child(3) > .movie-seances__time').click()
    seats.forEach(seat => {
    cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click();
    })
    cy.get('.acceptin-button').click()
    cy.contains("Вы выбрали билеты:").should("be.visible")

  })
})
