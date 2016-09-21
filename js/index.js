$(function(){

	$(".hander >ul li").hover(function(){		
		 $(".hander >ul li").removeClass("active")
		 $(this).toggleClass("active");
		 $(".hander >ul li a").removeClass("acolor");
		 $(this).find("a").addClass("acolor");
	})
	$("#div-Top dl dt").mouseover(function(ev){
		ev.stopPropagation();
		$("#div-Top dl dd img").stop(true,true);
		$("#div-Top dl dt div").stop(true,true);
		$(this).find("div").animate({
			'top': '-50px'	
		},500)
		var hClass = $(this).hasClass("weixin");
		if (hClass) {
			$(this).prev("dd").find("img").fadeIn(1000);
		}
	})
	$("#div-Top dl dt").mouseout(function(ev){		
		ev.stopPropagation();
		$("#div-Top dl dd img").stop(true,true);
		$("#div-Top dl dt div").stop(true,true);
		$(this).find("div").animate({
			'top': '0px'	
		},500)
		
		$(this).prevAll("dd").find("img").fadeOut(1000);		
	})
	//返回顶部
//	 $(window).scroll(function() {
//				if ($(window).scrollTop() > 100) {
//					$("#div-Top .to_top").fadeIn(1500);//淡入淡出显示
//				} else {
//					$("#div-Top .to_top").fadeOut(1500);//淡入淡出隐藏
//				}
//	 });
	 //点击回到顶部
	 $("#div-Top .to_top").click(function() {
				$('body,html').animate({
					scrollTop: 0
				}, 500);
				return false;
	 });
	 
})
