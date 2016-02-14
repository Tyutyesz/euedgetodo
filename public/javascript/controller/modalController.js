/**
 * Created by Mátyás on 2016.02.14..
 */
var app = angular.module('euEdgeApp');

app.controller('modalController', function($scope, $uibModalInstance, $http){

    $scope.newPerson = {
        name: '',
        job: '',
        age: '',
        nick: '',
        employee: false
    };
    $scope.newPerson.employee = false;
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.ok = function(){
        $scope.persons.push($scope.newPerson);
        $uibModalInstance.dismiss('close');
    };
    $scope.teszt = function(){
        var myData = $scope.newPerson;
        console.log(myData);
        $http.post('http://localhost:8888/api/listUsers', myData);
    }

});