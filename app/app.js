var app = angular.module("qbApp", [
    'ngRoute',
    'qbApp.home',
    'qbApp.generateNo',
    'qbApp.status'
    ])
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                        when('/apply', {
                            templateUrl: 'status.html',
                            controller: 'StatusFormCtrl'
                        });
            }]);