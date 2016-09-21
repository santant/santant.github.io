$(function(){
//	setTimeout(function(){
//		$(".start_page >.start_page_left").addClass("start_page_AN1")
//		$(".start_page >.start_page_right").addClass("start_page_AN2")
//	},500)
//	setTimeout(function(){
//		$(".start_page").remove();
//		$(".page01 >div >div >span").addClass("animated fadeInLeft");
//		$(".page01 >div >div >p").addClass("animated fadeInLeft");		
//	},1500)
	setTimeout(function(){
		$(".start_page .img_bg1").addClass("animated fadeOutUp");
		$(".start_page .img_bg2").addClass("animated fadeOutUp");
	},2000)
	setTimeout(function(){
		$(".start_page >.start_page_left").addClass("start_page_AN1");
		$(".start_page >.start_page_right").addClass("start_page_AN2");
//		$(".frist_page").addClass("animated fadeIn");
		$(".page11  img").addClass("animated rotateInDownLeft");
	},2800)
	setTimeout(function(){
		$(".start_page").remove();
//		$(".page01 >div >div >span").addClass("animated fadeInLeft");
//		$(".page01 >div >div >p").addClass("animated fadeInLeft");		
	},4500)
	
	//第二层套的js
	var mySwiper = new Swiper('.swiper-container2', {
		onSlideChangeStart:function(swiper){
        	$(".animated").removeClass("animated fadeInRight fadeInUp fadeIn rollIn fadeInLeftBig fadeInLeft lightSpeedIn fadeInDown fadeInDownBig slideInLeft slideInRight rotateInDownLeft");
			$(".page06 .swiper-container2 .swipe2_bg1 .img_02").removeClass("AN_01");
			$(".page06 .swiper-container2 .swipe2_bg1 .img_04").removeClass("AN_02");
			
			
			if (swiper.activeIndex ==0) {      			
				$(".page06 .swiper-container2 .swipe2_bg1 .img_02").addClass("AN_01");
				$(".page06 .swiper-container2 .swipe2_bg1 .img_04").addClass("AN_02");
				$(".page06 .swiper-container2 .swipe2_bg1 .img_01").addClass("animated fadeInLeft");
				$(".page06 .swiper-container2 .swipe2_bg1 .img_03").addClass("animated fadeInLeft");
				$(".page06 .swipe2_bg1_img1").addClass('animated fadeInUp');
			}
			if (swiper.activeIndex ==1) {
				$(".swiper-container2 .img1").addClass("animated fadeInLeft");
				$(".swiper-container2 .img2").addClass("animated fadeInLeft");
				$(".page06 .swipe2_bg1_img1").addClass('animated fadeInUp');
			}
		}
	})
	
	//	Swiper运算js
	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onSlideChangeStart:function(swiper){//向上监听
        	//清除所有的class
        	$(".animated").removeClass("animated rotateInDownLeft fadeInRightBig fadeInRight fadeInUp fadeIn fadeOutUp fadeOutDown rollIn fadeInLeftBig fadeInLeft fadeInDown fadeInDownBig slideInLeft slideInRight bounceIn flip");
        	$(".Max_box >img").removeClass();
        	$(".page01 >div >div >span").removeClass("animated fadeInLeft");
			$(".page01 >div >div >p").removeClass("animated fadeInLeft");
			$(".page05 >.box_page1").removeClass("AN_02");
//			$(".page07 div >img").removeClass("AN_011 AN_012");
			$(".page07 .box_page01_bg1 .img_bg_02").removeClass("AN_011")
			$(".page07 .box_page01_bg1 .img_bg_03").removeClass("AN_012")
			$(".page06 .swiper-container2 .swipe2_bg1 .img_02").removeClass("AN_01");
			$(".page06 .swiper-container2 .swipe2_bg1 .img_04").removeClass("AN_02");
			$(".page03").removeClass("AN_01")
			$(".page05  .box_page2").removeClass("AN_011");
			$(".page05 >.box_page1").css("opacity",'0');
        
			//滑动的时候,让每一屏淡入淡出
//			if (swiper.activeIndex !=1) {				
//				$(".swiper-slide").eq(swiper.activeIndex).addClass("animated fadeIn");
//			}
			
			if (swiper.activeIndex ==0) {
				$(".page11  img").addClass("animated rotateInDownLeft");
			}
			if (swiper.activeIndex ==1) {
				$(".page01 >div >div >span").addClass("animated fadeInLeft");
				$(".page01 >div >div >p").addClass("animated fadeInLeft");	
			}
			
			if (swiper.activeIndex ==2){
				$(".page04 .bj_bg >.bg_page06 >img").addClass("animated fadeInLeftBig");
				$(".page04 .bj_bg >.page04_footer >img:nth-child(1)").addClass("animated rollIn");
				$(".img_page02_2").addClass("animated fadeInUp");			
			}
			if (swiper.activeIndex ==3){
				$(".page05 >.box_page2").addClass("AN_011");
				setTimeout(function(){
					$(".page05 >.box_page1").css("opacity",'1');
					$(".page05 >.box_page1 .img_a").addClass("animated fadeInDown");
					$(".page05 >.box_page1 .img_b").addClass("animated fadeInUp");				
				},4800)
			}
			if (swiper.activeIndex ==4){
				$(".page06 .swiper-container2 .swipe2_bg1 .img_02").addClass("AN_01");
				$(".page06 .swiper-container2 .swipe2_bg1 .img_04").addClass("AN_02");
				$(".page06 .swiper-container2 .swipe2_bg1 .img_01").addClass("animated fadeInLeft");
				$(".page06 .swiper-container2 .swipe2_bg1 .img_03").addClass("animated fadeInLeft");
				$(".page06 .swipe2_bg1_img1").addClass('animated fadeInUp');
			}
			if (swiper.activeIndex ==5){				
				$(".page09 .img1").addClass("animated fadeInLeft");
				$(".page09 .img2").addClass("animated fadeInLeft");
				$(".page09 .swipe2_bg1_img1").addClass('animated fadeInUp');			
			}
			if (swiper.activeIndex ==6){				
					$(".page08 >img").addClass("animated fadeInRightBig");
					$(".page08 >p").addClass("animated fadeInLeft");					
			}
			if (swiper.activeIndex ==7){				
					$(".page07 .box_page01_bg1 .img_bg_01").addClass("animated fadeInLeft")
					$(".page07 .box_page01_bg1 .img_bg_02").addClass("AN_011")
					$(".page07 .box_page01_bg1 .img_bg_03").addClass("AN_012")
					$(".page07 .box_page01_bg1 .img_bg_04").addClass("animated fadeInLeft")
					
//					$(".page07 .box_page01_bg2 .img_bg_01").addClass("animated fadeInLeft")
//					$(".page07 .box_page01_bg2 .img_bg_02").addClass("AN_013")
			}			
			if (swiper.activeIndex ==8){
				$(".Max_box img:nth-of-type(1)").addClass("AN_01")
				$(".Max_box img:nth-of-type(2)").addClass("AN_02")
				$(".Max_box img:nth-of-type(3)").addClass("AN_03")
				$(".Max_box img:nth-of-type(4)").addClass("AN_04")
				$(".Max_box img:nth-of-type(5)").addClass("AN_05")
				$(".Max_box img:nth-of-type(6)").addClass("AN_06")
				$(".Max_box img:nth-of-type(7)").addClass("AN_07")
				$(".Max_box img:nth-of-type(8)").addClass("AN_08")
				$(".Max_box img:nth-of-type(9)").addClass("AN_09")
				$(".Max_box img:nth-of-type(10)").addClass("AN_10")
				setTimeout(function(){
					$(".page03").addClass("animated fadeInUp");
					$(".page03 .texts >span").addClass("animated fadeInRight");
					$(".page03 .texts >p").addClass("animated fadeInUp");
				},3800)
			}
			if (swiper.activeIndex ==9){
				$(".page12 >p").addClass("animated fadeInLeft")
				$(".page12 .page_12_img").addClass("animated fadeInUp")
			}
	    }
    });
	
	
	
})
