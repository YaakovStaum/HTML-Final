var productNum = 0;

var name1 = null;
var email1 = null;
var review1 = null;
var date1 = null;
var name2 = null;
var email2 = null;
var review2 = null;
var date2 = null;
var name3 = null;
var email3 = null;
var review3 = null;
var date3 = null;
var name4 = null;
var email4 = null;
var review4 = null;
var date4 = null;
var name5 = null;
var email5 = null;
var review5 = null;
var date5 = null;
var name6 = null;
var email6 = null;
var review6 = null;
var date6 = null;
var name7 = null;
var email7 = null;
var review7 = null;
var date7 = null;
var name8 = null;
var email8 = null;
var review8 = null;
var date8 = null;

function showLoader() {
    $(".loading-mask").show();
}

function hideLoader() {
    $(".loading-mask").hide();
}

$(document).ready(function () {
    $.ajax({
        url: "json(V3-Ang).json",
        dataType: "json"
    })
        .then(function (allProducts) {
            showLoader();
            var limitRow = 0;
            var rowDiv = $("<div>").addClass("row height");

            for (var iproduct = 0; iproduct < allProducts.length; iproduct++) {
                var productJson = allProducts[iproduct];

                var ratings = productJson.ratings;
                var unrating = 5 - ratings;

                var pluralQ;
                if (productJson.reviews.length == 1) {
                    pluralQ = " Review"
                }
                else {
                    pluralQ = " Reviews"
                }

                var productDiv = $("<div>").addClass("col-lg-3 center border").attr("id", productJson.productId)
                    .append($("<div>").addClass("product"))
                    .append($("<div>").addClass("imgContainer")
                        .append($("<img>").attr({ src: productJson.image })))
                    .append($("<div>").text(productJson.name))
                    .append($("<div>").addClass("stars"))
                    .append($("<p>").addClass("reviews")
                        .append($("<button>").addClass("review review-button")
                            .append($("<text>").text(productJson.reviews.length).addClass("reviewsNumber"))
                            .append($("<text>").text(pluralQ).addClass("checkP"))))
                    .append($("<button>").addClass("persanal-reviews").text("Write Review"))

                if (productJson.reviews.length == 0) {
                    $(productDiv).find(".reviews")
                        .prepend($("<div>").addClass("no-reviews"))
                    $(productDiv).find(".review").removeClass("review-button").addClass("review-div")
                }

                for (var i = 0; i < ratings; i++) {
                    var starButtonClicked = $("<button>").addClass("fas far fa-star");
                    $(productDiv.find(".stars")).append(starButtonClicked);
                }

                for (var i = 0; i < unrating; i++) {
                    var starButtonUnclicked = $("<button>").addClass("far fa-star");
                    $(productDiv.find(".stars")).append(starButtonUnclicked);
                }


                limitRow++;

                if (limitRow == 4) {
                    $(rowDiv).append(productDiv);
                    $("#products").append(rowDiv);
                    var rowDiv = $("<div>").addClass("row height");
                    limitRow = 0;
                }
                else {
                    $(rowDiv).append(productDiv);
                }

            }
            if (limitRow != 0) {
                $("#products").append(rowDiv);
            }
            hideLoader();
        })
        .catch(function () {
            alert("Sorry, the products need to be revised. Please contact Grade A Store.");
            hideLoader();
        })
        .then(function () {

            function close() {
                $("#pop-up").addClass("invisible");
                $("#my-review").addClass("invisible");
                $("#general-review").addClass("invisible");

                $("#nameInput").val("");
                $("#eMailAddressInput").val("");
                $("#reviewInput").val("");
            }

            function closeReviews() {
                $(".review-body").remove();

                close();
            }

            function getDate() {
                var d = new Date();
                var y = d.getFullYear();
                var m = d.getMonth() + 1;
                var day = d.getDate();
                var full = y + "/" + m + "/" + day;
                return full;
            }
           
            function submitReview() {

                var Product = "#" + productNum;

                if (!$(Product).data("clicked")) {
                    $(Product).data("clicked", "true");

                    $(Product).find(".persanal-reviews").remove();

                    var now = getDate();
                    window["date" + productNum] = now;                    

                    $.getJSON("json(V3-Ang).json", function (allProducts) {
                        showLoader();
                        $(Product)
                            .append($("<p>").addClass("reviewed")
                                .append($("<text>").text("You wrote a "))
                                .append($("<button>").addClass("edit-review-button review-button").text("review"))
                                .append($("<text>").addClass("timeStamp").text(" on " + now)));
                        hideLoader();
                    })
                        .catch(function () {
                            alert("We can not accept your review at this time. Please contact Grade A Store");
                            hideLoader();
                        })
                        .then(function () {
                            var newReviewNumber = parseInt($(Product).find(".reviewsNumber").text()) + 1;
                            $(Product).find(".reviewsNumber").text(newReviewNumber);

                            var newReviewPlural;
                            if (newReviewNumber == 1) {
                                newReviewPlural = " Review"
                                $(Product).find(".no-reviews").remove();
                                $(Product).find(".review").addClass("review-button").removeClass("review-div");
                            }
                            else {
                                newReviewPlural = " Reviews"
                            }

                            $(Product).find(".checkP").text(newReviewPlural);
                        })
                        .then(function () {
                            $(".edit-review-button").on("click", function (e) {
                                var editReviews = $(this);

                                productNum = editReviews.closest("div").attr("id");

                                $("#nameInput").val(window['name' + productNum]);
                                $("#eMailAddressInput").val(window["email" + productNum]);
                                $("#reviewInput").val(window["review" + productNum]);

                                $("#pop-up").removeClass("invisible");
                                $("#my-review").removeClass("invisible");
                                $("#write").addClass("invisible");
                                $("#edit").removeClass("invisible");
                            });
                        })
                }
                else {

                    var now = getDate();
                    window["date" + productNum] = now;

                    $(Product).find($(".timeStamp").text(" on " + now));
                }

                window["name" + productNum] = $("#nameInput").val();
                window["email" + productNum] = $("#eMailAddressInput").val();
                window["review" + productNum] = $("#reviewInput").val();

                close();
            }

            $(".review").on("click", function reviews() {
                var reviews = $(this);

                $.getJSON("json(V3-Ang).json", function (allProducts) {
                    showLoader();
                    productNum = reviews.closest("div").attr("id");

                    var printReviews = allProducts[productNum - 1];
                    for (var i = 0; i < printReviews.reviews.length; i++) {
                        $("#general-review").append($("<div>").addClass("review-pop-up review-body")
                            .append($("<div>").addClass("review-body-header flex")
                                .append($("<div>").text(printReviews.reviews[i].name).addClass("bold"))
                                .append($("<div>").text(printReviews.reviews[i].date).addClass("italiacs")))
                            .append($("<div>").addClass("review-body-body flex ")
                                .append($("<div>").text(printReviews.reviews[i].review).addClass("review-body-comment"))));
                    }
                    hideLoader();
                })
                    .catch(function () {
                        alert("Product reviews are not available at this time. Please contact Grade A Store.");
                        hideLoader();
                    })
                    .then(function () {

                        if (window["name" + productNum] != null) {
                            $("#general-review").append($("<div>").addClass("review-pop-up review-body")
                                .append($("<div>").addClass("review-body-header flex")
                                    .append($("<div>").text(window["name" + productNum]).addClass("bold"))
                                    .append($("<div>").text(window["date" + productNum]).addClass("italiacs")))
                                .append($("<div>").addClass("review-body-body flex ")
                                    .append($("<div>").text(window["review" + productNum]).addClass("review-body-comment"))));
                        }

                    })

                $("#pop-up").removeClass("invisible");
                $("#general-review").removeClass("invisible");
            });

            $(".fa-star").on("click", function Stars(e) {
                var Star = $(this);
                Star.addClass("fas");
                Star.nextAll().removeClass("fas");
                Star.prevAll().addClass("fas");
            });

            $(".persanal-reviews").on("click", function (e) {
                var myReviews = $(this);

                productNum = myReviews.closest("div").attr("id");

                $("#pop-up").removeClass("invisible");
                $("#my-review").removeClass("invisible");
                $("#write").removeClass("invisible");
                $("#edit").addClass("invisible");
            });

            $("#close").on("click", close);
            $("#close-reviews").on("click", closeReviews);
            $("#submitReview").on("click", submitReview);
        })
})