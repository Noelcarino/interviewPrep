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
$(document).ready(function(){

    $("#js-button").on("click", function(){
        for (var i = 0; i < jsQuestions.length; i++){
            $("#js-questions")
                .append("<li id=\"questions\" class=\"js-questions\">" + jsQuestions[i] + "</li>");
        }
        $("#js-button").addClass("hidden");
    })

})
