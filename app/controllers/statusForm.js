app.controller("StatusFormCtrl", ['$scope', '$http', 'generateNo', 'generateDays',
    function ($scope, $http, generateNo, generateDays) {

        $scope.dailyStatus = [];

        $http.get('config/project.json').success(function (data) {
            $scope.projects = data.Projects;
        });
        $http.get('config/activity-type.json').success(function (data) {
            $scope.activityTypes = data.Types;
            $scope.data.statusActivity = $scope.activityTypes[0].activity;
        });

        var hrs = 24;
        var mins = 60;

        daysArray = generateDays.days(8);
        $scope.data = {
            statusHrs: '08',
            statusProject: 'na',
            statusMins: '00',
            statusDate: daysArray[0],
            generateDates: daysArray,
            generateHrs: generateNo.paddednumbers(hrs),
            generateMins: generateNo.paddednumbers(mins)
        };

        $scope.update = function (data) {
            if ($scope.statusForm.$valid) {
                $scope.dailyStatus.unshift({
                    statusDate: data.statusDate,
                    statusProject: data.statusProject,
                    statusActivity: data.statusActivity,
                    statusHrs: data.statusHrs,
                    statusMins: data.statusMins,
                    text: data.statusDescription,
                    done: false
                });
            }
        };
    }]);