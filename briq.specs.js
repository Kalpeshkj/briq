describe('BRIQ Assignment ',()=>{

    it('BRIQ Assignment Testcase 1 - CHECKBOXES',()=>{

        cy.visit('http://the-internet.herokuapp.com/')
        const fileName = 'abc.png'
        cy.contains('Checkboxes').click()
        cy.get('input[type="checkbox"]').eq(0).check()
        cy.get('input[type="checkbox"]').eq(0).should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).uncheck()
        cy.get('input[type="checkbox"]').eq(1).should('not.be.checked')

    })


    it('BRIQ Assignment Testcase 2 - FILE UPLOAD',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        const fileName = 'abc.png'
        cy.contains('File Upload').click()
        cy.get('#file-upload').attachFile(fileName)
        cy.get('#file-submit').click()
        // cy.contains('File Uploaded!').should('be.visible')
        cy.get('h3').should('contain' , 'File Uploaded!')
        cy.get('#uploaded-files').should('contain' , 'abc.png')
    })


     it('BRIQ Assignment Testcase 3 - DROPDOWN',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.contains('Dropdown').click()
        cy.get('#dropdown').should('contain' , 'Please select an option')
        cy.get('#dropdown').select('Option 1')
        cy.get('#dropdown').should('contain' , 'Option 1')
        cy.wait(5000)
        cy.contains('Dropdown').click()
        cy.get('#dropdown').select('Option 2')
        cy.get('#dropdown').should('contain' , 'Option 2')
       
    })



     it('BRIQ Assignment Testcase 4 - INPUTS',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.contains('Inputs').click()
        cy.get('input[type="number"]').should('be.empty') 
        cy.get('input[type="number"]').type('123456')
        // cy.get('input[type="number"]').should('be.visible')
        cy.get('input[type="number"]').should('have.value' ,'123456')
        
    })



    it('BRIQ Assignment Testcase 5 - DYNAMIC CONTROLS',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.contains('Dynamic Controls').click()
        cy.get('input[type="checkbox"]').check()
        cy.get('button[type="button"]').eq(0).click()
        cy.get('#message').should('have.text',"It's gone!")
        cy.get('button[type="button"]').eq(0).should('have.text','Add')
    })


    it('BRIQ Assignment Testcase 6 - FORM AUTHENTICATION',()=>{
        cy.visit('http://the-internet.herokuapp.com/')
        cy.contains('Form Authentication').click()
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('button[type="submit"]').click()
        cy.get('#flash').contains('You logged into a secure area!')
       
    })


})