angular
    .module("app", [])
    .controller("StoreController", function ($http) {
        var vm = this;

        vm.popUpForm = popUpForm;
        vm.closeShowForm = closeShowForm;
        vm.reviews = reviews;
        vm.closeReviewShower = closeReviewShower;
        vm.submitReview = submitReview;

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

        function popUpForm(productId) {
            vm.curComment = {};
            vm.showForm = true;
            vm.curComment.productId = productId;
        };

        function closeShowForm() {
            vm.showForm = false;
        };

        function submitReview() {
            vm.curComment.date = new Date();
            vm.myProdReviews.push(vm.curComment);
            vm.curComment = {};
            closeShowForm();
        };

        function reviews(product) {
            vm.reviewShower = true;
            vm.reviewProd = product;
        };

        function closeReviewShower() {
            vm.reviewShower = false;
        };

        function init() {
            downloadProds();
            vm.myProdReviews = [];
        };
    });