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
    $scope.notFilled = false;
    $scope.ok = function(){
        var myData = $scope.newPerson;
        if(myData.name === ''){
            $scope.notFilled = true;
        } else {
            $scope.notFilled = false;
            $http.post('http://localhost:8888/api/listUsers', myData);

            $uibModalInstance.dismiss('close');

            location.reload();
        }


    }

});