$( document ).ready(function() {

    var customMessage=document.querySelector(".custom-message");
    var validationMessage=customMessage.getAttribute("data-element-validation");



	var counterForInvalidEmail=0;   
    $(document).on("click","[class='form-button']",function(){
		 if($("#emailValue").val().length==0){
            	$("#emailValue").parent().eq(0).append('<span class="validateField">Is required</span>');
                $(".form-button").prop('disabled',true);
            }
    })

    $(document).on("input","[id='emailValue']",function(){
        if(!isEmail($("#emailValue").val()) && counterForInvalidEmail<1){
			$(".validateField").remove();
			$("#emailValue").parent().eq(0).append('<span>'+validationMessage+'</span>');
            $(".form-button").prop('disabled',true);
            counterForInvalidEmail++;
        }
        if($("#emailValue").val().length==0 || isEmail($("#emailValue").val())){           
			var field=$("#emailValue").parent().find('span');
            field.remove();
            $(".form-button").prop('disabled',false);
            counterForInvalidEmail=0;
           /* if($("#emailValue").val().length==0){
            	$("#emailValue").parent().eq(0).append('<span class="validateField">Is required</span>');
                $(".form-button").prop('disabled',true);
            }*/
        }

    });
    function isEmail(email) {
  		var EmailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 	 	return EmailRegex.test(email);
	}
});