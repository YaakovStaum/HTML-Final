var productNum = 0;

var name1 = null;
var email1 = null;
var review1 = null;
var name2 = null;
var email2 = null;
var review2 = null;
var name3 = null;
var email3 = null;
var review3 = null;
var name4 = null;
var email4 = null;
var review4 = null;
var name5 = null;
var email5 = null;
var review5 = null;
var name6 = null;
var email6 = null;
var review6 = null;
var name7 = null;
var email7 = null;
var review7 = null;
var name8 = null;
var email8 = null;
var review8 = null;


function getDate() {
    var d = new Date();
    var y = d.getFullYear();
    var m = d.getMonth() + 1;
    var day = d.getDate();
    var full = y + "/" + m + "/" + day;
    return full;
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
    for (var i = 0; i < 6; i++) {
        var a = i + 1;
        var show = "#reviewer" + a;
        $(show).addClass("invisible");
    }
    close();
}

function submitReview() {

    var Product = "#product" + productNum;
    $(Product).find("#write-review").addClass("invisible");
    $(Product).find("#reviewed").removeClass("invisible");    

    window["name" + productNum] = $("#nameInput").val();
    window["email" + productNum] = $("#eMailAddressInput").val();
    window["review" + productNum] = $("#reviewInput").val();
    var now = getDate();
    $(Product).find("#date").text(now);

    close();
}

$(document).ready(function myReview() {
    $(".persanal-reviews").on("click", function (e) {
        var myReviews = $(this);

        var productNumString = myReviews.closest("div").attr("id");
        productNum = parseInt(productNumString.match(/[0-9]+/gi));

        $("#pop-up").removeClass("invisible");
        $("#my-review").removeClass("invisible");
        $("#write").removeClass("invisible");
        $("#edit").addClass("invisible");
    });

    $(".edit-review-button").on("click", function (e) {
        var editReviews = $(this);
        var productNumString = editReviews.closest("div").attr("id");
        productNum = parseInt(productNumString.match(/[0-9]+/gi));

        $("#nameInput").val(window['name' + productNum]);
        $("#eMailAddressInput").val(window["email" + productNum]);
        $("#reviewInput").val(window["review" + productNum]);

        $("#pop-up").removeClass("invisible");
        $("#my-review").removeClass("invisible");
        $("#write").addClass("invisible");
        $("#edit").removeClass("invisible");
    });
});

$(document).ready(function stars() {
    $(".star1").on("click", function oneStars(e) {
        var oneStar = $(this);
        oneStar.addClass("fas");
        oneStar.nextAll().removeClass("fas");
    });

    $(".star2").on("click", function twoStars(e) {
        var twoStar = $(this);
        twoStar.addClass("fas");
        twoStar.nextAll().removeClass("fas");
        twoStar.prevAll().addClass("fas");
    });

    $(".star3").on("click", function threeStars(e) {
        var threeStar = $(this);
        threeStar.addClass("fas");
        threeStar.nextAll().removeClass("fas");
        threeStar.prevAll().addClass("fas");
    });

    $(".star4").on("click", function fourStars(e) {
        var fourStar = $(this);
        fourStar.addClass("fas");
        fourStar.nextAll().removeClass("fas");
        fourStar.prevAll().addClass("fas");
    });

    $(".star5").on("click", function fiveStars(e) {
        var fiveStar = $(this);
        fiveStar.addClass("fas");
        fiveStar.nextAll().removeClass("fas");
        fiveStar.prevAll().addClass("fas");
    });
});

$(document).ready(function reviews() {
    $(".review").on("click", function (e) {
        var reviews = $(this);
        $("#pop-up").removeClass("invisible");
        $("#general-review").removeClass("invisible");

        var howMany = parseInt(reviews.text());
        for (var i = 0; i < howMany; i++) {
            var a = i + 1;
            var show = "#reviewer" + a;
            $(show).removeClass("invisible");
        }
    });    
});

$(document).ready(function () {
    $("#close").on("click", close);
    $("#close-reviews").on("click", closeReviews);
    $("#submitReview").on("click", submitReview);
})