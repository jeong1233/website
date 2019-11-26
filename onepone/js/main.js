$(document).ready(function(){
    $(".panelBg").hide();
    $(".panel").click(function(){
        $(".panelMenu").css("width","70%");
        $(".panelBg").show();
    })
	$(".fa-times-circle").click(function(){
			$(".panelMenu").css("width", "0");
			$(".panelBg").hide();
	})
	$(".panelBg").click(function(){
			$(".panelMenu").css("width", "0");
			$(".panelBg").hide();
	})
})
