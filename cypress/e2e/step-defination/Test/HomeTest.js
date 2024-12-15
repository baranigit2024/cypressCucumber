import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from "../pages/HomePage";

Given("I navigate to the Websites", () => {
    homePage.enterUrl();
})

Then("Validate the menus in home page", (datatable) => {
    datatable.hashes().forEach((element) => {
        homePage.valdiateMenu(element.menu_name);
    });

})

Then("Validate the title after login", (datatable) => {
    datatable.hashes().forEach((element) => {
        homePage.validateTitle(element.title);
    })
})