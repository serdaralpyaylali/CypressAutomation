import MainDashboard from "../pages/MainDashboard";

beforeEach('Clean local/session storage and cookies', () => {
    cy.clearAllCookies();
    cy.clearAllSessionStorage();
    cy.clearCookies();
    cy.visit("/");
    cy.get("#localAccountSelect").click();
    cy.get('#signInName').type('esin.acikyildirim@tigahealth.com');
    cy.get('#password').type('EsinTiga1234.')
    cy.get('#next').click();
    cy.get('.btn').click();
    MainDashboard.clickHealthcareStakeholders();
    MainDashboard.clickHealthcareProfessionals();
})

