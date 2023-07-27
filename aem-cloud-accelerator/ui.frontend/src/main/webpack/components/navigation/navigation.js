$(".searchDisplayClick").click(function(){
	$(".searchResult").show();
    $(".searchResult").css("width","620px");
    $(".searchdisplay").show();
    $(".navigationComponent").hide();
    $("#search-text").focus();

});

$(".closeSearch").click(function(){               
		$(".searchResult").css("width","0px");
        $(".searchdisplay").hide();
        $(".navigationComponent").show();

    });

