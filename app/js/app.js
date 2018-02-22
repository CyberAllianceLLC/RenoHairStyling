'use strict';

//libraries
var app = angular.module('app', [
    //angular
    'controllers', 'directives', 'services',
    //libraries
    'ui.router'
]);

//router
app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('services', {
        url: '/services',
        templateUrl: 'views/services.html'
    })
    .state('schedule', {
        url: '/schedule',
        templateUrl: 'views/schedule.html'
    })
    .state('photos', {
        url: '/photos',
        templateUrl: 'views/photos.html'
    })
    .state('contact', {
        url: '/contact',
        templateUrl: 'views/contact.html'
    });

    $urlRouterProvider.otherwise('/services');
});