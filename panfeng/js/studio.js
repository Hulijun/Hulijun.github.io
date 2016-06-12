//body
$(document).ready(function () {
            var isMenuOpen = false;

            $('.menu_btn').click(function () {
                if (isMenuOpen == false) {
                    $("#menu_smartphone").clearQueue().animate({
                        left: '0px'
                    })
                    $("#grey_back").fadeIn('fast');
                    $(this).fadeOut(200);
                    $(".close").fadeIn(300);

                    isMenuOpen = true;
                }
            });
            $('#grey_back').click(function () {
                if (isMenuOpen == true) {
                    $("#menu_smartphone").clearQueue().animate({
                        left: '-570px'
                    })
                    $("#page").clearQueue().animate({
                        "margin-left": '0px'
                    })
                    $("#grey_back").fadeOut('fast');
                    $(this).fadeOut(200);
                    $(".menu_btn").fadeIn(300);

                    isMenuOpen = false;
                }
            });
        });

//tab
$('#jy-stdio li').click(function(){
	//1.点击li时切换样式
	//$(this).addClass('current').siblings().removeClass('current');
	//2.根据li的索引值来确定哪个div显示,其他div隐藏
	$('#grey_back>div').eq($(this).index()).show().siblings().hide();
});