describe('pageView', () => {
  beforeEach(() => {
    cy.fixture('mockShortUrls').then((mockShortUrls) => {
      cy.intercept('http://localhost:3001/api/v1/urls', mockShortUrls)
    })
    cy.visit('http://localhost:3000/')
  })

  it('should display the title of the page', () => {
    cy.get('h1').contains('URL Shortener')
  })

  it('should display the current shortened urls', () => {
    cy.get('h3').contains('Rad pic')
      .get('a').contains('http://localhost:3001/useshorturl/1')
      .get('p').contains('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pets4homes.co.uk%2Fimages%2Farticles%2F2659%2Flarge%2F9-great-ways-to-raise-a-happy-health-kitten-54f1c5f2a4368.jpg&f=1&nofb=1')
  })
})
