var app = angular.module("qbApp", [])
        .service('generateNo', function () {
            this.paddednumbers = function (size) {
                noArray = [];
                for (var no = 0; no <= size; no++) {
                    if (no < 10) {
                        no = '0' + no; // adding leading zero
                    }
                    noArray.push(no);
                }
                return noArray;
            }
        })
        .controller("StatusFormCtrl", ['$scope', '$http', 'generateNo',
            function ($scope, $http, generateNo) {
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
            }]);