
$( document ).ready(function() {
    $(".rel-level1").hover(function(){
        $(this).children("ul").css("display","block");
        }, function(){
            $(this).children("ul").css("display","none");
      });
});