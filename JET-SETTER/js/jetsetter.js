// JavaScript Document
/*����ƹ����Ұ�ť��ʾ*/
$(".jiaodian").hover(function(){
	$(this).find(".prev,.next").fadeTo("show",0.1);
},function(){
	$(this).find(".prev,.next").hide();
})
/*����ƹ�ĳ����ť ������ʾ*/
$(".prev,.next").hover(function(){
	$(this).fadeTo("show",0.7);
},function(){
	$(this).fadeTo("show",0.1);
})
$(".jiaodian").slide({ mainCell:".jsdaima" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });

//view��tab��ǩҳ
$("#viewlist li").click(function(){
	//1.���liʱ�л���ʽ
	//$(this).addClass('current').siblings().removeClass('current');
	//2.���li������ֵ��ȷ���ĸ�div��ʾ,����div����
	//$('#content>div').eq($(this).index()).show().siblings().hide();
	$(this).addClass('current').siblings().removeClass('current').parent().next().children().eq($(this).index()).show().siblings().hide();

});


//magazine
$(".magashow").slide({ titCell:".number ul" , mainCell:".magashow1" , effect:"fold", autoPlay:true, delayTime:700 , autoPage:true });
