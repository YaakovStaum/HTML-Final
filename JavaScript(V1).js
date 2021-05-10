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

function close() {
    document.querySelector("#pop-up").classList.add("invisible");
    document.querySelector("#my-review").classList.add("invisible");
    document.querySelector("#general-review").classList.add("invisible");
}

function closeReviews() {
    for (var i = 0; i < 6; i++) {
        var a = i + 1;
        var show = "#reviewer" + a;
        document.querySelector(show).classList.add("invisible");
    }
    close();
}

function submitReview() {

    var Product = "#product" + productNum;
    document.querySelector(Product).querySelector("#write-review").classList.add("invisible");
    document.querySelector(Product).querySelector("#reviewed").classList.remove("invisible");

    window["name" + productNum] = document.querySelector("[name=name]").value;
    document.querySelector("[name=name]").value = "";
    window["email" + productNum] = document.querySelector("[name=eMailAddress]").value;
    document.querySelector("[name=eMailAddress]").value = "";
    window["review" + productNum] = document.querySelector("[name=review]").value;
    document.querySelector("[name=review]").value = "";

    close();
};

window.addEventListener("load", function myReview() {
    var myReviews = document.querySelectorAll("#write-review");
    for (var i = 0; i < myReviews.length; i++) {
        myReviews[i].addEventListener("click", function (e) {
            var productNumString = e.target.closest("div").id;
            productNum = parseInt(productNumString.match(/[0-9]+/gi));

            document.querySelector("#pop-up").classList.remove("invisible");
            document.querySelector("#my-review").classList.remove("invisible");
            document.querySelector("#write").classList.remove("invisible");
            document.querySelector("#edit").classList.add("invisible");
        });
    }

    var editReview = document.querySelectorAll("#edit-review-button");
    for (var i = 0; i < editReview.length; i++) {
        editReview[i].addEventListener("click", function (e) {
            var productNumString = e.target.closest("div").id;
            productNum = parseInt(productNumString.match(/[0-9]+/gi));

            document.querySelector("[name=name]").value = window['name' + productNum];
            document.querySelector("[name=eMailAddress]").value = window["email" + productNum]
            document.querySelector("[name=review]").value = window["review" + productNum]

            document.querySelector("#pop-up").classList.remove("invisible");
            document.querySelector("#my-review").classList.remove("invisible");
            document.querySelector("#write").classList.add("invisible");
            document.querySelector("#edit").classList.remove("invisible");
        });
    }
});

window.addEventListener("load", function stars() {
    var oneStars = document.querySelectorAll("#star1");
    for (var i = 0; i < oneStars.length; i++) {
        oneStars[i].addEventListener("click", function oneStar(e) {
            e.target.classList.add("fas");
            e.target.closest(".stars").querySelector("#star2").classList.remove("fas");
            e.target.closest(".stars").querySelector("#star3").classList.remove("fas");
            e.target.closest(".stars").querySelector("#star4").classList.remove("fas");
            e.target.closest(".stars").querySelector("#star5").classList.remove("fas");
        });
    }

    var twoStars = document.querySelectorAll("#star2");
    for (var i = 0; i < twoStars.length; i++) {
        twoStars[i].addEventListener("click", function twoStar(e) {
            e.target.closest(".stars").querySelector("#star1").classList.add("fas");
            e.target.classList.add("fas");
            e.target.closest(".stars").querySelector("#star3").classList.remove("fas");
            e.target.closest(".stars").querySelector("#star4").classList.remove("fas");
            e.target.closest(".stars").querySelector("#star5").classList.remove("fas");
        });
    }

    var threeStars = document.querySelectorAll('#star3');
    for (var i = 0; i < threeStars.length; i++) {
        threeStars[i].addEventListener("click", function (e) {
            e.target.closest(".stars").querySelector("#star1").classList.add("fas");
            e.target.closest(".stars").querySelector("#star2").classList.add("fas");
            e.target.classList.add("fas");
            e.target.closest(".stars").querySelector("#star4").classList.remove("fas");
            e.target.closest(".stars").querySelector("#star5").classList.remove("fas");
        });
    }

    var fourStars = document.querySelectorAll("#star4");
    for (var i = 0; i < fourStars.length; i++) {
        fourStars[i].addEventListener("click", function fourStar(e) {
            e.target.closest(".stars").querySelector("#star1").classList.add("fas");
            e.target.closest(".stars").querySelector("#star2").classList.add("fas");
            e.target.closest(".stars").querySelector("#star3").classList.add("fas");
            e.target.classList.add("fas");
            e.target.closest(".stars").querySelector("#star5").classList.remove("fas");
        });
    }

    var fiveStars = document.querySelectorAll("#star5");
    for (var i = 0; i < fiveStars.length; i++) {
        fiveStars[i].addEventListener("click", function fiveStar(e) {
            e.target.closest(".stars").querySelector("#star1").classList.add("fas");
            e.target.closest(".stars").querySelector("#star2").classList.add("fas");
            e.target.closest(".stars").querySelector("#star3").classList.add("fas");
            e.target.closest(".stars").querySelector("#star4").classList.add("fas");
            e.target.classList.add("fas");
        });
    }
});

window.addEventListener("load", function reviews() {
    var reviews = document.querySelectorAll("#review");
    for (var i = 0; i < reviews.length; i++) {
        reviews[i].addEventListener("click", function (e) {
            document.querySelector("#pop-up").classList.remove("invisible");
            document.querySelector("#general-review").classList.remove("invisible");
            var howMany = parseInt(e.target.innerText);
            for (var i = 0; i < howMany; i++) {
                var a = i + 1;
                var show = "#reviewer" + a;
                document.querySelector(show).classList.remove("invisible");
            }
        });
    }
});


window.addEventListener("load", function () {
    document.querySelector("#close").addEventListener("click", close);
    document.querySelector("#close-reviews").addEventListener("click", closeReviews);
    document.querySelector("#submitReview").addEventListener("click", submitReview);
});