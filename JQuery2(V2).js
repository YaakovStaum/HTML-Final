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

var productReviews = [
    {
        sectionName: "Product 1",
        reviews: [
            { name: "Talkas Cheap", date: "02 / 04 / 2020", review: "Blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah!" },
            { name: "Robya Blind", date: "22/06/2020", review: "It's good, but not worth the price!" },
            { name: "Coulda Ben", date: "16/09/2020", review: "So I ate it, wanna make something of it???" }
        ]
    },
    {
        sectionName: "Product 2",
        reviews: [
            { name: "Billy Neder", date: "02 / 04 / 2020", review: "Blah blah blah blah blah blah blah blah blah. Blah blah blah blah blah blah. Blah blah!" },
            { name: "Sheli Brown", date: "22/06/2020", review: "Buzz buzz buzz buzz buzz buzz buzzbuzz. Buzz buzzbuzzbuzzbuzzbuzzbuzzbuzz!" },
            { name: "Nafka Mina", date: "16/09/2020", review: "mah nishtana halayla hazeh, mikol halylos?" },
            { name: "Yaakov Yisrael", date: "02 / 04 / 2020", review: "Let's burn something. Pas and shosekim!" },
            { name: "Compu Skills", date: "21 / 12 / 2020", review: "C# ASP.NET MVC Jquery SureYnot." },
            { name: "Charli Brown", date: "16/09/2020", review: "Don't move the ball for once! Oh, you are so immature!" }
        ]
    },
    {
        sectionName: "Product 3",
        reviews: [
            { name: "Ernie Muppet", date: "16 / 03 / 2020", review: "Oh, Rubber Ducky, you're the one! You make bath time so much fun!"},
            { name: "Bert Muppet", date: "16 / 03 / 2020", review: "Get out already. Other people wanna take a shower here too!!!!"}
        ]
    },
    {
        sectionName: "Product 4",
        reviews: [
            { name: "Lorem Ipsum", date: "01 / 01 / 1960", review:"dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
        ]
    },
    {
        sectionName: "Product 5",
        reviews: [
            { name: "Charli Horse", date: "05/ 05 / 2005", review: "Yabba Dabba Doooooooooooooooo!" },
            { name: "Lamb Chop", date: "05/ 05 / 2005", review: "No silly, we don't say that. That's The Flinestones!" },
            { name: "Hush Puppy", date: "05/ 05 / 2005", review: "Ok, Lamb Chop. Here go's: That's The Flinestones!" }
        ]
    },
    {
        sectionName: "Product 6",
        reviews: [
            { name: "Overly Cautious", date: "06 / 09 / 2020", review: "There OK, I guess." },
            { name: "Clue Less", date: "06 / 09 / 2020", review: "Tastes good! I hear they are like, really heathy and good for you!" },
            { name: "Health Freak", date: "06 / 09 / 2020", review: "It's pure POISON!" }
        ]
    },
    {
        sectionName: "Product 7",
        reviews: [
            { name: "Bud Abbott", date: "06 / 12/ 1945", review: "You never know what your going to find in the can!" },
            { name: "Lou Costello", date: "06 / 12/ 1945", review: "CAN? I don't wanna find out who's in the can. I've never stole in my life!!!!" },
        ]
    },
    {
        sectionName: "Product 8",
        reviews: [
            { name: "Your Dad", date: "01 / 01 / 2021", review: "Huh, what?...Oh Okay, I guess...what's Okay?" },
            { name: "Your Mom", date: "01 / 01 / 2021", review: "Did you wipe if with a disinfectant first? You have to be careful. You don't know who touched it first!" },
            { name: "Your Bubby", date: "01 / 01 / 2021", review: "Don't worry about me. I have this can. It will keep me from starving, here all by myself. In the dark. With the cold, cold wind blowing in." },
            { name: "Your Doctor", date: "01 / 01 / 2021", review: "It is very good! But you can't have it!!!!" }
        ]
    }
]

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

    var Product = "#product" + productNum;
    $(Product).find("#write-review").addClass("invisible");
    $(Product).find("#reviewed").removeClass("invisible");
    var _addOneReview = $(Product).find("#review");
    var addOneReviewString = _addOneReview.text();
    var addOneReview = parseInt(addOneReviewString.match(/[0-9]+/gi));
    _addOneReview.text([addOneReview + 1] + " Reviews");

    window["name" + productNum] = $("#nameInput").val();
    window["email" + productNum] = $("#eMailAddressInput").val();
    window["review" + productNum] = $("#reviewInput").val();

    var now = getDate();
    $(Product).find("#date").text(now);
    window["date" + productNum] = now;

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
})

$(document).ready(function stars() {
    $(".fa-star").on("click", function Stars(e) {
        var Star = $(this);
        Star.addClass("fas");
        Star.nextAll().removeClass("fas");
        Star.prevAll().addClass("fas");
    });
})

$(document).ready(function reviews() {
    $(".review").on("click", function (e) {
        var reviews = $(this);

        var productNumString = reviews.closest("div").attr("id");
        productNum = parseInt(productNumString.match(/[0-9]+/gi));
        var sectionInArr = productNum - 1;
        var printSection = productReviews[sectionInArr];

        for (var i = 0; i < printSection.reviews.length; i++) {

            var headerHead = $("<div>").addClass("review-body-header flex")
                .append($("<div>").text(printSection.reviews[i].name).addClass("bold"))
                .append($("<div>").text(printSection.reviews[i].date).addClass("italiacs"));

            var commentWrapper = $("<div>").addClass("review-body-body flex ")
                .append($("<div>").text(printSection.reviews[i].review).addClass("review-body-comment"));            

            var fullReview = $("<div>").addClass("review-pop-up review-body");
            $(fullReview)
                .append(headerHead)
                .append(commentWrapper);

            $("#general-review").append(fullReview);
        }

        if (window["name" + productNum] != null) {
            var myNamediv = $("<div>").text(window["name" + productNum]);
            var myDateDiv = $("<div>").text(window["date" + productNum]);
            var myHeaderHead = $("<div>").addClass("review-body-header flex");
            $(myHeaderHead)
                .append(myNamediv)
                .append(myDateDiv);

            var myCommentDiv = $("<div>").text(window["review" + productNum]).addClass("review-body-comment");
            var myCommentWrapper = $("<div>").addClass("review-body-body flex ");
            $(myCommentWrapper).append(myCommentDiv);

            var myFullReview = $("<div>").addClass("review-pop-up review-body");
            $(myFullReview)
                .append(myHeaderHead)
                .append(myCommentWrapper);

            $("#general-review").append(myFullReview);
        }

        $("#pop-up").removeClass("invisible");
        $("#general-review").removeClass("invisible");
    });
})

$(document).ready(function () {
    $("#close").on("click", close);
    $("#close-reviews").on("click", closeReviews);
    $("#submitReview").on("click", submitReview);
})