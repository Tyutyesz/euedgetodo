/**
 * Created by Mátyás on 2016.02.13..
 */
var app = angular.module('euEdgeApp');

app.factory('mainFactory', function( $http){

    return {
        getData : function(){
            return $http({
                method: 'GET',
                url: '/api/listUsers'
            })
        }
    }

});