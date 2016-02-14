/**
 * Created by Mátyás on 2016.02.13..
 */
var app = angular.module('euEdgeApp');

app.controller('mainController', function($scope, mainFactory, $uibModal){

    $scope.persons = [];
    $scope.dumpData = '';
    //Handle success
    var handleSuccess = function(data){
        $scope.persons = data;
        console.log(data);
    };
    //Get our person.json
    mainFactory.getData().success(handleSuccess);


    $scope.addPerson = function(){
        var modalInstance = $uibModal.open({
            templateUrl: 'views/addModal.html',
            controller: 'modalController',
            scope: $scope
        });
    };

    $scope.deletePerson = function(index){
        console.log($scope.persons[index]);
        $scope.dumpData = $scope.persons[index];
       // $scope.dumpData.push($scope.persons[index]);
        $scope.persons.splice(index, 1);
    };



});