context('Login form tests', () => {
	beforeEach(() => {
		cy.visitMeestGroupSiteEngVersion();
	})

	it('Success login', () => {
		//Arrange
		const email = 'formeestgrouptest@gmail.com'
		const pass = 'A1234567'

		//Act
		loginWithEmailAndPassword(email, password)
		cy.contains('Login').click()

		//Assert
		cy.contains('Please enter tracking number').should('be.visible')
	})

	//Similar function could be exstracted to be reused in different test cases. Depends of project structure.
	function loginWithEmailAndPassword(email, password) {
	    cy.get('input[type=text]').type(email)
	    cy.get('input[type=password]').type(password)
	    cy.contains('Login').click()
	}
})