describe('Adding a new computer', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it('show an error message for empty computer name', () => {
        cy.contains('Add a new computer').click()
    
        cy.get('#introduced').type('2023-04-19')
        cy.get('#discontinued').type('2023-04-19')
        cy.get('#company').select('RCA')
        cy.contains('Create this computer').click()
    
        cy.contains('Failed to refine type : Predicate isEmpty() did not fail.').should('exist')
      })
    it('show an error message for invalid date format', () => {
        cy.contains('Add a new computer').click()
        cy.get('#name').type('New Computer')
        cy.get('#introduced').type('18-04-2023')
        cy.get('#discontinued').type('2023-04-19')
        cy.get('#company').select('RCA')
        cy.contains('Create this computer').click()
        cy.contains('Failed to decode date : java.time.format.DateTimeParseException').should('exist')
      })
  
    it('add a new computer with valid data', () => {
      cy.contains('Add a new computer').click()
  
      cy.get('#name').type('New Computer')
      cy.get('#introduced').type('2023-04-18')
      cy.get('#discontinued').type('2023-04-19')
      cy.get('[id="company"]').select('RCA')
      cy.contains('Create this computer').click()
  
      cy.contains('Done ! Computer New Computer has been created').should('exist')
      cy.contains('New Computer').should('exist')
    })
  
   
  })
  