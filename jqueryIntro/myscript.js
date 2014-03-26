    $(".show-grandpa").click(function(){
      $("#grandpa").toggle();
    });
    $(".show-dad").click(function(){
      $("#dad").toggle();
    });
    $(".show-daughter").click(function(){
      $("#daughter").toggle();
    });
    $('.button').click(function() {
      $('#great-grandma').find('h1').toggle(1000, function() {
        alert("Grandma's Gone!");
      });
    });
