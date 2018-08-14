import db from './../../fixtures/db.json';

context('Schemas', () => {

    const uri = '/schemas';

    it('[Schemas] Delete All', () => {

        cy.request('DELETE', uri)
            .then((response) => {
                expect(response.status).to.eq(200);
                cy.log(response.body.status);
            });
    });

    it('[Schemas] Create User Schemas ', () => {

        cy.request('POST', uri, db.users[0])
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', 'User');
                cy.log(`Name ${response.body.name}`);
                cy.log(`Url ${response.body.url}`);
                cy.log(`description ${response.body.description}`);
                cy.log(`${response.body.fields.length} fields found.`);
            });
    });

    it('Schema Create FieldTypes Schema', () => {

        cy.request('POST', uri, db.fieldtypes[0])
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', 'Field Types');
                cy.log(`Name ${response.body.name}`);
                cy.log(`Url ${response.body.url}`);
                cy.log(`description ${response.body.description}`);
                cy.log(`${response.body.fields.length} fields found.`);
            });
    });


});
