
////插件最优格式 默认给的是选择器模式
;(function($,window,document,undefined){
  $.fn.tab = function(options){
  	var defaults = {
  		'color':'red',
  		'background':'#eee',
  		'mark' :'true',   //开关
  		'prevButton':'',  //上一页
  		'nextButton':'' ,  //下一页
  		'timer':'5000'   //轮播的时间
  	}
  	var str = $.extend({}, defaults, options);
  	
  	this.each(function(){ //包装级
  		var oThis = $(this); //html节点
		$(oThis).find("li").eq(0).css({
			"color" :str.color,
  			'background':str.background
		})		
  		$(oThis).find("li").bind("click",function(){
  			var oindex = $(this).index(); 
			$(this).css({
				"color" :str.color,
				'background':str.background
			}).siblings("li").css({
				"color" :"",
				'background':""
			})  			
  			oThis.find(".box").eq(oindex).show().siblings(".box").hide();	
  			 mun = oindex;//选中状态的统一
  		})
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
			oThis.find(".box").eq(mun).show().siblings(".box").hide();
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
})(jQuery,window,document);