            var subBrandHtml = "";
			$(function(){
				var   brandJsons = null;
				var   brandsHtml = "";
				var   brandId = "";
				var   loadWordHtml = "";
				var   brandGroupName = "";
				
				brandJsons =[
    {
        "groupName": "A",
        "brandName": "奥迪",
        "brandId": 1
    },
    {
        "groupName": "A",
        "brandName": "阿斯顿·马丁",
        "brandId": 56
    },
    {
        "groupName": "B",
        "brandName": "宝马",
        "brandId": 2
    },
    {
        "groupName": "B",
        "brandName": "奔驰",
        "brandId": 3
    },
    {
        "groupName": "B",
        "brandName": "别克",
        "brandId": 13
    },
    {
        "groupName": "B",
        "brandName": "本田",
        "brandId": 17
    },
    {
        "groupName": "B",
        "brandName": "标致",
        "brandId": 5
    },
    {
        "groupName": "B",
        "brandName": "比亚迪",
        "brandId": 27
    },
    {
        "groupName": "B",
        "brandName": "保时捷",
        "brandId": 52
    },
    {
        "groupName": "B",
        "brandName": "北京",
        "brandId": 88
    },
    {
        "groupName": "B",
        "brandName": "北汽绅宝",
        "brandId": 135
    },
    {
        "groupName": "B",
        "brandName": "宝骏",
        "brandId": 109
    },
    {
        "groupName": "B",
        "brandName": "北汽幻速",
        "brandId": 179
    },
    {
        "groupName": "B",
        "brandName": "北汽威旺",
        "brandId": 129
    },
    {
        "groupName": "B",
        "brandName": "北汽新能源",
        "brandId": 184
    },
    {
        "groupName": "B",
        "brandName": "北汽制造",
        "brandId": 123
    },
    {
        "groupName": "B",
        "brandName": "奔腾",
        "brandId": 105
    },
    {
        "groupName": "B",
        "brandName": "宾利",
        "brandId": 57
    },
    {
        "groupName": "B",
        "brandName": "布加迪",
        "brandId": 58
    },
    {
        "groupName": "B",
        "brandName": "巴博斯",
        "brandId": 118
    },
    {
        "groupName": "C",
        "brandName": "长城",
        "brandId": 30
    },
    {
        "groupName": "C",
        "brandName": "长安汽车",
        "brandId": 29
    },
    {
        "groupName": "C",
        "brandName": "长安商用",
        "brandId": 130
    },
    {
        "groupName": "C",
        "brandName": "昌河",
        "brandId": 28
    },
    {
        "groupName": "C",
        "brandName": "成功汽车",
        "brandId": 189
    },
    {
        "groupName": "D",
        "brandName": "大众",
        "brandId": 4
    },
    {
        "groupName": "D",
        "brandName": "DS",
        "brandId": 124
    },
    {
        "groupName": "D",
        "brandName": "道奇",
        "brandId": 11
    },
    {
        "groupName": "D",
        "brandName": "东南",
        "brandId": 34
    },
    {
        "groupName": "D",
        "brandName": "东风",
        "brandId": 33
    },
    {
        "groupName": "D",
        "brandName": "东风风行",
        "brandId": 131
    },
    {
        "groupName": "D",
        "brandName": "东风风神",
        "brandId": 90
    },
    {
        "groupName": "D",
        "brandName": "东风风度",
        "brandId": 163
    },
    {
        "groupName": "D",
        "brandName": "东风小康",
        "brandId": 127
    },
    {
        "groupName": "F",
        "brandName": "福特",
        "brandId": 10
    },
    {
        "groupName": "F",
        "brandName": "丰田",
        "brandId": 18
    },
    {
        "groupName": "F",
        "brandName": "菲亚特",
        "brandId": 6
    },
    {
        "groupName": "F",
        "brandName": "福田",
        "brandId": 76
    },
    {
        "groupName": "F",
        "brandName": "法拉利",
        "brandId": 59
    },
    {
        "groupName": "F",
        "brandName": "福迪",
        "brandId": 116
    },
    {
        "groupName": "F",
        "brandName": "福汽启腾",
        "brandId": 178
    },
    {
        "groupName": "G",
        "brandName": "观致",
        "brandId": 119
    },
    {
        "groupName": "G",
        "brandName": "广汽传祺",
        "brandId": 103
    },
    {
        "groupName": "G",
        "brandName": "广汽吉奥",
        "brandId": 92
    },
    {
        "groupName": "G",
        "brandName": "GMC",
        "brandId": 104
    },
    {
        "groupName": "G",
        "brandName": "光冈",
        "brandId": 111
    },
    {
        "groupName": "H",
        "brandName": "哈弗",
        "brandId": 139
    },
    {
        "groupName": "H",
        "brandName": "海马",
        "brandId": 38
    },
    {
        "groupName": "H",
        "brandName": "海马郑州",
        "brandId": 132
    },
    {
        "groupName": "H",
        "brandName": "华泰",
        "brandId": 80
    },
    {
        "groupName": "H",
        "brandName": "哈飞",
        "brandId": 37
    },
    {
        "groupName": "H",
        "brandName": "红旗",
        "brandId": 106
    },
    {
        "groupName": "H",
        "brandName": "黄海",
        "brandId": 91
    },
    {
        "groupName": "H",
        "brandName": "华颂",
        "brandId": 191
    },
    {
        "groupName": "H",
        "brandName": "恒天",
        "brandId": 125
    },
    {
        "groupName": "H",
        "brandName": "汇众",
        "brandId": 138
    },
    {
        "groupName": "H",
        "brandName": "海格",
        "brandId": 164
    },
    {
        "groupName": "J",
        "brandName": "吉利",
        "brandId": 26
    },
    {
        "groupName": "J",
        "brandName": "Jeep",
        "brandId": 77
    },
    {
        "groupName": "J",
        "brandName": "江淮",
        "brandId": 44
    },
    {
        "groupName": "J",
        "brandName": "捷豹",
        "brandId": 60
    },
    {
        "groupName": "J",
        "brandName": "金杯",
        "brandId": 39
    },
    {
        "groupName": "J",
        "brandName": "江铃",
        "brandId": 79
    },
    {
        "groupName": "J",
        "brandName": "金龙",
        "brandId": 169
    },
    {
        "groupName": "J",
        "brandName": "金旅",
        "brandId": 170
    },
    {
        "groupName": "J",
        "brandName": "九龙",
        "brandId": 171
    },
    {
        "groupName": "K",
        "brandName": "凯迪拉克",
        "brandId": 69
    },
    {
        "groupName": "K",
        "brandName": "克莱斯勒",
        "brandId": 12
    },
    {
        "groupName": "K",
        "brandName": "凯翼",
        "brandId": 185
    },
    {
        "groupName": "K",
        "brandName": "开瑞",
        "brandId": 99
    },
    {
        "groupName": "K",
        "brandName": "科尼赛克",
        "brandId": 121
    },
    {
        "groupName": "K",
        "brandName": "卡威",
        "brandId": 183
    },
    {
        "groupName": "K",
        "brandName": "KTM",
        "brandId": 165
    },
    {
        "groupName": "K",
        "brandName": "康迪",
        "brandId": 200
    },
    {
        "groupName": "L",
        "brandName": "雷克萨斯",
        "brandId": 71
    },
    {
        "groupName": "L",
        "brandName": "铃木",
        "brandId": 19
    },
    {
        "groupName": "L",
        "brandName": "雷诺",
        "brandId": 63
    },
    {
        "groupName": "L",
        "brandName": "路虎",
        "brandId": 65
    },
    {
        "groupName": "L",
        "brandName": "林肯",
        "brandId": 70
    },
    {
        "groupName": "L",
        "brandName": "力帆",
        "brandId": 40
    },
    {
        "groupName": "L",
        "brandName": "理念",
        "brandId": 112
    },
    {
        "groupName": "L",
        "brandName": "陆风",
        "brandId": 45
    },
    {
        "groupName": "L",
        "brandName": "猎豹汽车",
        "brandId": 31
    },
    {
        "groupName": "L",
        "brandName": "莲花汽车",
        "brandId": 108
    },
    {
        "groupName": "L",
        "brandName": "兰博基尼",
        "brandId": 61
    },
    {
        "groupName": "L",
        "brandName": "劳斯莱斯",
        "brandId": 62
    },
    {
        "groupName": "L",
        "brandName": "路特斯",
        "brandId": 24
    },
    {
        "groupName": "L",
        "brandName": "雷丁",
        "brandId": 186
    },
    {
        "groupName": "L",
        "brandName": "LOCAL MOTORS",
        "brandId": 203
    },
    {
        "groupName": "M",
        "brandName": "马自达",
        "brandId": 14
    },
    {
        "groupName": "M",
        "brandName": "MG",
        "brandId": 15
    },
    {
        "groupName": "M",
        "brandName": "MINI",
        "brandId": 54
    },
    {
        "groupName": "M",
        "brandName": "玛莎拉蒂",
        "brandId": 66
    },
    {
        "groupName": "M",
        "brandName": "迈凯伦",
        "brandId": 126
    },
    {
        "groupName": "M",
        "brandName": "摩根",
        "brandId": 175
    },
    {
        "groupName": "N",
        "brandName": "纳智捷",
        "brandId": 113
    },
    {
        "groupName": "O",
        "brandName": "讴歌",
        "brandId": 72
    },
    {
        "groupName": "O",
        "brandName": "欧朗",
        "brandId": 117
    },
    {
        "groupName": "Q",
        "brandName": "起亚",
        "brandId": 22
    },
    {
        "groupName": "Q",
        "brandName": "奇瑞",
        "brandId": 25
    },
    {
        "groupName": "Q",
        "brandName": "启辰",
        "brandId": 114
    },
    {
        "groupName": "Q",
        "brandName": "骐铃",
        "brandId": 195
    },
    {
        "groupName": "R",
        "brandName": "日产",
        "brandId": 20
    },
    {
        "groupName": "R",
        "brandName": "荣威",
        "brandId": 46
    },
    {
        "groupName": "S",
        "brandName": "三菱",
        "brandId": 21
    },
    {
        "groupName": "S",
        "brandName": "斯柯达",
        "brandId": 7
    },
    {
        "groupName": "S",
        "brandName": "斯巴鲁",
        "brandId": 73
    },
    {
        "groupName": "S",
        "brandName": "smart",
        "brandId": 83
    },
    {
        "groupName": "S",
        "brandName": "双龙",
        "brandId": 75
    },
    {
        "groupName": "S",
        "brandName": "思铭",
        "brandId": 120
    },
    {
        "groupName": "S",
        "brandName": "双环",
        "brandId": 47
    },
    {
        "groupName": "S",
        "brandName": "上汽大通",
        "brandId": 134
    },
    {
        "groupName": "T",
        "brandName": "TESLA",
        "brandId": 142
    },
    {
        "groupName": "T",
        "brandName": "腾势",
        "brandId": 122
    },
    {
        "groupName": "W",
        "brandName": "沃尔沃",
        "brandId": 9
    },
    {
        "groupName": "W",
        "brandName": "五菱",
        "brandId": 82
    },
    {
        "groupName": "W",
        "brandName": "五十铃",
        "brandId": 145
    },
    {
        "groupName": "W",
        "brandName": "威兹曼",
        "brandId": 128
    },
    {
        "groupName": "X",
        "brandName": "雪佛兰",
        "brandId": 16
    },
    {
        "groupName": "X",
        "brandName": "现代",
        "brandId": 23
    },
    {
        "groupName": "X",
        "brandName": "雪铁龙",
        "brandId": 8
    },
    {
        "groupName": "X",
        "brandName": "西雅特",
        "brandId": 86
    },
    {
        "groupName": "Y",
        "brandName": "英菲尼迪",
        "brandId": 74
    },
    {
        "groupName": "Y",
        "brandName": "一汽",
        "brandId": 50
    },
    {
        "groupName": "Y",
        "brandName": "依维柯",
        "brandId": 81
    },
    {
        "groupName": "Y",
        "brandName": "永源",
        "brandId": 35
    },
    {
        "groupName": "Y",
        "brandName": "野马汽车",
        "brandId": 115
    },
    {
        "groupName": "Y",
        "brandName": "英致",
        "brandId": 182
    },
    {
        "groupName": "Z",
        "brandName": "中华",
        "brandId": 41
    },
    {
        "groupName": "Z",
        "brandName": "中兴汽车",
        "brandId": 93
    },
    {
        "groupName": "Z",
        "brandName": "众泰",
        "brandId": 51
    },
    {
        "groupName": "Z",
        "brandName": "知豆",
        "brandId": 201
    }
];
	                   /***  for(var i=0;i<brandJsons.length;i++){//这里边是车牌groupName已经按A/B/C/D排好序的写的
	                      	brandId = brandJsons[i].brandId;
	                      	if(i==0 || (i>0 && brandJsons[i].groupName !=brandJsons[i-1].groupName)){
	                      	brandsHtml += "<dt>"+brandJsons[i].groupName+"</dt>";
	                      	}
	                      	brandsHtml += "<dd  id='"+brandId+"'><img src='img/car_icon02.png' alt=''/><span class='span_cut2'>"+brandJsons[i].brandName+"</span></dd>";
	                      }
	                      $("#brands").html('');
	                      $("#brands").html(brandsHtml);
	                      if(brandJsons.length>1){
	                      	$("#brands  dd:eq(0)").addClass("dl_color");
	                      	loadSubBrand(brandJsons[0].brandId);
	                      }
	                      
						  $(".dl_left dd").click(function(){
							$(this).addClass("dl_color").siblings("dd").removeClass("dl_color");
							brandId  =$(this).attr("id");
							loadSubBrand(brandId);
						  })**/
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
						  $(".dl_left dd").click(function(){
							$(this).addClass("dl_color").siblings("dd").removeClass("dl_color");
							brandId  =$(this).attr("id");
							loadSubBrand(brandId);
						  })
                      	
				        /** $(".bb").click(function(){
							
							var oDdWidth = $(".dl_left dd").outerHeight();//dd高度
							var oDtWidth = $(".dl_left dt").outerHeight();//dt高度
						    var dtNumLength = $(this).find(".dtNum").text();
							var ddNumLength = $(this).find(".ddNum").text();
							var totalLength = dtNumLength*oDtWidth+(oDdWidth*ddNumLength);
							//这里900是需要滚动的值你的给他写成变量
							$(".dl_left").animate({
								'scrollTop': totalLength
							}, 300)
				        })

						/* $("#loadWork li").click(function(){
							var workId  =$(this).attr("id");
							workIdid = workId+workId;
							/**var oDdWidth = $(".dl_left dd").outerHeight();//dd高度
							var oDtWidth = $(".dl_left dt").outerHeight();//dt高度
							alert(oDdWidth+"----------"+oDtWidth);
						    var dtNumLength = $(this).find(".dtNum").text();
							var ddNumLength = $(this).find(".ddNum").text();
							var totalLength = dtNumLength*oDtWidth+(oDdWidth*ddNumLength);
							$(".dl_left").animate({
								'scrollTop': 0
							}, 300)
							var totalLength = $("#"+workIdid).offset().top;
							alert(totalLength+"========"+workIdid);
							//这里900是需要滚动的值你的给他写成变量
							$(".dl_left").animate({
								'scrollTop': totalLength
							}, 300)
				        })*/

			})
			function loadSubBrand(brandId){
				var subBrandJsons;
			
                          subBrandJsons =[
    {
        "seriesName": "奥迪A3两厢",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 2365,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A3三厢",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 2547,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A4L",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 553,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A6L",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 8,
        "brandId": 1
    },
    {
        "seriesName": "奥迪Q3",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 1784,
        "brandId": 1
    },
    {
        "seriesName": "奥迪Q5",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 758,
        "brandId": 1
    },
    {
        "seriesName": "奥迪100",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 1658,
        "brandId": 1
    },
    {
        "seriesName": "奥迪200",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 1659,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A4",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 1731,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A6",
        "subBrandName": "一汽-大众奥迪",
        "seriesId": 1732,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A1",
        "subBrandName": "奥迪(进口)",
        "seriesId": 575,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A3 e-tron",
        "subBrandName": "奥迪(进口)",
        "seriesId": 2450,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A3敞篷",
        "subBrandName": "奥迪(进口)",
        "seriesId": 2394,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A3两厢(进口)",
        "subBrandName": "奥迪(进口)",
        "seriesId": 694,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A3三厢(进口)",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1885,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A4 allroad",
        "subBrandName": "奥迪(进口)",
        "seriesId": 2,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A5敞篷",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1437,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A5双门",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1436,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A5掀背",
        "subBrandName": "奥迪(进口)",
        "seriesId": 4,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A6混合动力",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1645,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A7",
        "subBrandName": "奥迪(进口)",
        "seriesId": 957,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A8L",
        "subBrandName": "奥迪(进口)",
        "seriesId": 7,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A8L混合动力",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1543,
        "brandId": 1
    },
    {
        "seriesName": "奥迪Q3(进口)",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1287,
        "brandId": 1
    },
    {
        "seriesName": "奥迪Q5(进口)",
        "subBrandName": "奥迪(进口)",
        "seriesId": 439,
        "brandId": 1
    },
    {
        "seriesName": "奥迪Q5混合动力",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1597,
        "brandId": 1
    },
    {
        "seriesName": "奥迪Q7",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1,
        "brandId": 1
    },
    {
        "seriesName": "奥迪R8",
        "subBrandName": "奥迪(进口)",
        "seriesId": 5,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S3三厢",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1887,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S5敞篷",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1439,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S5双门",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1438,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S5掀背",
        "subBrandName": "奥迪(进口)",
        "seriesId": 627,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S6",
        "subBrandName": "奥迪(进口)",
        "seriesId": 452,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S7",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1522,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S8",
        "subBrandName": "奥迪(进口)",
        "seriesId": 6,
        "brandId": 1
    },
    {
        "seriesName": "奥迪SQ5",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1785,
        "brandId": 1
    },
    {
        "seriesName": "奥迪TTS敞篷",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1442,
        "brandId": 1
    },
    {
        "seriesName": "奥迪TTS双门",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1441,
        "brandId": 1
    },
    {
        "seriesName": "奥迪TT敞篷",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1440,
        "brandId": 1
    },
    {
        "seriesName": "奥迪TT双门",
        "subBrandName": "奥迪(进口)",
        "seriesId": 3,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A6 allroad",
        "subBrandName": "奥迪(进口)",
        "seriesId": 3014,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A1掀背",
        "subBrandName": "奥迪(进口)",
        "seriesId": 2715,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A2",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1026,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A4 Avant",
        "subBrandName": "奥迪(进口)",
        "seriesId": 3005,
        "brandId": 1
    },
    {
        "seriesName": "奥迪A4(进口)",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1780,
        "brandId": 1
    },
    {
        "seriesName": "奥迪Q1",
        "subBrandName": "奥迪(进口)",
        "seriesId": 2641,
        "brandId": 1
    },
    {
        "seriesName": "奥迪Q7混合动力",
        "subBrandName": "奥迪(进口)",
        "seriesId": 2862,
        "brandId": 1
    },
    {
        "seriesName": "奥迪R18",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1916,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S1",
        "subBrandName": "奥迪(进口)",
        "seriesId": 2480,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S3敞篷",
        "subBrandName": "奥迪(进口)",
        "seriesId": 2491,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S3两厢",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1027,
        "brandId": 1
    },
    {
        "seriesName": "奥迪S4",
        "subBrandName": "奥迪(进口)",
        "seriesId": 1917,
        "brandId": 1
    },
    {
        "seriesName": "奥迪RS5",
        "subBrandName": "奥迪RS",
        "seriesId": 1521,
        "brandId": 1
    },
    {
        "seriesName": "奥迪RS7",
        "subBrandName": "奥迪RS",
        "seriesId": 1825,
        "brandId": 1
    },
    {
        "seriesName": "奥迪RS Q3",
        "subBrandName": "奥迪RS",
        "seriesId": 1536,
        "brandId": 1
    },
    {
        "seriesName": "奥迪RS3",
        "subBrandName": "奥迪RS",
        "seriesId": 1624,
        "brandId": 1
    },
    {
        "seriesName": "奥迪RS4",
        "subBrandName": "奥迪RS",
        "seriesId": 691,
        "brandId": 1
    },
    {
        "seriesName": "奥迪RS6",
        "subBrandName": "奥迪RS",
        "seriesId": 1625,
        "brandId": 1
    },
    {
        "seriesName": "奥迪TT RS ",
        "subBrandName": "奥迪RS",
        "seriesId": 1626,
        "brandId": 1
    }
];
subBrandHtml="";
if(brandId=="135"){
	subBrandJsons =[{
        "seriesName": "奥迪TT RS ",
        "subBrandName": "奥迪RS",
        "seriesId": 1626,
        "brandId": 1
    }];
}
	                     /** for(var i=0;i<subBrandJsons.length;i++){
	                      	subBrandHtml+="<li class='li_active'><a href='#'><p>"+subBrandJsons[i].seriesName+"</p><i class='right'></i></a></li>";
	                        loadSubBrandOl(subBrandJsons[i].seriesId);
	                      }
	                      $("#subrands").html('');
	                      $("#subrands").html(subBrandHtml);
	                      $(".div_right ul .li_active").click(function(){
							$(this).next("ol").toggle(500);
							$(this).find("i").toggleClass("class_bg");
							$(this).toggleClass("li_bg");
						  })**/


							   for(var i=0;i<subBrandJsons.length;i++){
							   if(i==0||(i>0 && subBrandJsons[i].subBrandName!=subBrandJsons[i-1].subBrandName)){
								   subBrandHtml+="<b class=\"color_b\">"+subBrandJsons[i].subBrandName+"</b>";
							   }
	                      	subBrandHtml+="<li class='li_active'><a href=\"#\" style=\"border-top: 1px solid #ededed;\"><img src=\"http://uchi.oss-cn-beijing.aliyuncs.com/uchi/CarImages/carSeries/"+subBrandJsons[i].seriesId+".png\" alt=\"\"/><span>"+subBrandJsons[i].seriesName+"</span><i class='right'></i></a></li>";
	                        loadSubBrandOl(subBrandJsons[i].seriesId);
	                      }
	                      $("#subrands").html('');
	                      $("#subrands").html(subBrandHtml);
	                      $(".div_right ul .li_active").click(function(){
							$(this).next("ol").toggle(500);
							$(this).find("i").toggleClass("class_bg");
							$(this).toggleClass("li_bg");
						  })
                
			}
			function loadSubBrandOl(seriesId){
				var subBrandOlJson;
				
                          subBrandOlJson =[
    {
        "isSale": 0,
        "carId": 25241,
        "engine": "-",
        "subSeriesName": "2015款东风小康K01",
        "carName": "0.9L 标准型AF9-03"
    },
    {
        "isSale": 0,
        "carId": 25242,
        "engine": "1.1L",
        "subSeriesName": "2015款东风小康K01",
        "carName": "1.1L 标准型长轴版AF11-05"
    },
    {
        "isSale": 0,
        "carId": 25243,
        "engine": "1.2L",
        "subSeriesName": "2015款东风小康K01",
        "carName": "1.2L 标准型长轴版DK12-05"
    }
];

                          subBrandHtml+="<ol>";
	                      for(var i=0;i<subBrandOlJson.length;i++){
	                      	subBrandHtml+="<li><a href=\"#\">"+subBrandOlJson[i].subSeriesName+subBrandOlJson[i].engine+subBrandOlJson[i].carName+"</a></li>";
	                      } 
	                      subBrandHtml+="</ol>";
                      
                      	
				
			}
			