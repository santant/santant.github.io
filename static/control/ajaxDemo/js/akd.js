            var subBrandHtml = "";
			$(function(){
				$(".dl_left").animate({
									'scrollTop': 0
							 })
				var   brandJsons = null;
				var   brandsHtml = "";
				var   brandId = "";
				var   loadWordHtml = "";
				var   brandGroupName = "";
				$.ajax({
				type: "POST",                
				url: 'http://www.51youchi.com/uchiapi/Car/getCarBrands.do',
				success: function(data){
                          brandJsons =data;
	                      var j=0;
                           for(var i=0;i<brandJsons.length;i++){//这里边是车牌groupName已经按A/B/C/D排好序的写的
	                      	brandId = brandJsons[i].brandId;
	                      	if(i==0 || (i>0 && brandJsons[i].groupName !=brandJsons[i-1].groupName)){
	                      	brandsHtml += "<dt  class=\"bb\" id=\""+brandJsons[i].groupName+brandJsons[i].groupName+"\">"+brandJsons[i].groupName+"<div class=\"dtNum\">"+j+"</div><div class=\"ddNum\">"+i+"</div></dt>";
							loadWordHtml += "<li id=\""+brandJsons[i].groupName+"\"><a href=\"#"+brandJsons[i].groupName+brandJsons[i].groupName+"\">"+brandJsons[i].groupName+"</a><div class=\"dtNum\">"+j+"</div><div class=\"ddNum\">"+i+"</div></li>";
							j++;
	                      	}
	                      	brandsHtml += "<dd  id='"+brandId+"'><img src='http://uchi.oss-cn-beijing.aliyuncs.com/uchi/CarImages/carBrand/"+brandId+".png' alt=''/><span>"+brandJsons[i].brandName+"</span></dd>";
	                       
						  }
	                      $("#brands").html('');
	                      $("#brands").html(brandsHtml);
						  $("#loadWork").html('');
						  $("#loadWork").html(loadWordHtml);
	                     /**if(brandJsons.length>1){
	                      	$("#brands  dd:eq(0)").addClass("dl_color");
	                      	loadSubBrand(brandJsons[0].brandId);
	                      }
	                      **/
						 /* $(".dl_left dd").click(function(){
							$(this).addClass("dl_color").siblings("dd").removeClass("dl_color");
							brandId  =$(this).attr("id");
							loadSubBrand(brandId);
							
							
						  })*/
                      	 $("#container .dl_left dd").click(function(){
                      	 	$(this).addClass("dl_color").siblings("dd").removeClass("dl_color");
							var brandIdon  =$(this).attr("id");
							loadSubBrand(brandIdon);
								$(".a_z").css("display","none");
								$("#alert").animate({
									"right":0
								},400)
								$("#alert .section_left").click(function(){
									
									$("#alert").animate({
									"right":"-100%"
									},500)
									$(".a_z").css("display","block");
								})
				             })
							 
							 
				       
                      
                      	
				},
				error: function(data){
					alert("对不起,系统出现错误,请检查网络");
				},
				async: false,
				dataType: "jsonp"

			   })
			})
			function loadSubBrand(brandIdon){
				var subBrandJsons;
				$.ajax({
				type: "POST",
				url: 'http://www.51youchi.com/uchiapi/Car/getCarSeriess.do',
				data:"brandId="+brandIdon,
				success: function(data){
                          subBrandJsons =data;
						  subBrandHtml="";
	                     $("#subrands").html('');
						   for(var i=0;i<subBrandJsons.length;i++){
							   if(i==0||(i>0 && subBrandJsons[i].subBrandName!=subBrandJsons[i-1].subBrandName)){
								   subBrandHtml+="<b class=\"color_b\">"+subBrandJsons[i].subBrandName+"</b>";
							   }
	                      	subBrandHtml+="<li class='li_active'><a href=\"#\" style=\"border-top: 1px solid #ededed;\"><img src=\"http://uchi.oss-cn-beijing.aliyuncs.com/uchi/CarImages/carSeries/"+subBrandJsons[i].seriesId+".png\" alt=\"\"/><span>"+subBrandJsons[i].seriesName+"</span><i class='right'></i></a></li>";
	                        loadSubBrandOl(subBrandJsons[i].seriesId);
	                      }
	                      
	                      $("#subrands").html(subBrandHtml);
	                      
	                      $(".div_right ul .li_active").click(function(){				 			
										$(this).find("a").css("border","none");
										$(this).next("ol").toggle(500);
										$(this).find("i").toggleClass("class_bg");
										$(this).toggleClass("li_bg");
							 })
                      } ,
                      	
				
				error: function(data){
					alert("对不起,系统出现错误,请检查网络");
				},
				async: false,
				dataType: "jsonp"
			  })
			}
			function loadSubBrandOl(seriesId){
				var subBrandOlJson;
				$.ajax({
				type: "POST",
				url: 'http://www.51youchi.com/uchiapi/Car/getCarSeriesInfos.do',
				data:"seriesId="+seriesId,
				success: function(data){
                          subBrandOlJson =data;
                          subBrandHtml+="<ol>";
                          alert(subBrandHtml);
                          if(data!=null){
		                      for(var i=0;i<subBrandOlJson.length;i++){
		                      	subBrandHtml+="<li><a href=\"#\">"+subBrandOlJson[i].subSeriesName+subBrandOlJson[i].engine+subBrandOlJson[i].carName+"</a></li>";
		                      } 
	                      }
	                      subBrandHtml+="</ol>";
	                      
	                      
                      },  
                      	
				
				error: function(data){
					alert("对不起,系统出现错误,请检查网络");
				},
				async: false,
				dataType: "jsonp"
			  })
			}
			