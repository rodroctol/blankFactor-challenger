import { BlogPageElements } from '../elements/blogPage.elements';
import { MainPageObjects } from './main.po';

const mainPage = new MainPageObjects()

export class BlogPageObjects {
    
    openBlogPage(){
        mainPage.openMainPage();
        mainPage.waitMainPageLoad();
        mainPage.goToBlogPage();
    }

    getArticle(){
        function searchArticle(){
            for(let n = 0; n < 18; n ++){
              cy.get(BlogPageElements.loadMoreButton, { log: false }).click({ log: false });
            }
          }
          
          searchArticle()
          return cy.get(BlogPageElements.articleFintechInLATAM);
    }

    clickOnArticle(title: string){
        cy.contains(BlogPageElements.goToArticle, title).click();
    }
}