var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;
// console.log(inventory);
// console.log(shoppingCart);
module.exports = {
    inventory: data.inventory,
    shoppingCart: data.shoppingCart,
    addItem: function(itemId, quantity){
      for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].id === itemId) {
          for (var j = 0; j < shoppingCart.length; j++) {
            if (shoppingCart[j].itemId === itemId) {
              if (inventory[i].quantityAvailable >= quantity) {
                  shoppingCart[j].quantity += quantity;
                  inventory[i].quantityAvailable -= quantity;
              }else{
                shoppingCart[j].quantity += inventory[i].quantityAvailable;
                inventory[i].quantityAvailable = 0;
              }
            }
          }
        }
      }
    },
    removeItem: function(itemId, quantity){
      for (var i = 0; i < inventory.length; i++) {
        if (inventory[i].id === itemId) {
          for (var j = 0; j < shoppingCart.length; j++) {
            if (shoppingCart[j].itemId === itemId) {
              if (shoppingCart[i].quantity >= quantity) {
                shoppingCart[j].quantity -= quantity;
                inventory[i].quantityAvailable += quantity;
              }else{
                inventory[i].quantityAvailable += shoppingCart[j].quantity
                shoppingCart[j].quantity = 0;
              }
            }
          }
        }
      }
    },
    getCheckoutSubtotal: function(){
        var checkoutSubtotal = 0.00;
        for (var i = 0; i < shoppingCart.length; i++) {
          checkoutSubtotal += (shoppingCart[i].quantity * inventory[i].price)
        }
        return getCheckoutSubtotal;
    },
    getTax: function(subtotal, rate){
        var tax = 0.00;
        tax = subtotal * rate
        return tax;
    },
    getCheckoutTotal: function(){
        var TAX_RATE = 0.078;
        var checkoutTotal = 0.00;
        for (var i = 0; i < shoppingCart.length; i++) {
          checkoutTotal += ((shoppingCart[i].quantity*inventory[i].price)+(shoppingCart[i].quantity*inventory[i].price*TAX_RATE))
         }
         return Math.round(checkoutTotal * 100) / 100;
       }
     }
