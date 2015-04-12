/*global angular*/

(function () {
    'use strict';
    angular.module('Chat', ['ngRoute', 'ChatControllers'])
        .config(function ($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {templateUrl: 'static/partials/chat.html', controller: 'ChatCtrl'})
        }).run(function ($location, $http, $rootScope) {
        });
}());
