// import * as faker from 'faker';

context('Schema CRUD Requests', () => {

    const uri = '/schemas';
    const modelUser = {
        name: 'User',
        url: '/users',
        description: 'User Description',
        attributes: [
            { name: 'First Name', type: 'String', index: false },
            { name: 'Last Name', type: 'String', index: false },
            { name: 'Email', type: 'String', index: false }
        ]
    };

    const modelContentType = {
        name: 'Content',
        url: '/contents',
        description: 'Content Type Description',
        attributes: [
            { name: 'name', type: 'String', index: false },
            { name: 'description', type: 'String', index: false },
            { name: 'lookup', type: 'String', index: false },
            { name: 'lookup_ref', type: 'String', index:false},

        ]
    };

    beforeEach(() => {

    })


    it('Schema Delete All', () => {

        cy.request('DELETE', uri)
            .then((response) => {
                // response.body is automatically serialized into JSON
                expect(response.status).to.eq(200);
                expect(response).to.have.property('headers');
            })
    })

    it('Schema Create User', () => {

        cy.request('POST', uri, modelUser)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response).to.have.property('headers');
                expect(response.body).to.have.property('name', 'User');
            })
    })

    it('Schema Create Content Type', () => {

        cy.request('POST', uri, modelContentType)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response).to.have.property('headers');
                expect(response.body).to.have.property('name', 'Content');
            })
    })


    // it('Schema GET request', () => {

    //     cy.request('GET', uri)
    //         .then((response) => {
    //             // response.body is automatically serialized into JSON
    //             expect(response.status).to.eq(200);
    //             expect(response).to.have.property('headers');
    //         })
    // })




    // it('Schema getBy ID', () => {

    //     cy.request('GET', `${uri}/Schema`)
    //         .then((response) => {
    //             // response.body is automatically serialized into JSON
    //             expect(response.status).to.eq(200);
    //             expect(response).to.have.property('headers');
    //             expect(response.body).to.have.property('name', 'Schema');
    //         })
    // })

})
