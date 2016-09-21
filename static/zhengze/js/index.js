$(function(){
	setTimeout(function(){
		$(".start_page >.start_page_left").addClass("start_page_AN1")
		$(".start_page >.start_page_right").addClass("start_page_AN2")
	},500)
	setTimeout(function(){
		$(".start_page").remove();
		$(".page01 >div >div >span").addClass("animated fadeInLeft");
		$(".page01 >div >div >p").addClass("animated fadeInLeft");		
	},1500)
	
	//第二层套的js
	var mySwiper = new Swiper('.swiper-container2', {
		onSlideChangeStart:function(swiper){
        	$(".animated").removeClass("animated fadeInRight fadeInUp fadeIn fadeOutUp fadeOutDown rollIn fadeInLeftBig fadeInLeft fadeInDown fadeInDownBig slideInLeft slideInRight bounceIn flip");
			$(".page06 .swiper-container2 .swipe2_bg1 .img_02").removeClass("AN_01");
			$(".page06 .swiper-container2 .swipe2_bg1 .img_04").removeClass("AN_02");
			$(".page01 >div >div >span").addClass("animated fadeInLeft");
			$(".page01 >div >div >p").addClass("animated fadeInLeft");
			
			if (swiper.activeIndex ==0){      			
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
        	$(".animated").removeClass("animated fadeInRight fadeInUp fadeIn fadeOutUp fadeOutDown rollIn fadeInLeftBig fadeInLeft fadeInDown fadeInDownBig slideInLeft slideInRight bounceIn flip");
        	$(".Max_box >img").removeClass();
        	$(".page01 >div >div >span").removeClass("animated fadeInLeft");
			$(".page01 >div >div >p").removeClass("animated fadeInLeft");
			$(".page05 >.box_page1").removeClass("AN_02");
			$(".page07 div >img").removeClass("AN_011 AN_012 AN_013");
			$(".page06 .swiper-container2 .swipe2_bg1 .img_02").removeClass("AN_01");
			$(".page06 .swiper-container2 .swipe2_bg1 .img_04").removeClass("AN_02");
			$(".page03").removeClass("AN_01")
			$(".page05 .box_page2").removeClass("AN_011");
        	console.log("事件开始了");
			console.log(swiper.activeIndex)
			//滑动的时候,让每一屏淡入淡出
			if (swiper.activeIndex !=0) {				
				$(".swiper-slide").eq(swiper.activeIndex).addClass("animated fadeIn");
			}
			if (swiper.activeIndex ==0) {
				$(".page01 >div >div >span").addClass("animated fadeInLeft");
				$(".page01 >div >div >p").addClass("animated fadeInLeft");	
			}
			
			if (swiper.activeIndex ==1){
				$(".page04 .bj_bg >.bg_page06 >img").addClass("animated fadeInLeftBig");
				$(".page04 .bj_bg >.page04_footer >img:nth-child(1)").addClass("animated rollIn");
				$(".img_page02_2").addClass("animated fadeInUp");			
			}
			if (swiper.activeIndex ==2){
				
				$(".page05 >.box_page1 .img_a").addClass("animated fadeIn");
				$(".page05 >.box_page1 .img_b").addClass("animated fadeInUp AN_01");
				$(".page05 >.box_page1 >span").addClass("animated fadeInLeft");
				$(".page05 >.box_page1 >p").addClass("animated fadeInRight");	
				setTimeout(function(){
					$(".page05 >.box_page1 .img_a").removeClass("animated fadeIn");
					$(".page05 >.box_page1 .img_b").removeClass("animated fadeInUp AN_01");
					setTimeout(function(){
						$(".page05 >.box_page1 .img_a").addClass("animated fadeOutUp");
						$(".page05 >.box_page1 .img_b").addClass("animated fadeOutDown");
						$(".page05 >.box_page1 >span").addClass("animated fadeOutDown");
						$(".page05 >.box_page1 >p").addClass("animated fadeOutDown");
					},100)
				},2800)
				setTimeout(function(){
					$(".page05 >.box_page1").addClass("AN_02");
					$(".page05 >.box_page2").addClass("AN_011");
				},3500)
			}
			if (swiper.activeIndex ==3){
				$(".page06 .swiper-container2 .swipe2_bg1 .img_02").addClass("AN_01");
				$(".page06 .swiper-container2 .swipe2_bg1 .img_04").addClass("AN_02");
				$(".page06 .swiper-container2 .swipe2_bg1 .img_01").addClass("animated fadeInLeft");
				$(".page06 .swiper-container2 .swipe2_bg1 .img_03").addClass("animated fadeInLeft");
				$(".page06 .swipe2_bg1_img1").addClass('animated fadeInUp');
			}
			if (swiper.activeIndex ==4){				
					$(".page08 >img").addClass("animated fadeInRight");
					$(".page08 >p").addClass("animated fadeInLeft");					
			}
			if (swiper.activeIndex ==5){				
					$(".page07 .box_page01_bg1 .img_bg_01").addClass("AN_011")
					$(".page07 .box_page01_bg1 .img_bg_02").addClass("AN_011")
					$(".page07 .box_page01_bg1 .img_bg_03").addClass("AN_012")
					$(".page07 .box_page01_bg1 .img_bg_04").addClass("AN_012")
					
					$(".page07 .box_page01_bg2 .img_bg_01").addClass("animated fadeInLeft")
					$(".page07 .box_page01_bg2 .img_bg_02").addClass("AN_013")
			}			
			if (swiper.activeIndex ==6){
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
	    }
    });
	
	
	
})
