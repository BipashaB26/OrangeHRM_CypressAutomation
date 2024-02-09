Feature: Login to the OrangeHRM Demo Website

Scenario Outline: Login with valid credentials
Given I am on the OrangeHRM Demo Website
    |url|
    |https://opensource-demo.orangehrmlive.com/web/index.php/auth/login|
When I enter valid credentials
    |username|password|
    |Admin|admin123|
When I click on Login button
Then I should be navigated to the Dashboard

Scenario Outline: Login with invalid credentials
Given I am on the OrangeHRM Demo Website
    |url|
    |https://opensource-demo.orangehrmlive.com/web/index.php/auth/login|
When I enter invalid credentials
    |username|password|
    |Admin|invalid|
    |invalid|admin123|
    |invalid|invalid|
When I click on Login button
Then I should get error message
    |errorMssg|
    |Invalid credentials|