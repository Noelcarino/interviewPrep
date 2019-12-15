var jsQuestions = [
    "What are JavaScript DataTypes?",
    "What is the difference between '==' and '==='?",
    "What are the two basic groups of datatypes in JavaScript?"
];
var jsAnswers = [
    "Number, String, Boolean, Object, Undefined",
    "'==' checks only for equality in value whereas '===' is stricter equality test and returns false if either the value or the type of the two variables are different",
    "Primitive & Reference Types"
];
var cssQuestions = [
    "What is CSS?",
    "How can you integrate CSS on a webpage?",
    "What are the advantages of CSS?"
];
var cssAnswers = [
    "CSS Stands for Cascading Style Sheet. It is a popular styling language which is used with HTML to design websites",
    "1. Inline Method, 2. Embedded/Internal Method, 3. Linked/Imported/External Method",
    "Bandwidth, Site-wide consistency, Page reformatting, Accessibility, Content separated from presentation"
];
function loadJSAnswer(param){
    $(".js-answers")
        .empty()
        .append(jsAnswers[param]);
}
function loadCSSAnswer(param){
    $(".js-answers")
        .empty()
        .append(cssAnswers[param]);
}

$(document).ready(function(){
    

    $("#js-button").on("click", function(){
        $("#js-questions").empty();
        $(".js-answers")
            .empty()
            .append("<h1>JS Answers</h1>");
        for (var i = 0; i < jsQuestions.length; i++){
            $("#js-questions")
                .append("<li id=\"questions\" class=\"js-questions\" onclick=\"loadJSAnswer("+i+")\">" + jsQuestions[i] + "</li>");
        }
        $("#js-button").addClass("hidden");
        $("#css-button").removeClass("hidden");
    })

    $("#css-button").on("click", function(){
        $("#js-questions").empty();
        $(".js-answers")
            .empty()
            .append("<h1>CSS Answers</h1>");
        for (var i = 0; i < cssQuestions.length; i++){
            $("#js-questions")
                .append("<li id=\"questions\" class=\"js-questions\" onclick=\"loadCSSAnswer("+i+")\">" + cssQuestions[i] + "</li>");
        }
        $("#css-button").addClass("hidden");
        $("#js-button").removeClass("hidden");
    })

})
