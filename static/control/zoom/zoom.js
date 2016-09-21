;$(function(){
	var  minOLi = $(".wrapSmallImg ul li");//小图li
	var  minOWidth = $(".wrapSmallImg ul li").outerWidth(true);//小图li的宽度
	var  minOSize = $(".wrapSmallImg ul li").size();
	var  minOul = $(".wrapSmallImg ul"); //小图ul
	var  maxImg = $(".zoomMiddle img");//中图img
	var  oBtnLeft = $(".zoomSmall .left");//左边按钮
	var  oBtnRight = $(".zoomSmall .right");//右边按钮
	var now = 0;//计算器
	var oZoomDiv = $(".zoomMiddle");//遮罩的移动层 
	
	//鼠标移动上去换图和换src的值
	minOLi.mouseover(function(){
		$(this).addClass("current").siblings("li").removeClass("current");
		var thisSrc = $(this).find("img").attr("src");
		maxImg.attr("src",thisSrc);
		$(".zoomLarge img").attr("src",thisSrc);
	})
	//按钮点击的时候有滚动
	
	oBtnLeft.click(function(){//left 左边
		if (now>0) {
			now--;
			minOul.animate({
			"left":'+='+minOWidth
			},500)
		}
		
	})
	oBtnRight.click(function(){//Right 右边
		
		if (now>=0 && now< (minOSize-6)) {
			now++;
			minOul.animate({
			"left":'-='+minOWidth
		 },500)
		}
		
	})
	
	//鼠标移入的时候
	oZoomDiv.mousemove(function(e){
		$(".mask").show();
		$(".zoomLarge").show();
		//获得鼠标当前的位置
		var oZoomDivOffset = oZoomDiv.offset();//文档偏移量
		var x = e.pageX - oZoomDivOffset.left - $(".mask").width()/2; //$(".mask").width()/2减去了这个就是保持鼠标一直在div中间x点的位置
		var y = e.pageY - oZoomDivOffset.top - $(".mask").height()/2; //和上面一样保持Y轴的位置
		console.log(x,+'......'+y)
		if (x<=0) {
			x=0
		}else if(x>= oZoomDiv.width()- $(".mask").width()){
			x= oZoomDiv.width()- $(".mask").width();
		}
		if(y<=0){
			y=0
		}else if(y>=oZoomDiv.height()- $(".mask").height())
		{
			y = oZoomDiv.height() - $(".mask").height()
		}
		//定义比例尺 0-1
		var oScale_X = x/(oZoomDiv.width() - $(".mask").width());
		var oScale_y = y/(oZoomDiv.height() - $(".mask").height());
		console.log(oScale_X+'........'+oScale_y)
		
		//改变放大镜区域的坐标
		$(".zoomLarge img").css({
			  left:-oScale_X*(600-$('.zoomLarge').width()), //这里的600是放大镜里面图片的宽度 ,
			  top :-oScale_y*(600-$('.zoomLarge').height())
		})
		//实时改变遮罩层的x,y坐标
		$(".mask").css({
			'left':x+'px',
			"top":y+'px'
		})
		
	})
	//鼠标移出的时候
	oZoomDiv.mouseout(function(){
		$(".mask").hide();
		$(".zoomLarge").hide();
	})
	//鼠标移出最大div的时候隐藏放大区域层
	
	
});