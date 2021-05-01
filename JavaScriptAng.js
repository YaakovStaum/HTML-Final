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
                })
        };

        function arrays() {
            vm.ProdReviews = new Array();
            vm.ProdReviewsEdit = new Array();
        };

        function popUpForm(productId) {    
            vm.showForm = true;            
            vm.curComment.productId = productId;
            vm.productId = productId;
        };

        function closeShowForm() {            
            vm.showForm = false;
            vm.curComment = {};
        };

        function submitReview() {
            vm.curComment.date = new Date();
            vm.ProdReviews.push(vm.curComment);
            closeShowForm();
        };

        function reviews(product, productId) {
            vm.reviewShower = true;
            vm.reviewProd = product;
            vm.productId = productId;
        };

        function closeReviewShower() {
            vm.reviewShower = false;
        };

        function init() {
            vm.curComment = {};
            downloadProds()
                .then(arrays);           
        };
    });