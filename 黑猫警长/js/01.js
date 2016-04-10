// JavaScript Document
$(document).ready(function(){
  $("#spotlight a").click(function(){
    $("div.wall div").animate({opacity:'0.1'},3000);
	$("p").css({"color":"yellow","text-shadow":"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"});
  });
});

