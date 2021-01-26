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

function checkPlural() {

};

$(document).ready(function () {
    $.ajax({
        url: "json.json",
        dataType: "json"
    })
        .then(function (allProducts) {
            var limitRow = 0;
            var rowDiv = $("<div>").addClass("row height");

            for (var iproduct = 0; iproduct < allProducts.length; iproduct++) {
                var productJson = allProducts[iproduct];

                var ratings = productJson.ratings;
                var unrating = 5 - ratings;

                var pluralQ;
                if (productJson.ratings == 1) {
                    pluralQ = " Review"
                }
                else {
                    pluralQ = " Reviews"
                }

                var productDiv = $("<div>").addClass("col-lg-3 center border").attr("id", productJson.productId)
                    .append($("<div>").addClass("product")
                        .append($("<img>").attr({ src: productJson.image }))
                        .append($("<div>").addClass("stars")))
                    .append($("<p>").addClass("reviews")
                        .append($("<button>").addClass("review review-button")
                            .append($("<text>").text(productJson.ratings).addClass("reviewsNumber"))
                            .append($("<text>").text(pluralQ)).addClass("checkP")))
                    .append($("<button>").addClass("persanal-reviews").text("Write Review"))


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

                //if (clicked == false) {

                    $(Product).find(".persanal-reviews").remove();

                    var now = getDate();
                    window["date" + productNum] = now;

                    $(Product)
                        .append($("<p>").addClass("reviewed")
                            .append($("<text>").text("You wrote a "))
                            .append($("<button>").addClass("edit-review-button review-button").text("review"))
                            .append($("<text>").text(" on " + now)));
                    $(Product).find(".reviewsNumber").text(parseInt($(Product).find(".reviewsNumber").text()) + 1);
                    $(Product).find(".checkP").text(checkPlural());

                    //clicked = true;
                //}

                window["name" + productNum] = $("#nameInput").val();
                window["email" + productNum] = $("#eMailAddressInput").val();
                window["review" + productNum] = $("#reviewInput").val();

                close();

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
            }

            $(".review").on("click", function reviews() {
                var reviews = $(this);

                productNum = reviews.closest("div").attr("id");

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