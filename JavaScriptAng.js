(function () {
    "use strict";

    angular
        .module("app", [])
        .controller("storecontroller", function ($http) {
            var vm = this;

            vm.loadingMask = loadingMask;
            vm.downloadProds = downloadProds;

            init();

            function init() { };

            function downloadProds() {
                return $http({
                    url: "json.json",
                    method: "get"
                })
                    .then(function (products) {

                    })
            }
        })
})