angular.module('qbApp.generateNo', [])
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
        }).service('generateDays', function ($filter) {
            this.days = function (range) {
                dateArray = [];
                
                for (var day = 0; day < range; day++) {
                    var d = new Date();
                    statusDate = d.setDate(d.getDate()- day);
                    dateArray.push($filter('date')(statusDate, "dd/MM/yyyy"));                    
                }
                
                return dateArray;
            }
        });