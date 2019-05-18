(function(){
    'use strict';

    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);

    LunchCheckController.$inject =['$scope'];
    function LunchCheckController($scope){
        $scope.content = "";
        $scope.message = "";
        $scope.color = {};

        $scope.calculate = function(){
            var content = $scope.content.split(",").map(str => str.trim()).filter(Boolean); //filtering out empty strings

            if(content.length <= 3 && content.length > 0){
                $scope.message = "Enjoy!";
                $scope.color = {"color":"green"};
            }
            else if(content.length > 3){
                $scope.message = "Too much!";
                $scope.color = {"color":"green"};
            }
            else{
                $scope.message = "Please enter data first";
                $scope.color = {"color":"red"};
            }
        };
    }
})();