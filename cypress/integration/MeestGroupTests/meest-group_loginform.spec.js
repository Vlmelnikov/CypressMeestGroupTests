context('Login form tests', () => {
	beforeEach(() => {
		cy.visitMeestGroupSiteEngVersion();
	})

	it('Success login', () => {
		//Arrange
		const email = 'formeestgrouptest+1002@gmail.com'
		const pass = 'A1234567'

		//Act
		cy.get('input[type=text]').type(email)
		cy.get('input[type=password]').type(pass)
		cy.contains('Login').click()

		//Assert
		cy.contains('Please enter tracking number').should('be.visible')
	})
})