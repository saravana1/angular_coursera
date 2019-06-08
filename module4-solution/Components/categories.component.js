(function() {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
           templateUrl: 'Templates/categories.component.html',
            bindings: {
                categories: '<'
            }
        });
})();