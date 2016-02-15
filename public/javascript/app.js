/**
 * Created by Mátyás on 2016.02.13..
 */
var app = angular.module('euEdgeApp',['ui.bootstrap']);

app.directive('d3Bar', function () {
    var myBarChart = {
        restrict: 'E',
        replace: false,
        scope: {data: '=myBarData'},
        link: function (scope, element, attrs) {
            var chart = d3.select(element[0]);
            chart.append("div").attr("class", "chart")
                .selectAll('div')
                .data(scope.data).enter().append("div")
                .transition().ease("elastic")
                .style("width", function(d) { return d.age*1.5 + '%'; })
                .text(function(d) { return d.name + ' (' + d.age + ')'; });
        }
    };
    return myBarChart;
});




