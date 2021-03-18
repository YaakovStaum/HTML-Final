angular
    .module("app", [])
    .controller("StoreController", function ($http) {
        var vm = this;        

        init();



        function downloadProds() {
            return $http({
                url: "json(V3-Ang).json",
                method: "get"
            })
                .then(function (httpResponse) {
                    vm.products = httpResponse.data;
                });
        };

        function init() {
            downloadProds();
        };
    });