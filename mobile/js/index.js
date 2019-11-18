$(document).ready(function(){
	$(".panelBg").hide();	   
	$(".panel").click(function(){
		$(".panelMenu").css("width", "70%");
		$(".panelBg").show();	
	})
	$(".closeBtn").click(function(){
		$(".panelMenu").css("width", "0");
		$(".panelBg").css("background", "none");
	})
})