/**
 * Created by Mátyás on 2016.02.14..
 */
var app = angular.module('euEdgeApp');

app.controller('graphController', function($scope, $uibModalInstance){
    $scope.chartData = $scope.persons;

    $scope.ok = function(){
        $uibModalInstance.dismiss('close');
    };

});