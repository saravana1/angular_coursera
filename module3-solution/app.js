(function() {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
        .directive('foundItems', FoundItems);

    function FoundItems() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'foundList.html',
            scope: {
                foundItems: '<',
                onRemove: '&',
                emptyMessage: '<'
            },
            controller: NarrowItDownController,
            controllerAs: 'menu',
            bindToController: true
        };

        return ddo;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.searchItem = '';

        menu.matchedMenuItems = function() {
            var promise = MenuSearchService.getMatchedMenuItems(menu.searchItem);

            promise.then(function(items) {
                if (items && items.length > 0) {
                    menu.found = items;
                    menu.message = '';
                } else {
                    menu.found = [];
                    menu.message = "Nothing found";
                }
            });
        };

        menu.removeMenuItem = function(itemIndex) {
            menu.found.splice(itemIndex, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];

    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function(searchItem) {
            return $http({
                method: "GET",
                url: (ApiBasePath + "/menu_items.json")
            }).then(function(response) {
                var foundItems = [];

                for (var i = 0; i < response.data['menu_items'].length; i++) {
                    if (searchItem.length > 0 && response.data['menu_items'][i]['description'].toLowerCase().indexOf(searchItem) !== -1) {
                        foundItems.push(response.data['menu_items'][i]);
                    }
                }

                return foundItems;
            });
        };
    }
})();
