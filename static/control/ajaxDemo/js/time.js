$(function(){
		 $(function(){
			var opt = {
		        preset: 'date', //日期
		        theme: 'sense-ui', //皮肤样式
		        display: 'modal', //显示方式 
		        mode: 'scroller', //日期选择模式
		        dateFormat: 'yy-mm-dd', // 日期格式
		        setText: '确定', //确认按钮名称
		        cancelText: '取消',//取消按钮名籍我
		        dateOrder: 'yymmdd', //面板中日期排列格式
		        dayText: '日', monthText: '月', yearText: '年', //面板中年月日文字
		        endYear:2020 //结束年份
		    };
		    $("#scroller").mobiscroll(opt).date(opt);
			// 直接写参数方法
			//$("#scroller").mobiscroll(opt).date(); 
			// Shorthand for: $("#scroller").mobiscroll({ preset: 'date' });
			//具体参数定义如下
		    //{
		    //preset: 'date', //日期类型--datatime,
		    //theme: 'ios', //皮肤其他参数【android-ics light】【android-ics】【ios】【jqm】【sense-ui】
										//【wp light】【wp】
		    //mode: "scroller",//操作方式【scroller】【clickpick】【mixed】
		    //display: 'bubble', //显示方【modal】【inline】【bubble】【top】【bottom】
		    //dateFormat: 'yyyy-mm-dd', // 日期格式
		    //setText: '确定', //确认按钮名称
		    //cancelText: '清空',//取消按钮名籍我
		    //dateOrder: 'yymmdd', //面板中日期排列格
		    //dayText: '日', 
		    //monthText: '月',
		    //yearText: '年', //面板中年月日文字
		    //startYear: (new Date()).getFullYear(), //开始年份
		    //endYear: (new Date()).getFullYear() + 9, //结束年份
		    //showNow: true,
		    //nowText: "明天",  //
		    //showOnFocus: false,
		    //height: 45,
		    //width: 90,
		    //rows: 3}
			});
			
			 $("#form_id").validate();

   			
})
