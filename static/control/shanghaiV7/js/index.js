$(document).ready(function() {
	//nav状态

	//默认全部隐藏
	$("#Max-conatiner").nextAll().hide();
	//鼠标向下滚动的时候
	$("#Max-conatiner").bind('mousewheel', function(event, delta) {    
	    if (delta =="-1") {//向下
	    	lastShow();
	    }  

	}); 
	//按钮触发的函数
  $(".box-btn >img").click(function(){
  	lastShow()
	  scrollTop_Top($(".mian-tf"));
  })
  $('#particles').particleground({
    dotColor: '#ccc',
    lineColor: '#dddddd',
    proximity:100,
    density:25000
//  size:1
  });
  //算好位置hander+内容部分
  var oH = $(window).height();
  var oHanderH = $(".handers").height();
  $("#particles").css("height",oH-oHanderH+'px').css("margin-top",oHanderH+'px');
 //自己封装的轮播图插件
 $("#pj-lunbo").Carousel({
					'play':'true', //是否循环播放
					'prevButton':'#prev', //左按钮
					'nextButton':'#next',  //右按钮
					'auto':'true',   //是否自动播放
					'play':'true' ,   //循环播放
					'WidthMax':'true' //全屏 
	});
	
////第二个轮播
// $(".pj-lunbo2").Carousel({
//					'play':'true', //是否循环播放
//					'prevButton':'#prev', //左按钮
//					'nextButton':'#next',  //右按钮
//					'auto':'true',   //是否自动播放
//					'play':'true' ,   //循环播放
//					'WidthMax':'true' //全屏 
//	});
//第3个轮播()
 $(".pub-div-boxs").Carousel({
					'play':'true', //是否循环播放
					'prevButton':'.page-left', //左按钮
					'nextButton':'.page-right',  //右按钮
//					'auto':'true',   //是否自动播放
					'play':'true'   //循环播放
	});
//第4个轮播
 $(".pub-div-Friend").Carousel({
					'play':'true', //是否循环播放
					'prevButton':'.page-prev', //左按钮
					'nextButton':'.page-next',  //右按钮
					'play':'true'   //循环播放
	});

	//让轮播图上下居中 
  $(".pj-Carousel-bu").css("margin-top",((oH-oHanderH)-$(".pj-Carousel").height())/2+'px')
  $(".topN").hover(function(){
  	$(this).toggleClass("topN");
  })
  
  //左右按钮显示逻辑
  //$("#pj-lunbo >p").mouseover(function(){
//  	$(this).find("a").stop(false,false)
//  	$(this).find("a").fadeIn()
//  })
//  $("#pj-lunbo >p").mouseout(function(){
//  	$(this).find("a").stop(false,false)
//  	$(this).find("a").fadeOut()
//  })
  $("#pj-lunbo").mouseover(function(){
  	$(this).find("a").stop(false,false)
  	$(this).find("a").fadeIn()
  })
  $("#pj-lunbo").mouseout(function(){
  	$(this).find("a").stop(false,false)
  	$(this).find("a").fadeOut()
  })
	//移动鼠标替换图片
	$(".yewu-box >ul >li div >img").mouseover(function(){
		  $(this).attr("thisSrc",$(this).attr("src"));
			var ThisSrc = $(this).attr("src");
			var ost = ThisSrc.substr(0,ThisSrc.indexOf("."))+'_hover.png';
			$(this).attr("src",ost);
	})
	
	$(".yewu-box >ul >li div >img").mouseout(function(){
			$(this).attr("src",$(this).attr("thisSrc"));			
	}) 	
	//求出.pj-lunbo2 的相对比例高度
	var oW = $(window).width();
	$(".pj-lunbo2 ").css("height",(oH-oHanderH+10)+'px');
	$(".swiper-container").css("height",(oH-oHanderH+10)+'px');
	
	$(".pj-lunbo2 .pj-Carousel-item").css("width",oW+'px');
	
	
	
	
	
	
	//更多
	$("#More").click(function(){
		$(".alert_box").fadeIn(400);
		$(".alert_box2").hide();
	})
	//关闭按钮
	$(".dl-box .close").click(function(){
		$(".alert_box").fadeOut(400);
		$(".alert_box2").hide();
	})
	//弹窗滑动显示自己对应的
	$(".dl-box >dl >dt").click(function(){
		$(".dl-box >dl >dt").removeClass("font-actve");
		$(this).addClass("font-actve");
		$(".dl-box >dl >dd").slideUp(400);
		$(this).next("dd").slideDown(400);
	})
	//nav导航  关于天赋
	$(".btn_tf").click(function(){
		$("#Max-conatiner .handers >.nav >ul >li >a >i").removeClass("showActive");
		$(this).find("i").addClass("showActive");	
		 lastShow()
		scrollTop_Top($(".mian-tf"));		
	})
	//新闻资讯
	$(".btn_new").click(function(){
		$("#Max-conatiner .handers >.nav >ul >li >a >i").removeClass("showActive");
		$(this).find("i").addClass("showActive");	
		 lastShow();
		scrollTop_Top($(".mian-xw"));	
	})
	//核心业务
	$(".btn_yw").click(function(){
		$("#Max-conatiner .handers >.nav >ul >li >a >i").removeClass("showActive");
		$(this).find("i").addClass("showActive");	
		lastShow()
		scrollTop_Top($(".mian-yw"))
	})
	
	//滑动状态
//	$("#Max-conatiner .handers >.nav >ul >li").mouseover(function(){
//		$("#Max-conatiner .handers >.nav >ul >li >a >i").removeClass("showActive");
//		$(this).find("i").addClass("showActive");		
//	})
//	$("#Max-conatiner .handers >.nav >ul").mouseout(function(){
//		$("#Max-conatiner .handers >.nav >ul >li >a >i").removeClass("showActive");
//	})

//$(".bg-style .bg_div-left").find(".timer-svg circle").attr("class","circles").attr("stroke","#fff");
	//显示的函数
	function lastShow(){
		$("#Max-conatiner").nextAll().show();
	    $(".alert_box").hide();
	    $(".alert_box2").hide();
	    var leftSwiper = new Swiper('.lefts', {
			direction : 'vertical',
			loop:true,
			simulateTouch : false	// 鼠标无效
		});
		
		var pjDOM = $(".bg-style .bg_div-left");
		var ii = 9;
		var rightSwiper = new Swiper('.right', {
			direction : 'vertical',
			loop:true,
			autoplay: 3000,
			autoplayDisableOnInteraction : false,
			// simulateTouch : false,	// 鼠标无效
			keyboardControl : true,					// 键盘上下
			// mousewheelControl : true,				// 鼠标
			onSlideChangeStart: function(swiper){
				leftSwiper.slidePrev();
				
			},
			onSlideChangeEnd:function(){
				ii--;
				console.log(ii)
				
				if (ii==0) {
					pjDOM.find(".timer-svg circle").attr("class","").attr("stroke","");
					pjDOM.eq(1).find(".timer-svg circle").attr("class","circles").attr("stroke","#fff");	
					ii=9;
				}else if(ii==8){
					pjDOM.find(".timer-svg circle").attr("class","").attr("stroke","");
					pjDOM.eq(0).find(".timer-svg circle").attr("class","circles").attr("stroke","#fff");
				}
				else{
					pjDOM.find(".timer-svg circle").attr("class","").attr("stroke","");
					pjDOM.eq(ii+1).find(".timer-svg circle").attr("class","circles").attr("stroke","#fff");		
				}
							
			}
		});
	}
	
	//滚动条滚动的函数
	function scrollTop_Top(DOM){
		 $(".handers").addClass("fixed");
		 var oT = DOM.position().top-oHanderH
//		 $('body,html').scrollTop(oT);
		 $('body,html').animate({
					scrollTop: oT
				},500);
			return false;
	}
	$(window).scroll(function(){			
				if ($(window).scrollTop() == 0) {
				 $("#Max-conatiner .handers >.nav >ul >li >a >i").removeClass("showActive");
				 $(".handers").removeClass("fixed");
				 $("#Max-conatiner").nextAll().hide();
				}
				else{
					 $(".handers").addClass("fixed");
				}
	 });
	 //兼容ie 废弃placeholder属性
	 $(".form_left >input,.form_left >textarea").focus(function(){//得到焦点
	 		  var oVal = $(this).val();
	 		  $(this).attr("oVal",oVal);
	 		  $(this).val("");
	 })
	 //失去焦点
	 $(".form_left >input,.form_left >textarea").blur(function(){//得到焦点
	 		  var ov = $(this).attr("oVal"); 
	 		  if ($(this).val() == ov || $(this).val()==""){
	 		  	$(this).val(ov)
	 		  }
	 })	 
	 //移入按钮显示
	 $(".dl-box >dl  .pub-div-boxs").mouseover(function(){
	 	$(".page-left").addClass("fadeLeft");	
	 	$(".page-right").addClass("fadeRight");	
	 })
	 $(".dl-box >dl  .pub-div-boxs").mouseout(function(){
	 	$(".page-left").removeClass("fadeLeft");	
	 	$(".page-right").removeClass("fadeRight");
	 })
	 
	 $(".pub-div-Friend").hover(function(){
	 	$(".pub-div-Friend .page-prev").toggleClass("page-prevAct");
	 	$(".pub-div-Friend .page-next").toggleClass("page-nextAct");
	 })
	//input得到焦点
	$(".serch_li").click(function(){
		$(".alert_box").hide();
		$(".alert_box2").fadeIn(400);
		document.getElementById("search-box").focus();
	})
	
	$(".dl-box2 .close").click(function(){
		$(".alert_box").hide();
		$(".alert_box2").fadeOut(400);
	})

});