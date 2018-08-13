// import * as faker from 'faker';

context('Schemas', () => {

    const uri = '/schemas';
    const modelUser = {
        name: 'User',
        url: '/users',
        description: 'User Description',
        fields: [
            { key: 'firstName', type: 'string', index: false },
            { name: 'lastName', type: 'string', index: false },
            { name: 'email', type: 'string', index: false }
        ]
    };

    const modelFieldTypes = {
        name: 'Field Types',
        url: '/fieldtypes',
        description: 'Field Types Description',
        fields: [
            { key: 'id', value: 'Schema.Types.ObjectId' },
            { key: 'string', value: 'String' },
            { key: 'number', value: 'Number' },
            { key: 'Date', value: 'Date' },
            { key: 'boolean', value: 'Boolean' },
            { key: 'any', value: 'Schema.Types.Mixed' },
            { key: 'Array', value: '[]' },
            { key: 'string[]', value: '[String]' },
            { key: 'number[]', value: '[Number]' },
            { key: 'any[]', value: '[Schema.Types.Mixed]' }
        ]
    };

    const modelFields = {
        name: 'Field',
        url: '/fields',
        description: 'Fields Description',
        fields: [
            { name: 'name', type: 'string', index: false },
            { name: 'label', type: 'string', index: false },
            { name: 'title', type: 'string', index: false },
            { name: 'options', type: 'string[]', index: false },
            { name: 'type', type: 'string', index: false },
            { name: 'required', type: 'Boolean', index: false },
            { name: 'validation', type: 'any[]', index: false },
            { name: 'visible', type: 'boolean', index: false },
            { name: 'description', type: 'string', index: false }
        ]
    };

    beforeEach(() => {

    })


    it('[Schemas] Delete All', () => {

        cy.request('DELETE', uri)
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(response.body.status)
            })
    })

    it('[Schemas] Create User Schema ', () => {

        cy.request('POST', uri, modelUser)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', 'User');
                cy.log(`Name ${response.body.name}`);
                cy.log(`Url ${response.body.url}`);
                cy.log(`description ${response.body.description}`);
                cy.log(`${response.body.documents.length} records found.`)
            })
    })

    it('Schema Create Field Schema', () => {

        cy.request('POST', uri, modelFields)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', 'Field');
                cy.log(`Name ${response.body.name}`);
                cy.log(`Url ${response.body.url}`);
                cy.log(`description ${response.body.description}`);
                cy.log(`${response.body.documents.length} records found.`)
            })
    })

    it('Schema Create FieldTypes Schema', () => {

        cy.request('POST', uri, modelFieldTypes)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', 'Field Types');
                cy.log(`Name ${response.body.name}`);
                cy.log(`Url ${response.body.url}`);
                cy.log(`description ${response.body.description}`);
                cy.log(`${response.body.documents.length} records found.`)
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
