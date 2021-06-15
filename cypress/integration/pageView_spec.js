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
})
