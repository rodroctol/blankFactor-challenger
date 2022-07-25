import { MainElements } from "../elements/main.elements";
import { BlogPageElements } from '../elements/blogPage.elements';

export class MainPageObjects {

    openMainPage() {
        cy.visit('/');
    }

    waitMainPageLoad() {
        return cy.get(MainElements.logo);
    }

    getFooterMenu(){
        return cy.get(MainElements.footerMenu).scrollIntoView();
    }

    goToBlogPage(){
        cy.get(MainElements.cookieAccept).click();
        cy.get(MainElements.insights).trigger('mouseover');
        cy.get(MainElements.blog).click();
    }

    blogPageValidation(title: string){
        return cy.contains(BlogPageElements.blogPageValidation, title).scrollIntoView();
    }
}