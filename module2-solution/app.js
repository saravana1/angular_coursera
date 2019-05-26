(function(){
    'use strict';

    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBoughtController)
    .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var toBuy = this;
    
      toBuy.items = ShoppingListCheckOffService.getTobuyListItems();
    
      toBuy.removeItem  = function (itemIndex, itemName, itemQuantity) {
        ShoppingListCheckOffService.removeItem(itemIndex, itemName, itemQuantity);
      };
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var alreadyBought = this;

      alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtListItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
      
        // List of shopping items
        var toBuyList = [{
            name: "cookies",
            quantity: 10
        },{
            name: "chocolate",
            quantity: 5
        },{
            name: "ice-cream",
            quantity: 1
        },{
            name: "bread",
            quantity: 2
        },{
            name: "butter",
            quantity: 5
        }];
        var alreadyBoughtList = [];
    
        service.removeItem = function (itemIdex, itemName, itemQuantity) {
            toBuyList.splice(itemIdex, 1);

            var item = {
                name: itemName,
                quantity: itemQuantity
              };
            alreadyBoughtList.push(item);
        };
      
        service.getTobuyListItems = function () {
          return toBuyList;
        };

        service.getAlreadyBoughtListItems = function () {
            return alreadyBoughtList;
          };
      }
})();