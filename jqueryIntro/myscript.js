    $(".show-grandpa").click(function(){
      $("#grandpa").toggle();
    });
    $(".show-dad").click(function(){
      $("#dad").toggle();
    });
    $(".show-daughter").click(function(){
      $("#daughter").toggle();
    });

    function toggleHide(targetObject) {
      var bIsHidden = targetObject.data('hidden');
      if(bIsHidden === "false"){
        targetObject.hide(1000, function() {
          alert("Grandma's Gone!");
          targetObject.data('hidden', 'true');
        });
      } else {
        targetObject.show(1000, function() {
          alert("Grandma Came Back From The Grave... KILL THE ZOMBIE!");
          targetObject.data('hidden', 'false');
        });
      }
    }
    $('.great-grandma-button').on('click', toggleHide(targetObject));
