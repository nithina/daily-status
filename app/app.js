/* global angular */
var app = angular.module("qbApp", ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/")
                $stateProvider
                        .state('/', {
                            url: "/",
                            templateUrl: 'app/views/menu.html'
                        })
                        .state('apply', {
                            url: "/apply",
                            templateUrl: 'status.html',
                            controller: 'StatusFormCtrl'
                        })
            }]);