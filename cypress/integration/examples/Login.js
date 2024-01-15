
//Successful Login -Spec
describe('Login Tests',function()
{
it('Login with valid user test',function()
{
cy.visit("/")
    cy.get("#localAccountSelect").click();
    cy.get('#signInName').type('esin.acikyildirim@tigahealth.com');
    cy.get('#password').type('EsinTiga1234.')
    cy.get('#next').click();
cy.get('.btn').click();
cy.wait(4000);
//cy.xpath('//*[@id="main"]/div[1]/nav/div[2]/div/ul/li[3]/a/div/span[2]').click();
 cy.get(':nth-child(3) > .dropdown-indicator > .d-flex > .nav-link-text').click()
})
})