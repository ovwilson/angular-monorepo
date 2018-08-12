// import * as faker from 'faker';

context('User CRUD Requests', () => {

    const uri = '/users';
    const model = {
        firstName:'Joe',
        lastName:'Blow',
        email:'joeblow@jb.com'
    }


    beforeEach(() => {

    })

    it('Schema Delete Users', () => {

        cy.request('DELETE', uri)
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(response.body.status)
            })
    })

    it('Schema Create User', () => {

        cy.request('POST', uri, model)
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(`First Name: ${response.body.firstName}`)
            })
    })

    it('Schema GET users', () => {

        cy.request('GET', uri)
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(`${response.body.length} records found.`)
            })
    })




})
