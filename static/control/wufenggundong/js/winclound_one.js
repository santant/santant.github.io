$(function() {
	var oul = $('.wrap ul');
	var oulHtml = oul.html(); //获取li的数量
	//oul.append(oulHtml);//在ul插入四个li
	oul.html(oulHtml + oulHtml) //复制li里面的内容
	var timeId = null; //定时器
	var speed = 2; //速度
	function slider() {//这里是判断左右按钮走向的函数<0向左,>0像右
			if (speed < 0) { //向左移
				if (oul.css('left') == '-800px') {
					oul.css('left', 0)
				}
				oul.css('left', '+=-2px');
			} //向左边滚动的代码

			if (speed > 0) {
				if (oul.css('left') == '0px') {
					oul.css('left', '-800px');
				}
				oul.css('left', '+=' + speed + 'px');
			}//向右边滚动的代码 
		}

	timeId = setInterval(slider, 30);

	//当鼠标移动到.wrap这个div的时候
	$(".wrap").mouseover(function() {
		clearInterval(timeId); //关闭定时器
	});
	$(".wrap").mouseout(function() { //当鼠标移除的时候，让他继续执行setInterval里面的代码
		timeId = setInterval(slider, 30);
	});

	$(".goleft").click(function() { //按钮向左走
		speed = -2; //因为left为负数的时候是向左边移
	
	});
	$(".goright").click(function() { //按钮向右走
		speed = 2; //因为right为正数的时候是向右边移
	})
});