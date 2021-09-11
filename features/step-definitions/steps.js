import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pageobjects/login.page";
import users from "../input/users"
import InventoryPage from "../pageobjects/inventory.page";
import inventoryPage from "../pageobjects/inventory.page";

const expect = require("chai").expect;
const pages = {
  login: LoginPage,
  inventory: InventoryPage
};
const links = {
  ALLITEMS : InventoryPage.allItemsSidebarLink,
  ABOUT : InventoryPage.aboutSidebarLink,
  LOGOUT : InventoryPage.logOutSideBarLink
}

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
      let btnLabelsArray = await InventoryPage.btnAddToCartListText();
    expect(btnLabelsArray.filter(async el => await el.toLowerCase() === 'add to cart').length).to.equal(btnLabelsArray.length)
  });

  Then(/^Each item has a non-empty description$/, async ( ) => {
   let itemDescriptionListText = await InventoryPage.itemDescriptionListText();
  expect(  itemDescriptionListText.filter(el=>el.length > 0).length).to.equal(itemDescriptionListText.length)
});
  Then(/^Each item I see price more then zero$/, async ( ) => {
      let itemPriceListText = await InventoryPage.itemPriceListText();
      expect(itemPriceListText.filter(el => el[0] === '$' && Number(el.slice(1) > 0)).length).to.equal(itemPriceListText.length);
 });
 Then(/^On each item i see name$/, async ( ) => {
    let itemNameListText = await InventoryPage.itemNameListText();
    expect(itemNameListText.filter(el => el.length > 0).length).to.equal(itemNameListText.length);
});
Then(/^I clicked on each item and I see correct item page$/, async ( ) => {
   const itemNameList = await InventoryPage.itemNameList;
   for (let product of itemNameList){
    const InventoryPageProductText = await product.getText();
    await product.click()
    const productPageItemName = await InventoryPage.productPageItemName;
    const productPageProductText = await productPageItemName.getText();
    expect (InventoryPageProductText).to.equal(productPageProductText);
    await InventoryPage.open();
   }
});
Given(/^The side drawer is hidden$/, async ( ) => {
    const WrapmenuBtn = await InventoryPage.WrapmenuBtn;
    const atrrAreaHiden = await WrapmenuBtn.getAttribute('aria-hidden');
     expect(atrrAreaHiden).to.equal('true');
});
When(/^I click on menu button$/, async ( ) => {
    const menuBtn = await InventoryPage.menuBtn;
    await menuBtn.click();
});
Then(/^The side drawer is appears$/, async ( ) => {
    const WrapmenuBtn = await InventoryPage.WrapmenuBtn;
    const atrrAreaHiden = await WrapmenuBtn.getAttribute('aria-hidden');
     expect(atrrAreaHiden).to.equal('false');
});
When(/^I click on (\w+)$/, async (link) => {
  const item = await links[link];
  await item.click();
});
Then(/^I see correct (.+)$/, async (page) => {
  const pageUrl = await browser.getUrl();
  expect(pageUrl).to.equal(page)
});




 