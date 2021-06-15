describe('formInputs', () => {
  beforeEach(() => {
    cy.fixture('mockShortUrls').then((mockShortUrls) => {
      cy.intercept('http://localhost:3001/api/v1/urls', mockShortUrls)
    })
    cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
      ok: true,
      redirected: false,
      status: 201,
      statusText: "Created",
      url: "http://localhost:3001/api/v1/urls"
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

  
})
