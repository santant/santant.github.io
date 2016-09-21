window.onload = function(){
    		var swiper = new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        paginationClickable: true,
		        direction: 'vertical',
		        onSlideChangeEnd: function(swipers){
			    	if (swipers.activeIndex == 1) {
			    		document.querySelector(".page2 >.xingxing li:nth-of-type(1)").classList.add("xingx1");
			    		document.querySelector(".page2 >.xingxing li:nth-of-type(2)").classList.add("xingx2");
			    		document.querySelector(".page2 >.xingxing li:nth-of-type(3)").classList.add("xingx3");
			    		document.querySelector(".page2 >.xingxing li:nth-of-type(4)").classList.add("xingx4");
			    		document.querySelector(".page2 >.xingxing li:nth-of-type(5)").classList.add("xingx5");			    		
			    		setTimeout(function(){
			    			document.querySelector(".an-next").style.display ='block';
			    		},2000)
			    	}
			    	if (swipers.activeIndex == 2) {
//			    		alert("2")
			    	}			    	
			    }
		    });
		    $(".page1 .div-6").addClass("tabImg");
		    $(".page1 >b").addClass("to-top");
		    
		    //page2吹一吹执行的动画
		    $(".xingxing").bind("touchstart",fn);
		    //吹一吹之后执行这个函数
		    function fn(){
		    	$(".xingxing").addClass("opacity-d");
		    	$(".an-next").addClass("scale-d");
		    	//让中间那朵花出现
		    	$(".page2 .last-xingx").addClass("toHua");
		    	setTimeout(function(){
		    		$(".page2 .last-xingx").removeClass("toHua");
		    	},2000)

		    	$(".page2 img").addClass("MaxHua");
		    	setTimeout(function(){		    		
		    		$(".page2 img").css("opacity","1");	
		    		$(".page2 >ol").addClass("on");
		    		$(".page2 >ol >li:nth-of-type(1)").addClass("tetxLeft");
		    		$(".page2 >ol >li:nth-of-type(2)").addClass("tetxRight");		    		
		    	},4400)	
		    	
		    }
		    //page3动画
		    $(".alert-page3").bind("click",function(){
		    	$(this).find("span").hide();
		    	$(this).find("p").hide();
		    	$(".box-line").addClass("on page3scale");
		    	$(".page3 .alert-page3 ul li:nth-of-type(1)").addClass("on tetxLeft");
		    	$(".page3 .alert-page3 ul li:nth-of-type(2)").addClass("on tetxRight");
		    	$(".alert-page3").addClass("page3_bg");
		    })
		    //page4动画
		    //长按触发
		    var hammertime = $('.page4').hammer();
		　 　  hammertime.one('hold', function(ev) {
				$(".page4-an span").hide();
				$(".page4-an p").hide();
				$(".page4 .page4-an").addClass("page4-bg");
				setTimeout(function(){
					$(".page4 .page4-an").removeClass("page4-bg");
					$(".page4 .page4-an").hide();
					$(".page4 .page4_box").addClass("on ");
					$(".page4 .page4_box .line-f").addClass(" line-sw");
					$(".page4 .page4_box ol li:nth-of-type(1)").addClass("on tetxLeft");
					$(".page4 .page4_box ol li:nth-of-type(2)").addClass("on tetxRight");
				},4000)		
		　　   })
			//page5 动画
			$(".page5-box").bind("touchstart",fnMove);
			//摇一摇执行的函数
			function fnMove(){
				$(".page5-box span").hide();
				$(".page5-box p").hide();
				$(".page5-box section").hide();
				$(".page5-box .max-mifeng").addClass("on max-kc");
				setTimeout(function(){
					$(".box-text li:nth-of-type(1)").addClass("on tetxLeft");
					$(".box-text li:nth-of-type(2)").addClass("on tetxRight");
				},1000)
				
			}
			//page6
			$(".ul-qx li").hide();
			$(".ul-qx").bind("touchstart",function(){
				$(".div-page6 span").hide();
				$(".div-page6 p").hide();
				$(".ul-qx li").show();
				$(".div-page6 >ol >li:nth-of-type(1)").addClass("on tetxLeft");
				$(".div-page6 >ol >li:nth-of-type(2)").addClass("on tetxRight");
				$(".div-page6").addClass("active-bg");
			})
			//6跟琴弦触发事件
			$(".ul-qx li").bind("touchstart",function(){
				console.log($(this).index());
			})
 }