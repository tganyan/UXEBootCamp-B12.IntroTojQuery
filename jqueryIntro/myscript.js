    $(".show-grandpa").click(function(){
      $("#grandpa").toggle();
    });
    $(".show-dad").click(function(){
      $("#dad").toggle();
    });
    $(".show-daughter").click(function(){
      $("#daughter").toggle();
    });
    // $(".great-grandma-button").click(function(){
    //   $("#great-grandma").find("h1").toggle();
    //   alert("Grandma's Gone!");
    // });


    $(".great-grandma-button").on('click', function() {
        var h1 = $("#great-grandma").find("h1");
        h1.toggle();
        if (h1.is(':visible')) {
            alert("Grandma's back from the dead... KILL THE ZOMBIE!!!");
        } else {
            $(h1).css("color", "green")
            alert("Grandma's Gone!!");
        }
    });


