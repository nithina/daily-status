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
        });