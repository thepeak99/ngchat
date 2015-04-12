/*global angular*/

(function () {
    'use strict';

    angular.module('ChatControllers', [])
        .controller('ChatCtrl', function ($scope, $http) {
            $scope.messages = [];

            function poll() {
                $http.get('/poll').success(function(data) {
                    $scope.messages.push(data);
                    setTimeout(poll, 0);
                });
            }
            poll();

            $scope.send = function() {
                $http.post('/message', {user: $scope.nick, message: $scope.message});
                $scope.message = "";
            }

            $scope.setNick = function() {
                $scope.nickSet = true;
            }

            $scope.checkKey = function(evt) {
                if (evt.keyCode == 13) 
                    $scope.send();
            }
        });
})();
