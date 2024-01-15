describe('Login test', () => {
    beforeEach(() => {
        //run before each test cases, like beforeMethod in testNG
        cy.clearAllCookies
        //cy.visit();
 
    })
 
   
    it('Opening the web application', ()  => {
        cy.visit('https://mophhcpppr.b2clogin.com/mophhcpppr.onmicrosoft.com/oauth2/v2.0/authorize?p=b2c_1a_signin_signup_aadonly_hcp&response_type=code&client_id=9adc6a82-7ecf-46a1-8eca-02c74f0a6545&scope=9adc6a82-7ecf-46a1-8eca-02c74f0a6545%20openid&state=oqYEBb131n1GKDnnr18Aann6qQAvhdL4WIm87mJuajA%3D&redirect_uri=https://info-identity-dev.pharmatick.com/hie/login/oauth2/code/info-identity-idp&nonce=vWZJOmE96svHcsZVLe9snMao-L4Ysqbz6YJYtWfIYKY');
        cy.get('#localAccountSelect').click();
        cy.get('#signInName').type('esin.acikyildirim@tigahealth.com');
        cy.get('#password').type('EsinTiga1234.')
        cy.get('#next').click();
        cy.get("(//div[@class='contentBody mt-10']//div[@class='titleContent'])[1]").click();
 
    })
})