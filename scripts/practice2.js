// Challenge 2: Toggle Visibility of an Image
// Objective: Hide or show an image when a button is clicked.

// Instructions:
// 1. Create an image and a button.
// Use jQuery to toggle the visibility of the image when the button is clicked (e.g., show the image if hidden, hide it if shown).
//1.a (click on the btn and hide the img)
// Hint: Use the toggle(), hide(), show() method for this challenge

$(document).ready(function(){


    $("#toggleBtn").on('click',function(){
        $("#myImg").toggle();
    });

    $(".answer").hide();

    $(".question").on('click',function(){
        $(".answer").slideToggle("slow");
    })

});