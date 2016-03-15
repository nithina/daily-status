app.controller("StatusFormCtrl", ['$scope', '$http', '$rootScope', '$state', 'generateNo', 'generateDays',
    function ($scope, $http, $rootScope, $state, generateNo, generateDays) {
//        $scope.params = $routeParams;
        $http.get('config/project.json').success(function (data) {
            $scope.projects = data.Projects;
        });
        $http.get('config/activity-type.json').success(function (data) {
            $scope.activityTypes = data.Types;
            $scope.data.statusActivity = $scope.activityTypes[0].activity;
        });

        daysArray = generateDays.days(8);
        $scope.data = {
            statusHrs: '08',
            statusProject: 'na',
            statusMins: '00',
            statusDate: daysArray[0],
            generateDates: daysArray,
            generateHrs: generateNo.paddednumbers(24),
            generateMins: generateNo.paddednumbers(60)
        };

        $scope.update = function (data) {
            $scope.submitted = true;
        };
    }]);