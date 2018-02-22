'use strict';

var app = angular.module('directives', []);

//headerDirective
app.directive('headerDirective', function() {
    return {
        restrict: 'A',
        controller: function($scope, $location) {
            $scope.isActive = function (viewLocation) {
                return viewLocation === $location.path();
            };
        }
    };
});