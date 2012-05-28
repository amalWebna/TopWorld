var headerID = 1;
for(i=0;i<8;i++){
	$("#t" + i).click(function() {	
		$(".active").toggleClass("active");
		$(this).toggleClass("active");
		var val = (this.id.substring(1,2)) * 1003;
		$("#tools").animate({"left": "-"+val+"px"}, "slow");
		headerID = (this.id.substring(1,2)*1) + 1;
	});
}
var myTimer = setInterval(headerScrolling,5000);
$("#tools").mouseover(function() {	
	clearTimeout(myTimer);
});

$("#tools").mouseout(function() {	
	myTimer = setInterval(headerScrolling,5000);
});

function headerScrolling(){
	if (headerID<=7){
		$(".active").toggleClass("active");
		$("#t" + headerID).toggleClass("active");
		var val = headerID * 1003;
		$("#tools").animate({"left": "-"+val+"px"}, "slow");
		headerID = headerID + 1;
	}
	if (headerID>=7){
		headerID = 0;
	}	
}