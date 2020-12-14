describe('Login Page', () => {
    it('header should say Login', () => {
        cy.visit('/')
        cy.get('.App-header').should('contain', 'Login')
        // cy.get('.button').should('contain','Login')
    })
    it('Labels should say Email and Password', () => {
        cy.visit('/')
        cy.get('.label').should('contain','Email')
        cy.get('.label').should('contain','Password')
    })
    it("contains an login button", () => {
        cy.visit('/')
        const addLoginButton=cy.get('#login-btn')
        // addLoginButton.click()
        expect(cy.get('#login-btn')).toExist()
    })
    // it('should have input box for email', () => {
    //     cy.visit('/')
    //     cy.get('input[name="label_email"]').type('Enter your email')
    // })
    // it('should have input box for Password', () => {
    //     cy.visit('/')
    //     cy.get('input[name="label_password"]').type('Enter your password')
    // })
    it('should have a navbar that contains GMBD', () => {
        cy.visit('/')
        cy.get('.navBar').should('contain','GMBD')
    })
    it("contains an login button in the navBar", () => {
        cy.visit('/')
        cy.get('#navBarLogin')
        expect(cy.get('#navBarLogin')).toExist()
    })
    it("contains an home button in the navBar", () => {
        cy.visit('/')
        cy.get('#navBarHome')
        expect(cy.get('#navBarHome')).toExist()
    })
    it("contains a search text box in the navBar", () => {
        cy.visit('/')
        cy.get('input[name="navBarSearchTextBox"]').type('Search')
    })

    it("contains an Search button in the navBar", () => {
        cy.visit('/')
        cy.get('#navBarSearch')
        expect(cy.get('#navBarSearch')).toExist()
    })

})
