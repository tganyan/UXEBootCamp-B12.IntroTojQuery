    // Make grandpa appear and disappear
    $(".show-grandpa").click(function(){
      $("#grandpa").toggle(0, function(){
        if($("#grandpa").is(':visible')){
            // Strike through text of link
            $(".show-grandpa").css("text-decoration", "line-through");
        } else {
            // unstrike text of link
            $(".show-grandpa").css("text-decoration", "none");
        }
      });
    });
    // Same
    $(".show-dad").click(function(){
      $("#dad").toggle(0, function(){
        if($("#dad").is(':visible')){
            $(".show-dad").css("text-decoration", "line-through");
        } else {
            $(".show-dad").css("text-decoration", "none");
        }
      });
    });
    // Same
    $(".show-daughter").click(function(){
      $("#daughter").toggle(0, function(){
        if($("#daughter").is(':visible')){
            $(".show-daughter").css("text-decoration", "line-through");
        } else {
            $(".show-daughter").css("text-decoration", "none");
        }
      });
    });

// main function to make div element fade in and fade out
function dazzleCool(){
    var xyz = $(this);
    // Grab the string from data-button to return an id selector for block element
    var buttonData = $(this).data('button');
    var divTarget = $("#" + buttonData);
    // Get the child block element from parent element
    var targetObject = divTarget.children("div");
    // Fade magic happens
    targetObject.fadeToggle(1000, function(){
        if(targetObject.is(':visible')){
            xyz.css("text-decoration", "line-through");
            // Retrieve name string from block element's data-name attribute
            alert("Welcome back, " + targetObject.data("name"));
        } else {
            xyz.css("text-decoration", "none");
            // Retrieve name string from block element's data-name attribute
            alert("Goodbye to " + targetObject.data("name"));
        }
    });
}

var divGrandma = $("#great-grandma");

//$(".great-grandma-button").on('click', dazzleCool(divGrandma));
$(".great-grandma-button").click(dazzleCool);

// Panel slider. Selecting button with class "btn-slide" and applying function that toggles slide animation and activates "active" class on #panel.

$(".btn-slide").click(function(){
    $("#panel").slideToggle("slow");
    $(this).toggleClass("active");
    });
