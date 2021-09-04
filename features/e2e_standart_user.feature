Feature: End to End test for standart user

    Scenario: Login with standart User and Password

        Given I am on the login page
        When I login as standart_user
        Then My page's URL equals https://www.saucedemo.com/inventory.html




    Scenario: Once on the Inventory Page, validate that all add to card buttons have 'Add to card' label

        Given I am on the inventory page
        Then On each buttons I see the lable Add to Cart

    Scenario: Once on the Inventory Page, validate that each items have a non-empty descriptions.
        Then Each item has a non-empty description

    Scenario: Once on the Inventory Page, validate that all items have price
        Then Each item I see price more then zero

    Scenario: Validate that all items have names
        Then On each item i see name

    Scenario: Click on each product and check the target page is valid
        Then I clicked on each item and I see correct item page

        Scenario: Validate that the side bar exist and is clickable
        Given The side drawer is hidden
        When I click on menu button
        Then The side drawer is appears


