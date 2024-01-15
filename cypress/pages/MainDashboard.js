class MainDashboardPage
{
    upperMenu = {
        dashBoard: ()=> cy.xpath('//*[text()="Dashboard"]'),
        secretManagement: ()=> cy.xpath('//*[text()="Secret Management"]'),
        identityAndAuthorization: ()=> cy.xpath('//*[text()="Identity & Authorization"]'),
        healthcareStakeholder: ()=> cy.xpath('//*[text()="Healthcare Stakeholders"]'),
        practitionerUser: ()=> cy.xpath('//*[text()="Practitioner Users"]'),
        conflictReports: ()=> cy.xpath('//*[text()="Conflict Reports"]'),
        masterPatientIndex: ()=> cy.xpath('//*[text()="Master Patient Index"]'),
        resourceOperations: ()=> cy.xpath('//*[text()="Resource Operations"]'),
        integration: ()=> cy.xpath('//*[text()="Integration"]'),
        definitionAndParameters: ()=> cy.xpath('//*[text()="Definitions & Parameters"]'),
        managerialOperations: ()=> cy.xpath('//*[text()="Managerial Operations"]'),
        audit: ()=> cy.xpath('//*[text()="Audit"]'),
        phrManagement: ()=> cy.xpath('//*[text()="PHR Management"]'),
        vvipPatients: ()=> cy.xpath('//*[text()="VVIP Patients"]'),
    }
    healthcareStakeholderMenu ={
        entities: ()=> cy.xpath('//*[text()="- Entities"]'),
        healthcareServices: ()=> cy.xpath('//*[text()="- Healthcare Services"]'),
        healthcareProfessionals: ()=> cy.xpath('//*[text()="- Healthcare Professionals"]'),
        medicalStudents: ()=> cy.xpath('//*[text()="- Medical Student"]'),   
    }
    clickDashboard()
    {
        this.upperMenu.dashBoard().click()
    }
    clickHealthcareStakeholders()
    {
        this.upperMenu.healthcareStakeholder().click();
    }
    clickHealthcareProfessionals()
    {
        this.healthcareStakeholderMenu.healthcareProfessionals().click();
    }
}
module.exports = new MainDashboardPage();