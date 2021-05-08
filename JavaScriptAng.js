angular
    .module("app", [])
    .controller("StoreController", function ($http) {
        var vm = this;

        vm.popUpForm = popUpForm;
        vm.checkProdArray = checkProdArray;
        vm.closeShowForm = closeShowForm;
        vm.reviews = reviews;
        vm.closeReviewShower = closeReviewShower;
        vm.submitReview = submitReview;
        vm.sendRatings = sendRatings;

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
            vm.curComment.productId = productId;
            vm.productId = productId;
            checkProdArray(productId, vm.ProdReviewsEdit);
            vm.showForm = true;  
        };

        function checkProdArray(productId, array) {
            vm.index = array.findIndex(x => x.productId === productId);
            if (array == vm.ProdReviewsEdit) {                
                if (vm.index >= 0) {
                    vm.curComment.name = array[vm.index].name;
                    vm.curComment.Email = array[vm.index].Email;
                    vm.curComment.review = array[vm.index].review;
                }
                array.splice(vm.index,1);
            };
        };

        function closeShowForm() {            
            vm.showForm = false;
            vm.ProdReviewsEdit.push(vm.curComment);
            vm.curComment = {};
        };

        function submitReview(productId) {
            vm.productId = productId;
            checkProdArray(productId, vm.ProdReviews);
            vm.curComment.date = new Date();
            $http({
                url: "GradeAStar.html",
                method: "POST",
                data: vm.curComment
            })
                .catch(function (err) { });
            vm.ProdReviews.push(vm.curComment)
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

       function sendRatings(rating) {
            $http({
                url: "GradeAStar.json/ratings",
                method: "POST",
                data: rating
            })
                .catch(function (err) { })
        };

        function init() {
            vm.curComment = {};
            downloadProds()
                .then(arrays);           
        };
    });