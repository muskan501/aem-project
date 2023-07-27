$(document).ready(function() {    
    
    $('.clickImpl').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true
      });

    $(".slick-prev").hide();
    $(".slick-next").hide();

    function widthProgressBarPlus(progressBarElement) {        
		var width=parseFloat(progressBarElement.attr("style").split(":")[1])
        if (width < 100) {
            var newWidth = width + 25 + "%";
            progressBarElement.attr("style",'width: '+newWidth);
        } else {
            progressBarElement.attr("style",'width: 0%');
        }
    }

    function widthProgressBarMinus(progressBarElement) {
        var width=parseFloat(progressBarElement.attr("style").split(":")[1])
		if (width > 0) {
            var newWidth = width - 25 + "%";
            progressBarElement.attr("style",'width: '+newWidth);
        } else {
            progressBarElement.attr("style",'width: 100%');
        }
    }

    $(document).on("click", ".prevSquare", function() {        
        $(this).parent().parent().parent().children().eq(1).find('.slick-prev').click();  
        var progressBarElement=$(this).parent().parent().children().eq(0).children();
        widthProgressBarMinus(progressBarElement);

    }); 

    $(document).on("click", ".nextSquare", function() {
        $(this).parent().parent().parent().children().eq(1).find(".slick-next").click()
        var progressBarElement=$(this).parent().parent().children().eq(0).children();
        widthProgressBarPlus(progressBarElement);

    });

     $(document).on("click", ".prev", function() {        
        $(this).parent().parent().parent().children().find('.slick-prev').click()
        var progressBarElement=$(this).parent().parent().children().eq(0).children();
        widthProgressBarMinus(progressBarElement);

    }); 

     $(document).on("click", ".next", function() {
        $(this).parent().parent().parent().children().find('.slick-next').click()
        var progressBarElement=$(this).parent().parent().children().eq(0).children();
        widthProgressBarPlus(progressBarElement);

    });

    $(".image-render-top").hover(function() {
        var imagePath = $(this).attr("image-render");
        $(".image-render-background").css("background-image", "url(" + imagePath + ")");
    });

    $(".image-render-bottom").hover(function() {
        var imagePath = $(this).attr("image-render");
        $(".image-render-background").css("background-image", "url(" + imagePath + ")");
    });

});