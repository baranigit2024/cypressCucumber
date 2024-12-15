///<reference types = "cypress"/>

class HomePage
{
    enterUrl()
    {
        cy.visit("https://qaautomationlabs.com/");

    }

    valdiateMenu(menus)
    {
        cy.contains(menus);
        return this;
    }
    validateTitle()
    {
      // return cy.title().should("eq", "About Us — QAAutomationLabs");
         return cy.title().should("eq", "About Us - QAAutomationLabs");
       
    }
}
const homePage = new HomePage;  
 
export default homePage;