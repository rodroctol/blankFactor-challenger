import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { MainPageObjects } from '../../support/pages/main.po';
import { BlogPageObjects } from '../../support/pages/blog.po';
import { ArticlePageObjects } from '../../support/pages/articlePage.po';

const articlePageObjects = new ArticlePageObjects();
const blogPageObjects = new BlogPageObjects();
const mainPageObjects = new MainPageObjects();

Given('I go to the blankfactor web site', () => {
    mainPageObjects.openMainPage();
})

Given('I am in the blog section', () => {
	blogPageObjects.openBlogPage();
})

When('the page is totally load', () => {
    mainPageObjects.waitMainPageLoad().should('exist');
})

When('I go to blog section', () => {
    mainPageObjects.goToBlogPage();
})

When('I search for the article {string}', (article: string) => {
	blogPageObjects.getArticle().should('contains.text', article);
})

When('I click on article {string}', (title: string) => {
    blogPageObjects.clickOnArticle(title);
})

Then('the web site should works correctly', () => {
    mainPageObjects.getFooterMenu().should('be.visible');
})

Then('the blog page should be loaded with title {string}', (title: string) => {
	mainPageObjects.blogPageValidation(title).should('exist');
})

Then('the article by {string} should be loaded correctly', (author: string) => {
	articlePageObjects.articlePageValidation().should('contains.text', author);
})

Then('there should have the topic {string}' , (topic1: string) => {
	articlePageObjects.topicValidation().should('contain.text', topic1);
})

Then('there should have the topic {string}' , (topic2: string) => {
	articlePageObjects.topicValidation().should('contain.text', topic2);
})

Then('there should have the topic {string}' , (topic3: string) => {
	articlePageObjects.topicValidation().should('contain.text', topic3);
})

Then('there should have the topic {string}' , (topic4: string) => {
	articlePageObjects.topicValidation().should('contain.text', topic4);
})