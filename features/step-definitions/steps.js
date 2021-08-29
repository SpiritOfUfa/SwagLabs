import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pageobjects/login.page";

const expect = require("chai").expect;
const pages = {
  login: LoginPage,
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
