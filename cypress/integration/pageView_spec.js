describe('pageView', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should display the title of the page', () => {
    cy.get('h1').contains('URL Shortener')
  })
})
