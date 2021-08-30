import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pageobjects/login.page";
import users from "../input/users"
import InventoryPage from "../pageobjects/inventory.page";

const expect = require("chai").expect;
const pages = {
  login: LoginPage,
  inventory: InventoryPage
};

Given(/^I am on the (\w+) page$/, async (page) => {
  await pages[page].open();
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
  await LoginPage.login(username, password);
});

Then(/^My page's URL equals (.*)$/, async (url) => {
  await expect(url).to.equal(await browser.getUrl());
});

When(/^I login as (\w+\_*\w+)$/, async (user) => { //(\w+\_*\w+) - после каждого слова(\w+) должен быть знак (_) и еще слово 
  await LoginPage.login(users[user].login,users[user].password);
  });

  Then(/^On each buttons I see the lable (.*)$/, async (label) => {
    expect(await (await InventoryPage.btnAddToCartListText())
    .filter(async el => await el.toLowerCase() === 'add to cart').length).to.equal(await (await InventoryPage.btnAddToCartListText()).length)
  });
 