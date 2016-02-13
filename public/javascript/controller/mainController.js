/**
 * Created by Mátyás on 2016.02.13..
 */
var app = angular.module('euEdgeApp');

app.controller('mainController', function($scope, mainFactory){

    $scope.data = [];

    //Handle success
    var handleSuccess = function(data){
        $scope.data = data;
        console.log(data);
    };
    //Get our person.json
    mainFactory.getData().success(handleSuccess);

    

});