$(document).ready(function(){
    if($(window).width()<956 && $(window).width()>767 ){
        var tabletImage = $('.hero-image').attr('data-tabimage');
        if(tabletImage)
            $('.heroImage img').attr('src',tabletImage);
    }
    if($(window).width()<768){
        var mobileImage = $('.hero-image').attr('data-mobileimage');
        if(mobileImage)
            $('.heroImage img').attr('src',mobileImage);
    }
});