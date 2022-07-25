Feature: Blankfactor

    Scenario: Visiting web site
        Given I go to the blankfactor web site
        When the page is totally load
        Then the web site should works correctly

    Scenario: Going to blog Page
        Given I go to the blankfactor web site
        When the page is totally load
        And I go to blog section
        Then the blog page should be loaded with title "Latest posts"

    Scenario: Going to specific article
        Given I am in the blog section
        When I search for the article "Why Fintech in Latin America Is Having a Boom"
        And I click on article "Why Fintech in Latin America Is Having a Boom"
        Then the article by "Sofia Gonzalez" should be loaded correctly
        And there should have the topic "Technology and Finance Are No Strangers"
        And there should have the topic "Fintech in Latin America Is Booming"
        And there should have the topic "The World of Payment Systems"
        And there should have the topic "Challenges and Benefits"