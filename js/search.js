var kensaku; var i;

function search2(){
	document.getElementById("output").style.display = "block";
	kensaku = document.getElementById("text").value;
	$("#output").empty();
	if(kensaku == ""){
		}else{
    			todou();
    }
}

function todou(){
	$(document).ready(function () {
   		$.getJSON("https://dpnote.netlify.app/index.json", function(data){
        	for(var i in data){
        		if(data[i].Jusho.indexOf(kensaku) != -1) {
        		$("#output").append("<li class='lin'><a href='" + data[i].saigai + "'>" + data[i].Name + "</a><div class='setu'>" + data[i].Jusho + "</div></li>");
        		}
        	}
    	});
	});
}