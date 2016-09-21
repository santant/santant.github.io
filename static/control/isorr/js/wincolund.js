$(function() {
	var dom = $(".con li ");
	//var oTop = $(document).scrollTop();

	//var offset = $(".con").offset();// 获取ul在窗口中的位置	
	//var alertString = offset.top;
	var alertString = $('.con li').outerHeight();
	dom.click(function() {
		var f_index = dom.index(this);
		$(".store").eq(f_index).show()
			.siblings('.store').hide();
		$(this).addClass('actives').siblings().removeClass();

		//滚动条
		//$(".con").scrollTop(alertString * f_index)
		$(".con").animate({
			'scrollTop': alertString * f_index
		}, 300)
	})
})