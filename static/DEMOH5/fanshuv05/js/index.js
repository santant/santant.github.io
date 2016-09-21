$(function(){
			document.body.addEventListener('touchstart', function () {});						    
			//网页进度条loading需要加载的图片
			 var arr = [];//存放图片地址的数组
			 function browserRedirect(id) {
			            var sUserAgent = navigator.userAgent.toLowerCase();
			            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
			            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
			            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
			            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
			            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
			            var bIsAndroid = sUserAgent.match(/android/i) == "android";
			            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
			            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";           
			            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
			              //移动端需要执行的
			               //pc端
			              id.each(function(){
								//解析得到的图片地址
								if ($(this).css("backgroundImage") !="none") {//这个属性是背景的图 !="none"是排除img的属性为none不是空
									var lastLength = $(this).css("backgroundImage").length - 1;						
									var oSrc = $(this).css("backgroundImage").substring(4,lastLength);
			//						alert(oSrc);
									console.log($(this).css("backgroundImage"));
									arr.push(oSrc);
								}
								if ($(this).attr("src")) {//这个属性是图片的src
									arr.push($(this).context.src);
								}
							})
			            }else
			            {
			              //pc端
			              id.each(function(){
								//解析得到的图片地址
								if ($(this).css("backgroundImage") !="none") {//这个属性是背景的图 !="none"是排除img的属性为none不是空
									var lastLength = $(this).css("backgroundImage").length - 2;						
									var oSrc = $(this).css("backgroundImage").substring(5,lastLength);
			//						alert(oSrc);
									console.log($(this).css("backgroundImage"));
									arr.push(oSrc);
								}
								if ($(this).attr("src")) {//这个属性是图片的src
									arr.push($(this).context.src);
								}
							})
			            }
		          }
			browserRedirect($("[datLading='datLading']"));
				var iLength = 0;				
				for (var i = 0; i < arr.length; i++) {		
					
					var oImg =new Image();
					oImg.src = arr[i];
					oImg.onload=function()
					{
						iLength++;	
						$(".lading-span").animate({//进度条运动的width -->100%
							width : parseInt(iLength/arr.length*100)+'%'
						},50);
						
						$(".lading-div span").text(parseInt(iLength/arr.length*100)+'%'); 
													
						if(iLength == arr.length)//这里就是已经加载完毕了
						{							
							$(".lading").hide();//进度条的div隐藏
						}	
					};
					oImg.onerror=function()
					{
						setTimeout(function(){
							iLength++;	
							$(".lading-span").animate({//进度条运动的width -->100%
								width : parseInt(iLength/arr.length*100)+'%'
							},50);
							
							$(".lading-div span").text(parseInt(iLength/arr.length*100)+'%'); 
														
							if(iLength == arr.length)//这里就是已经加载完毕了
							{							
								$(".lading").hide();//进度条的div隐藏
							}
						},1500)
					};					
				}
			//屏蔽ios下上下弹性
			$(window).on('scroll.elasticity', function (e) {
				 e.preventDefault();
			}).on('touchmove.elasticity', function (e) {
				 e.preventDefault();
			});				
			//动态设置翻页的图层
			$(".ul_book li").css("z-index",'99');
			$(".ul_book li").each(function(index){
				$(this).css('z-index',$(this).css('z-index')-index);
			})		
			$(".hand").bind("click",function(){
				//纸张抽出
				$(".conatiner i").addClass(" An-tops ");
				//隐藏纸
				setTimeout(function(){
					$(".conatiner i").hide();
				},2000)
				$(".div-eye").addClass(" An-eye ");
				
				$("#book").addClass("An-scaleSHU");
				setTimeout(function(){
					$(".ul li").eq(0).addClass("active");
					$(".img2").show();
					$("#book ul >.first-Li:after").show();
					$(".div-pan").addClass(" pan-top ");
					$(".li-page2 .page-text").css("overflow","initial");
				},3000)				
			})
			  $(".ul >li").css("z-index",'99');
				   $(".ul >li").each(function(index){
					$(this).css('z-index',$(this).css('z-index')-index);
				})
			   var ne = MonoEvent;
				 box = ne( $(".ul >li"));
				 box.on('swipeLeft swipeRight', function(e){
				 	e.stopPropagation();
						if(e.type == 'swipeLeft')
						{
							var oIndex = $(this).index();							
							if (oIndex ==1) {//两个标签淡入	
								$(this).addClass("active");
								$(".li3 .a_person").addClass("toBotton");
								$(".li3 .per-d").addClass("toBotton");
							}							
						}
			　　   })
				//点击下载之后的操作
				$(".a_person").bind("touchstart",function(){
					$(this).addClass("An-todowTop");
					$(".per-d").fadeOut(400);
					$(".span-prev").show();
					
					setTimeout(function(){
						$(".li3-table").addClass("off An-tableShow");
					},1000)
				})
				//添加的返回按钮
				$(".span-prev").bind("touchstart",function(){
					$(this).hide();
					$(".li3-table").removeClass("off An-tableShow");
					$(".a_person").removeClass("An-todowTop");
					$(".per-d").fadeIn(400);
				})
				
				$(".last-btn").bind("touchstart",function(){
					//弹出框出现
					$(".herf").addClass("off");
					$(".herf-alert").addClass("An-tableShow");
				})
				
				//我要测试按钮
				$(".per-d").bind("touchstart",function(){
					$(this).parents(".li3").addClass("active");
				})
				//测试题的选择标签
				$(".li4 ol li").bind("touchstart",function(){
					//清空状态
//					$(this).removeClass("An-coloer An-coloer1");
//					$(this).find("i").removeClass("correct colse  off");
					
					//选择状态后台程序 自己给if判断加class
					
					$(this).addClass("An-coloer");
					$(this).find("i").addClass("correct off");
					
					//等1s翻页
					$(this).parents(".li4").addClass("active");	
					
					setTimeout(function(){
						$(".prize").fadeIn(400);					
						//获得0-2的随机生成数
						var  oRandomNum = Math.floor(Math.random()*3)					
						$(".prize-alert").eq(oRandomNum).addClass("off An-tableShow");
						
						//监听动画结束之后的操作
						var op = document.getElementsByClassName("prize-alert");
						for(var i =0; i<op.length;i++){
							op[i].addEventListener("webkitAnimationEnd",function(){
								$(".prize-alert").removeClass("An-tableShow");
								$(".prize-alert").eq(oRandomNum).addClass("An-leftToRight");
							},false)
						}
					},900)

					//根据last-AN-LI这个标记 判断是否是答题的最后1个
					if ($(this).parents(".li4").hasClass("last-AN-LI")) {
						$(".halo").hide();
						$(".conatiner i").hide();
						$("#book").fadeOut(400);
						//纸张从上往下滑落
						$(".mark").addClass("off An-markShow");	
					}					  
				})				
				//查看答案
				$(".answer").bind("touchstart",function(){
					//小调查显示				
					$(".mark").removeClass("off").hide();
					$(".examine").fadeIn();
					$(".flrst-a").addClass("An-ToRight");
					$(".table-qx").addClass("An-bottom-top");
					$(".div-pan").hide();
					setTimeout(function(){
						$(".examine .last-a").addClass("An-leftToRight");
					},1000)
				})				
				//小调查里面的表单点击
				$(".table-qx ul li").bind("touchstart",function(){
					//小调查显示	
					$(".table-qx ul li b").removeClass("b_bg");
					$(this).find("b").addClass("b_bg");					
				})
				$(".examine .last-a").bind("touchstart",function(){
					//小调查显示	
					//弹出框表单出现
					$(".alert-bm").addClass("off");
					$(".alert-bm .ul-alert").addClass("An-tableShow");
				})	
				
				//弹出框的关闭按钮
				var oclose =  $(".alert-bm .ul-alert li:nth-of-type(1) b");
				var oclose2 =  $(".herf .herf-alert li:nth-of-type(1) b");
				
				oclose.bind("touchstart",function(){
					$(".alert-bm .ul-alert").removeClass("An-tableShow");
					$(".alert-bm").removeClass("off").fadeOut(2000);	
				})
				
				oclose2.bind("touchstart",function(){
					$(".herf .herf-alert").removeClass("An-tableShow");
					$(".herf").removeClass("off").fadeOut(2000);	
				})				
				//分享朋友圈
				$(".share").bind("touchstart",function(){
					$(".div-pan").show();
//					$(".mark").removeClass("off");
					$(".friend").addClass("off");
					$(".friend img").addClass("An-top-right");
				})
				//点击朋友圈隐藏浮层
				$(".friend ").bind("touchstart",function(){
					$(".friend").removeClass("off").fadeOut(2000);
					$(".friend img").removeClass("An-top-right");
				})
				//给最后一道题添加1个标记---->触发成绩单   last-AN-LI
				$(".li4:last-child").addClass("last-AN-LI");
				
				//我要领奖的随机弹出框
//				$("#btn").bind("touchstart",function(){
//					$(".prize").fadeIn(400);					
//					//获得0-2的随机生成数
//					var  oRandomNum = Math.floor(Math.random()*3)					
//					$(".prize-alert").eq(oRandomNum).addClass("off An-tableShow");
//				})
//				
//				$(".prize-alert b").bind("touchstart",function(){
//					$(".prize").fadeOut(400);
//					$(".prize-alert").removeClass("off An-tableShow");
//				})
				
				//答题确定按钮隐藏
				$(".prize-alert .sure >a").bind("touchstart",function(){
				    $(".prize").fadeOut(400);
					$(".prize-alert").removeClass("off An-tableShow An-leftToRight");
				})				
		})