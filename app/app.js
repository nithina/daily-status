/* global angular */
var app = angular.module("qbApp", ['ui.router'])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/")
                $stateProvider
                        .state('home', {
                            url: "/",
                            views: {
                                "menu": {
                                    templateUrl: "app/views/menu.html"
                                }
                            }
                        })
                        
                        .state('home.apply', {
                            url: "apply/",
                            views: {
                                "apply" :
                                        {
                                    templateUrl: "status.html",        
                                }
                            },
                            controller: 'StatusFormCtrl'
                        })
            }]);