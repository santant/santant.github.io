
////插件最优格式 默认给的是选择器模式
;(function($,window,document,undefined){
	//tab
  $.fn.tab = function(options){
  	var defaults = {
  		'color':'red',
  		'background':'#eee',
  		'mark' :'true',   //开关
  		'prevButton':'',  //上一页
  		'nextButton':'' ,  //下一页
  		'timer':'3000',//轮播的时间
  		'mouseover':'false', //鼠标移动变化
  		'click':'true'      //点击	
  	}
  	var str = $.extend({}, defaults, options);
  	
  	this.each(function(){ //包装级
  		var oThis = $(this); //html节点
		$(oThis).find("li").eq(0).css({
			"color" :str.color,
  			'background':str.background
		})		
		  //点击
		  if (str.click == 'true') {
		  	 $(oThis).find("li").bind("click",Move);
		  }
			//鼠标移动
		  if (str.mouseover == 'true') {
		  	 $(oThis).find("li").bind("mouseover",Move);
		  }
  			//运动函数
	  		function Move(){  		
		  		var oindex = $(this).index(); 
					$(this).css({
						"color" :str.color,
						'background':str.background
					}).siblings("li").css({
						"color" :"",
						'background':""
					})  			
		  			oThis.find(".pj-tab").eq(oindex).show().siblings(".pj-tab").hide();	
		  			 mun = oindex;//选中状态的统一		  		
	  		}
  		//默认开启轮播
  		if (str.mark == 'true') {
  			var mun = 0;//计数器		
			setInterval(paly,str.timer);	
  		}	
  		//自动播放
		function paly(){
			mun++;
			if (mun >= $(oThis).find("li").size()){				
				mun = 0;			
			}	
			publicFn();
		} 
		//公共的运动函数
		function publicFn(){
			oThis.find("li").eq(mun).css({
				"color" :str.color,
				'background':str.background
			}).siblings("li").css({
				"color" :"",
				'background':""
			})
			oThis.find(".pj-tab").eq(mun).show().siblings(".pj-tab").hide();
		}
  		//上一页 如果这个选择器 被用户赋值了
  		if (str.prevButton !="") {
  			var oPrev =  str.prevButton;
  			$(oPrev).bind("click",function(){				
  				if (mun == 0){				
					mun = $(oThis).find("li").size();			
				}	
				mun--;
				publicFn();
  			})
  		}
  		//下一页 如果这个选择器 被用户赋值了
  		if (str.nextButton !="") {
  			var oNext = str.nextButton;
  			$(oNext).bind("click",function(){
  				 paly();
  			})
  		}
  	}) 	
  	return this;
  }  
  //字符截断
  $.fn.CutString = function(options){
  	var defaults = {
  		'numbers':'200',//截断的字符
  		'lastStr':'...' //后面的自定义...,用户可以自定义
  	}
  	var str = $.extend({}, defaults, options);
  	this.each(function(){ //包装级			
  		  var oThis = $(this); //html节点
				oThis.each(function(){
					var oText = $(this).text().substring(1,str.numbers)+str.lastStr;
					$(this).text(oText);
				})
  	}) 	
  	return this;
  } 
  //轮播图
  $.fn.Carousel = function(options){
  	var defaults = {
  		'play':'true', //是否重复循环播放
  		'auto':'true', //自动播放
  		'prevButton':'',  //上一页
  		'nextButton':'' , //下一页
  		'AnTimer':'800',  //动画定时器,默认为0.8s
  		'playTimer':'5000', //物体运动定时器
  		'WidthMax':'false',    //全屏
  		'fade':'false',     //淡出淡出
  		'pageNUm':'',//分页参数
  		'eventClick':'false'  //为true的时候，插件下面的状态栏变为click触发，默认为鼠标移入触发

  	}
  	var str = $.extend({}, defaults, options);
 
  	this.each(function(){ //包装级			
  		  var oThis = $(this); //html节点
				oThis.each(function(){	
					  if (str.WidthMax == 'true') {
					  	 oThis.find(".pj-Carousel").css("width",$(document).width());
					  	 var oboxWidth = $(document).width();
					  } else{
					  	 var oboxWidth =  oThis.find(".pj-Carousel").width();					  	
					  }
					 //移动的元素
					  var oCarouseL =  oThis.find(".pj-Carousel-box");						
					 	//有多少个Dom
					  var oItemSzie =  oThis.find(".pj-Carousel-item").size();
					  
					  //状态集合Dom
					  var oActive = oThis.find(".pj-Carousel-active");
					  var oItem = oThis.find(".pj-Carousel-item");
						
					  oCarouseL.css("width",oboxWidth*oItemSzie+'px');	
					  //根据节点创建多少个Div状态元素
					  var color = '';
					  for (var i = 0; i < oItemSzie; i++) {
					  		color += "<div class ='pj-Carousel-color'> </div>";
					  }
					  oActive.append(color);
					  var colorBg = oThis.find(".pj-Carousel-color").css("background");

					  oThis.find(".pj-Carousel-color").eq(0).addClass("active");
					 	oActive.css("marginLeft",(oboxWidth-oActive.width())/2+'px');
					  oItem.css("width",oboxWidth);
					  
					  if (str.eventClick == 'true'){
					  	oThis.find(".pj-Carousel-color").bind("click",Toevevt);
					  }else
					  {
					  	oThis.find(".pj-Carousel-color").bind("mouseover",Toevevt);
					  }
					  
					  
					  function  Toevevt(){
					  	  var oIndex = $(this).index();						  	  
					  	  $(this).addClass("active").siblings(".pj-Carousel-color").removeClass("active");
					  	  if (str.fade =='true') {//淡入淡出
					  	  	oThis.find(".pj-Carousel-item").eq(oIndex).fadeIn(str.WidthMax).siblings(".pj-Carousel-item").fadeOut(str.WidthMax);
					  	  } else{
					  	  	oCarouseL.animate({
						  	  	'left' : -oboxWidth*oIndex+'px'
						  	 },str.AnTimer)
					  	  }					  	  						  	  
					  	 num = oIndex;
					  }
					  var num = 0;
					  var timer = null;//定时器
					  //淡入淡出
					  if (str.fade =='true') {
					  	 oItem.css({			  	 	 
					  	 	'clear':'both',
					  	 	'position':'absolute',
					  	 	'left':'0',
					  	 	'top':'0'
					  	 });					  	 
					  	 oItem.eq(0).show().siblings(".pj-Carousel-item").hide();
					  }					  
					  if (str.auto =='true') {
					  	 //自动播放					 	 
					  	 timer = setInterval(plays,str.playTimer);
					  }
					  function plays(){					  	
						  		if (str.play == 'true'){ //自动播放
						  		  num++;
							  		if (num >= oItemSzie){				
											  num = 0;			
							  	  }
							  	  publicFn();
							  	}else if(str.play =='false'){ //不自动播放
							  		   if (num >= 0 && num < oItemSzie-1){				
												num++;
												publicFn();			
										}
							  	}							  					  		
					  }					  
					  //公共的运动函数
						function publicFn(){
							 oThis.find(".pj-Carousel-color").eq(num).addClass("active").siblings(".pj-Carousel-color").removeClass("active")
					  	  if (str.fade =='true') {
					  	  	oThis.find(".pj-Carousel-item").eq(num).fadeIn(str.AnTimer).siblings(".pj-Carousel-item").fadeOut(str.AnTimer);
					  	  } else{
					  	  	  oCarouseL.animate({
						  	  	'left' : -oboxWidth*num+'px'
						  	  },str.AnTimer)
					  	  }								
						}
						//上一页 如果这个选择器 被用户赋值了
			  		   if (str.prevButton !=""){
			  		   		var oPrev =  str.prevButton;			  		   		
				  			$(oThis.find(oPrev)).bind("click",function(){
				  				oCarouseL.stop(true,true);
				  				
					  				if (str.play == 'true') { //重复轮播
					  					if (num == 0){				  						
					  						num = oItemSzie;	
					  					}
					  					num--;
										publicFn();
					  				}
					  				if (str.play == 'false') {//不重复
						  				if (num > 0 && num < oItemSzie){				
											num--;
											publicFn();			
										}														  					
					  				}
				  								  				
				  			})
			  		   }
			  		   //下一页 如果这个选择器 被用户赋值了
			  		   if (str.nextButton !=""){
			  		   		var oNext =  str.nextButton;			  		   		
				  			$(oThis.find(oNext)).bind("click",function(){
				  				oCarouseL.stop(true,true);				  				
				  				if (str.play == 'true') { //重复轮播
				  					    num++;
								  		if (num >= oItemSzie){				
											 num = 0;			
								  	  	}
								  	     publicFn();
				  				}
				  				if (str.play == 'false'){//不重复
					  				if (num >= 0 && num < oItemSzie-1){				
										num++;
										publicFn();			
									}					  					
				  				}
				  			})
			  		   }
			  		   //鼠标悬浮上面，关闭定时器
			  		   oThis.bind("mouseover",function(){
			  		   		clearInterval(timer);
			  		   })
			  		   
			  		   //移除鼠标,重新开启
			  		   oThis.bind("mouseout",function(){
			  		   		timer = setInterval(plays,str.playTimer);
			  		   })
				})
	  		}) 	
	  		return this;
	  }	 

})(jQuery,window,document);