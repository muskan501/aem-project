$( document ).ready(function() {

	$(".closeSearch").click(function(){               
        $(".searchdisplay").hide();
    });

    $("#search-text").keyup(function(){
      var searchTerm = $("#search-text").val();
      if(searchTerm == ''){
        $("#search-text").append("<div>Please enter some text.</div>")
        document.querySelector("#resultList").innerHTML = "";
        $(".sugesstion-item").remove();			
    	}
        else{            
            var selector = document.querySelector(".servletData");
            var searchPath ;
            if(selector.getAttribute("data1")!=null)
            {
                searchPath= selector.getAttribute("data1").replaceAll('\\', '').replaceAll('u002D', '-');
            }
            
            var resultsSize = selector.getAttribute("data2");          

        $.get(
        "/bin/servlet/searchResultServlet",
        {
           		searchTerm : searchTerm,
                searchPath : searchPath,
                resultsSize : resultsSize
        },
        function(data,status) {
            successFn(data);
        	}
    	);

        function successFn(response) {        
        	var data=response;           
            let resultData = Object.keys(data);                
            let p='';
            if(resultData.length != 0) {                        
                resultData.forEach(function(key) {
                    p += "<div class='sugesstion-item tt-suggestion tt-selectable'><a href = "+data[key]+">"+key+"</div>";                         
                })
            }

            document.querySelector("#resultList").innerHTML=p;
    	}      
    }

    });   
});