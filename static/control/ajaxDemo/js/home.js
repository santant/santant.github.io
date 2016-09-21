$(function() {

	//调用滑动门控件的参数。
	var swiper = new Swiper('.swiper-container', {
			        pagination: '.swiper-pagination',
			        paginationClickable: true,
			 		autoplay:5000,
			        loop: true, 
	  });
	  
	  $(".swiper-pagination").hide(40);
	  $(".swiper-pagination").show(40);
});