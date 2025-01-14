///<reference types = "cypress"/>

class SearchProductPage
{
        SearchProduct(searchProductName) {
        cy.get("#top-nav > .page-item-5 > a > span").click({ force: true });
        cy.get("[id=’wp-block-search__input-2']")
        .click({ force: true })
        .type(searchProductName);
        cy.get("[id=’search-icon’]").click({ force: true });
        }

        verifyProduct(searchProductName) {
        cy.get("[id=’main’]").contains(searchProductName);
        }
        
}

 
const searchProductPage = new SearchProductPage();
export default searchProductPage;