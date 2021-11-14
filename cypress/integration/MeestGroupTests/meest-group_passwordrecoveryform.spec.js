context('Password recovery form tests', () => {
	beforeEach(() => {
		cy.visit('https://me24.meest-group.com/')

		cy.contains('eng').click() //TODO: should be optimized by POST request

		cy.contains('Do you Forgot password?').click()
	})

	it('Success registration', () => {
		//Arrange
		const email = 'formeestgrouptest@gmail.com'

		//Act
		cy.get('.popupContent input[type=text]').type(email)
		cy.get('.popupContent').contains('Ok').click()

		//Assert
		cy.get('#gwt-uid-12')
			.should('have.text', `You will receive email: ${email} with recovery password instruction`)
	})
})