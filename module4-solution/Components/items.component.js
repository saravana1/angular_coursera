(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'Templates/items.component.html',
            bindings: {
                items: '<'
            }
        });
})();