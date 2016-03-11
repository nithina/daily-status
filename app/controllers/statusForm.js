angular.module('qbApp.status', [])
        .controller("StatusFormCtrl", ['$scope', '$http', 'generateNo', '$routeParams',
            function ($scope, $http, generateNo, $routeParams) {
                $scope.params = $routeParams;
                $http.get('config/project.json').success(function (data) {
                    $scope.projects = data.Projects;
                });
                $http.get('config/activity-type.json').success(function (data) {
                    $scope.activityTypes = data.Types;
                    $scope.data.statusActivity = $scope.activityTypes[0].activity;
                });
                $scope.data = {
                    statusHrs: '08',
                    statusProject: 'na',
                    statusMins: '00',
                    generateHrs: generateNo.paddednumbers(24),
                    generateMins: generateNo.paddednumbers(60),
                }
            }])