var kensaku; var i;

function search2(){

	document.getElementById("output").style.display = "block";
	kensaku = document.getElementById("text").value;
	
	alert(kensaku);
	
	$("#output").empty();
	if(kensaku == ""){
		}else{
    			todou();
    }
}

function todou(){
	$(document).ready(function () {
   		$.getJSON("https://raw.githubusercontent.com/linkevery2s/blog/master/index.json", function(data){
        	for(var i in data){
        	
        		alert(data[i].content.indexOf(kensaku));
        		
        		if(data[i].content.indexOf(kensaku) != -1) {
        		$("#output").append("<li class='lin'><a href='" + data[i].url + "'>" + data[i].title + "</a><div class='setu'>" + data[i].content + "</div></li>");
        		}
        	}
    	});
	});
}