var app = angular.module('quoteBook');

app.controller("mainCtrl", function($scope, dataService){

    $scope.quotes = dataService.getData();


    $scope.addData = function(item) {
        dataService.addData(item);
    }

    $scope.removeData = function(item) {
        dataService.removeData(item);
    }
});