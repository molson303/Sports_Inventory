var data = require("./objects");
var inventory = data.inventory;
var shoppingCart = data.shoppingCart;

// console.log(inventory);
// console.log(shoppingCart);
module.exports = {
    inventory: data.inventory,
    shoppingCart: data.shoppingCart,
    addItem: function(itemId, quantity){
      for (var j = 0; j < shoppingCart.length; j++) {
        if (shoppingCart[j].itemId === itemId) {
            for (var i = 0; i < inventory.length; i++) {
              if(inventory[i].id === itemId){
                if (inventory[i].quantityAvailable >= quantity) {
                  shoppingCart[j].quantity += quantity;
                  inventory[i].quantityAvailable -= quantity;
                } else {
                    shoppingCart[j].quantity += inventory[i].quantityAvailable
                    inventory[i].quantityAvailable=0
                }
            }

          }
        }

      }
    },








    removeItem: function(itemId, quantity){
        // Your code here!
    },
    getCheckoutSubtotal: function(){
        var checkoutSubtotal = 0.00;
        // Your code here!
        return checkoutSubtotal;
    },
    getTax: function(subtotal, rate){
        var tax = 0.00;
        // Your code here!
        return tax;
    },
    getCheckoutTotal: function(){
        var TAX_RATE = 0.078;
        var checkoutTotal = 0.00;
        // Your code here!
        return checkoutTotal;
    }
}
