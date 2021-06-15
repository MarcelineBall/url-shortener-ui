describe('formInputs', () => {
  beforeEach(() => {
    cy.fixture('mockShortUrlsAfterPost').then((mockShortUrlsAfterPost) => {
      cy.intercept('POST', 'http://localhost:3001/api/v1/urls', mockShortUrlsAfterPost)
    })
    cy.visit('http://localhost:3000/')
  })

  it('should be able to take user inputs into the input fields', () => {
    cy.get('input[name="title"]')
      .type('Cute Puppy!')
      .should('have.value', 'Cute Puppy!')
    cy.get('input[name="long_url"]')
      .type('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdesignerdoginfo.files.wordpress.com%2F2012%2F10%2Fapricot-cavoodle-puppy-on-blue-blanket.jpg&f=1&nofb=1')
      .should('have.value', 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdesignerdoginfo.files.wordpress.com%2F2012%2F10%2Fapricot-cavoodle-puppy-on-blue-blanket.jpg&f=1&nofb=1')
  })

  it('should display a new shortened url when the user fills out and submits the form', () => {
    cy.fixture('mockShortUrlsAfterPost').then((mockShortUrlsAfterPost) => {
      cy.intercept('GET', 'http://localhost:3001/api/v1/urls', mockShortUrlsAfterPost)
    })
    cy.get('input[name="title"]')
      .type('Cute Puppy!')
    cy.get('input[name="long_url"]')
      .type('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdesignerdoginfo.files.wordpress.com%2F2012%2F10%2Fapricot-cavoodle-puppy-on-blue-blanket.jpg&f=1&nofb=1')
    cy.get('button').click()
    cy.get('h3').contains('Cute Puppy!')
      .get('a').contains('http://localhost:3001/useshorturl/2')
      .get('p').contains('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdesignerdoginfo.files.wordpress.com%2F2012%2F10%2Fapricot-cavoodle-puppy-on-blue-blanket.jpg&f=1&nofb=1')
  })
})
