var app = angular.module('quoteBook');

app.controller("mainCtrl", function($scope, dataService){
    //$scope.lastData = $cookies.getObject('data');
    $scope.quotes = dataService.getData();

    $scope.addData = function(item) {
        dataService.addData(item);
    }

    $scope.removeData = function(item) {
        dataService.removeData(item);
    }

    //$cookies.putObject('data', dataService);
});