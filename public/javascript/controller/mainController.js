/**
 * Created by Mátyás on 2016.02.13..
 */
var app = angular.module('euEdgeApp');

app.controller('mainController', function($scope, mainFactory,$http, $uibModal){

    $scope.persons = [];
    $scope.dumpData = '';
    $scope.isFirstView = true;
    $scope.isReverse = false;
    //Handle success
    $scope.init = function(){
        mainFactory.getData().success(handleSuccess);
    };
    var handleSuccess = function(data){
        $scope.persons = data;
        console.log(data);
        if ($scope.isFirstView){
            $scope.dumpData = '';
            $scope.isFirstView = false;
        } else {
            $scope.dumpData = $scope.persons;
        }
    };
    //Get our person.json
    $scope.init();

    $scope.setReverse = function(){
        $scope.isReverse = !$scope.isReverse;
    };

    $scope.addPerson = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'views/addModal.html',
            controller: 'modalController',
            scope: $scope
        });
    };

    $scope.deletePerson = function(item){
        $scope.isFirstView = false;
        var index = $scope.persons.indexOf(item);
        console.log(index);
        $scope.persons.splice(index, 1);
        console.log($scope.persons);
        var deleteData = $scope.persons;
        //Not a best practice!!!
       $http.post('http://localhost:8888/api/delete', deleteData);
        $scope.dumpData = $scope.persons;
    };

    $scope.openGraph = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'views/graphModal.html',
            controller: 'graphController',
            scope: $scope,
            size: 'lg'
        });
    };


});