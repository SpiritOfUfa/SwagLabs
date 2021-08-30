import Page from "./page";

class InventoryPage extends Page {
  open(){
    return super.open("inventory.html");
  }
  get btnAddToCartList() {
    return $$("[name*=add-to-cart]");
  }
  async btnAddToCartListText() {
    return await (
      await this.btnAddToCartList
    ).map(async (el) => await el.getText());
  }
  
}
export default new InventoryPage();
