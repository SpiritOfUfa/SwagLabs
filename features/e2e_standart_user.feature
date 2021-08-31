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


