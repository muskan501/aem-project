$( document ).ready(function() {

  $(".cmp-carousel__action--previous .cmp-carousel__action-text").remove();

  $(".cmp-carousel__action--previous").append('<svg width="12px" height="16px" viewBox="0 0 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Path</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Home-Page" transform="translate(-1231.000000, -2659.000000)" fill="#47D7AC" fill-rule="nonzero"><g id="Group-7" transform="translate(130.000000, 2639.000000)"><g id="Group-5" transform="translate(1080.000000, 0.000000)"><g id="left-arrow" transform="translate(21.250000, 20.000000)"><path d="M2.45880571,5.00211382 L7.11819791,1.26097561 C7.24649473,1.15821138 7.31707317,1.02081301 7.31707317,0.874308943 C7.31707317,0.727723577 7.24649473,0.590406504 7.11819791,0.487479675 L6.70991631,0.159837398 C6.58182201,0.0567479675 6.41059082,0 6.22811973,0 C6.04564864,0 5.87461996,0.0567479675 5.7464244,0.159837398 L0.198675454,4.61398374 C0.0699735915,4.71723577 -0.000503588684,4.85520325 0,5.00186992 C-0.000503588684,5.14918699 0.0698723312,5.28699187 0.198675454,5.3903252 L5.74126013,9.8401626 C5.86945569,9.94325203 6.04048436,10 6.22305671,10 C6.4055278,10 6.57655648,9.94325203 6.7048533,9.8401626 L7.11303363,9.51252033 C7.37863944,9.29926829 7.37863944,8.95211382 7.11303363,8.73894309 L2.45880571,5.00211382 Z" id="Path"></path></g></g></g></g></g></svg>');

  $(".cmp-carousel__action--next .cmp-carousel__action-text").remove();

  $(".cmp-carousel__action--next").append('<svg width="12px" height="16px" viewBox="0 0 8 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>Path</title><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Home-Page" transform="translate(-1281.000000, -2659.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="Group-7" transform="translate(130.000000, 2639.000000)"><g id="Group-6" transform="translate(1130.000000, 0.000000)"><g id="left-arrow" transform="translate(21.250000, 20.000000)"><path d="M2.45880571,5.00211382 L7.11819791,1.26097561 C7.24649473,1.15821138 7.31707317,1.02081301 7.31707317,0.874308943 C7.31707317,0.727723577 7.24649473,0.590406504 7.11819791,0.487479675 L6.70991631,0.159837398 C6.58182201,0.0567479675 6.41059082,0 6.22811973,0 C6.04564864,0 5.87461996,0.0567479675 5.7464244,0.159837398 L0.198675454,4.61398374 C0.0699735915,4.71723577 -0.000503588684,4.85520325 0,5.00186992 C-0.000503588684,5.14918699 0.0698723312,5.28699187 0.198675454,5.3903252 L5.74126013,9.8401626 C5.86945569,9.94325203 6.04048436,10 6.22305671,10 C6.4055278,10 6.57655648,9.94325203 6.7048533,9.8401626 L7.11303363,9.51252033 C7.37863944,9.29926829 7.37863944,8.95211382 7.11303363,8.73894309 L2.45880571,5.00211382 Z" id="Path" transform="translate(3.658537, 5.000000) scale(-1, 1) translate(-3.658537, -5.000000) "></path></g></g></g></g></g></svg>');
    

  $(".cmp-carousel__action--previous").click(function(){   
    plusSlides(-1);
  });
  $(".cmp-carousel__action--next").click(function(){   
    plusSlides(1);
  });
  
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("cmp-carousel__item");
   
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
  
    slides[slideIndex-1].style.display = "block";  
   
  }

});