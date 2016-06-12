// JavaScript Document
//子导航
$(function(){
	$(".nav li").hover(function(){
		$(".bg").stop().animate({height:74+$(this).children(".navbar").height()},300)
		$(this).children(".navbar").stop(false,true).slideDown(300);
		
		
	},function(){
		$(".bg").stop().animate({height:74},300)
		$(this).children(".navbar").stop(false,true).slideUp(300);	
	    
	})	   
})



//信息栏TAB 标签页
$('#viewlist1 li').click(function(){
	$(this).addClass('current').siblings().removeClass('current').parent().next().children().eq($(this).index()).show().siblings().hide();

});
$('#viewlist2 li').click(function(){
	$(this).addClass('current').siblings().removeClass('current').parent().next().children().eq($(this).index()).show().siblings().hide();

});

//nextarrow下拉页面
$(".nextarrow").click(function(){
        $("html,body").animate({scrollTop:$("#pf-two").offset().top-70},1000);
    });


//攀峰之家

$('#nav-stdio li').click(function(){
	$(this).addClass('nav-bg').siblings().removeClass('nav-bg').parent().parent().next().children().children().eq($(this).index()).show().siblings().hide();

});


//工作掠影小窗
$(function(){
	 $('.msg-panel').click(function(e) {
		$('#downfloor').fadeIn(400);
	 });
});
$(function(){
	  $('#downclose').click(function(e) {
		$('#downfloor').fadeOut(200);
	});
	 
});

//back
 /*$("body,html").animate({
    scrollTop: 0
  }, 1250, 'easeInOutQuint');
  e.preventDefault();
}*/
