// import * as faker from 'faker';

context('User CRUD Requests', () => {

    const uri = '/users';


    beforeEach(() => {

    })

    it('Schema Delete Users', () => {

        cy.request('DELETE', uri)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response).to.have.property('headers');
            })
    })

    it('Schema GET users', () => {

        cy.request('GET', uri)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response).to.have.property('headers');
            })
    })




})
