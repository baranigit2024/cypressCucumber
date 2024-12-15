import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import homePage from "../pages/HomePage";
import searchProductPage from "../pages/SearchProductPage";


// Given("I navigate to the Website", () => {
//    homePage.enterUrl();
// })


Then("Search the blog", (datatable) => {
   datatable.hashes().forEach((element) => {
      searchProductPage.SearchProduct(element.blog)
   });
})


Then("Verify correct blog name searched", (datatable) => {
   datatable.hashes().forEach((element) => {
      searchProductPage.verifyProduct(element.searchValue)
   })
})