import { ArticleElements } from '../elements/article.elements'

export class ArticlePageObjects {

    articlePageValidation(){
        return cy.get(ArticleElements.articleAuthor);
    }

    topicValidation(){
        return cy.get(ArticleElements.postContent);
    }
}