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
})

$(window).scroll(function(){
    var sc_top=$(this).scrollTop();
    
    if(sc_top>0){
        $(".logo, #header h1, .panel").addClass('headerTop');
    }else if(sc_top==0){
        $(".logo, #header h1, .panel").removeClass('headerTop');
    }
})

/*$(window).scroll(function(){
    var sc_top=$(this).scrollTop();
    
    if(sc_top>0){
        $("#header").css({
            "position":"fixed",
            "top":"0",
            "left":"0",
            "width":"100%"
        })
    }else if(sc_top==0){
        $("#header").css({
            "position":"static";
        })
    }
})*/