import Page from "./page";

class InventoryPage extends Page {
  open() {
    return super.open("inventory.html");
  }
  get btnAddToCartList() {
    return $$("[name*=add-to-cart]");
  }

  get itemDescriptionList() {
    return $$(".inventory_item_desc");
  }

  get itemPriceList() {
    return $$(".inventory_item_price");
  }
  get itemNameList(){
      return $$('.inventory_item_name')
  }
  get productPageItemName(){
      return $('.inventory_details_name.large_size')
  }
  //этот метод берет массив элементов как параметр и возвращает массив текстов содержащиеся в этих элементах
  async getItemText(arrayElem) {
    const itemText = arrayElem.map(async (elem) => await elem.getText());
    return await Promise.all(itemText);
  }

  async itemDescriptionListText() {
    return await this.getItemText(await this.itemDescriptionList);
  }

  async btnAddToCartListText() {
    return await this.getItemText(await this.btnAddToCartList);
  }
  async itemPriceListText(){
      return await this.getItemText(await this.itemPriceList)
  }
  async itemNameListText(){
      return await this.getItemText(await this.itemNameList)
  }
}
export default new InventoryPage();
