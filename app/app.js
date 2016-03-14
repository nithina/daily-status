var app = angular.module("qbApp", [
    'ngRoute'
    ])
        .config(['$routeProvider',
            function ($routeProvider) {
                $routeProvider.
                        when('/apply', {
                            templateUrl: 'status.html',
                            controller: 'StatusFormCtrl'
                        });
            }]);