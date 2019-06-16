(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://saravana1-heroku.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
