$(document).ready(function(){
	$(".brand-less").click(function(){
		$(".brand-list .brand-item1 ").slideToggle("slow");
		$(".brand-more").css("display","none"?"inline":"none");
		$(".brand-less").css("display","inline"?"none":"inline");
		//$(this).text($(this).text()=="收起"?"收起":"更多品牌");
		
	  });
	$(".brand-more").click(function(){
		$(".brand-list .brand-item1 ").slideToggle("slow");
		$(".brand-more").css("display","inline"?"none":"inline");
		$(".brand-less").css("display","none"?"inline":"none");
	  });
	
});