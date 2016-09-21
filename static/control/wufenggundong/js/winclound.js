$(function() {
	var oul = $('.wrap ul');
	var oulHtml = oul.html(); //获取li的数量
	//oul.append(oulHtml);//在ul插入四个li
	oul.html(oulHtml + oulHtml) //复制li里面的内容
	var timeId = null; //定时器

	//var seppd = 2;
	timeId = setInterval(function() {
			//	if(oul.css('left')=='-800px')
			//	{
			//		oul.css('left',0)
			//	}
			//	oul.css('left','+=-2px');	
			//	},30)//向左边滚动的代码
			if (oul.css('left') == '0px') {
				oul.css('left', '-800px')
			}
			oul.css('left', '+=2px');
		}, 30) //向右边滚动的代码

	//当鼠标移动到.wrap这个div的时候
	$(".wrap").mouseover(function() {
		clearInterval(timeId); //关闭定时器
	});
	$(".wrap").mouseout(function() {//当鼠标移除的时候，让他继续执行setInterval里面的代码
		timeId = setInterval(function() {
				//	if(oul.css('left')=='-800px')
				//	{
				//		oul.css('left',0)
				//	}
				//	oul.css('left','+=-2px');	
				//	},30)//向左边滚动的代码
				if (oul.css('left') == '0px') {
					oul.css('left', '-800px')
				}
				oul.css('left', '+=2px');
			}, 30) //向右边滚动的代码
	});
});