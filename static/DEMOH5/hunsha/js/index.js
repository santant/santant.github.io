'use strict';


    /*操作 添加 删除 class*/
    function hasClass(obj, cls) {
          return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    }

    function addClass(obj, cls) {
      if (!hasClass(obj, cls)) obj.className += " " + cls;
    }

    function removeClass(obj, cls) {
      if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
      }
    }


    /*第一屏*/
    function an1(){
        var oA1 = document.querySelectorAll('.animated1');
        var timer = null;
        for(var i=0;i<oA1.length;i++){
            addClass(oA1[0],'go');
            (function(index){
                if(oA1[index+1]){
                    if(index == 3){
                        oA1[index].addEventListener('webkitAnimationStart',function(){
                            timer = setTimeout(function(){
                                addClass(oA1[index+1],'go')
                            },100)

                        },false)
                    }else{
                        oA1[index].addEventListener('webkitAnimationEnd',function(){
                          addClass(oA1[index+1],'go');
                        },false)
                    }
                }
            })(i)
        }
    }



    /*第二屏*/
    function an2(){
        var oA2 = document.querySelectorAll('.animated2');
        addClass(oA2[0],'go');
        addClass(oA2[1],'go');
        for(var i=0;i<oA2.length;i++){
            (function(index){
                oA2[index].addEventListener('webkitAnimationEnd',function(){
                    if(oA2[index+1]){
                           addClass(oA2[index+1],'go');
                    }
                },false)
            })(i)
        }
    }


    /*第三屏*/
    function an3(){
        var oA3 = document.querySelectorAll('.animated3');

        for(var i=0;i<oA3.length;i++){
            addClass(oA3[0],'biu');
            addClass(oA3[1],'biu');
            (function(index){
                oA3[index].addEventListener('webkitAnimationEnd',function(){
                    if(oA3[index+1]){
                           addClass(oA3[index+1],'biu');
                    }
                },false)
            })(i)
        }
    }


    /*第四屏*/
    function an4(){
        var oA4 = document.querySelectorAll('.animated4');

        for(var i=0;i<oA4.length;i++){
            addClass(oA4[0],'go');
            addClass(oA4[1],'go');
            (function(index){
                oA4[index].addEventListener('webkitAnimationEnd',function(){
                    if(oA4[index+1]){
                        addClass(oA4[index+1],'go');
                    }
                },false)
            })(i)
        }
    }


    /*第五屏*/
    function an5(){
        var oA5 = document.querySelectorAll('.animated5');

        for(var i=0;i<oA5.length;i++){

            addClass(oA5[1],'go');
            (function(index){
                oA5[index].addEventListener('webkitAnimationEnd',function(){
                    if(oA5[index+1]){
                        addClass(oA5[index+1],'go');
                    }
                },false)
            })(i)
        }
    }

     /*按钮轮播*/




    /*第六屏*/
    function an6(){
        var oA6 = document.querySelectorAll('.animated6');

        for(var i=0;i<oA6.length;i++){
            addClass(oA6[0],'go');

            (function(index){
                oA6[index].addEventListener('webkitAnimationEnd',function(){
                    if(oA6[index+1]){
                        addClass(oA6[index+1],'go');
                    }
                },false)
            })(i)
        }
    }

    /*第七屏*/
    function an7(){
        var oA7 = document.querySelectorAll('.animated7');

        for(var i=0;i<oA7.length;i++){
            addClass(oA7[0],'go');
            addClass(oA7[1],'go');
            (function(index){
                oA7[index].addEventListener('webkitAnimationEnd',function(){
                    if(oA7[index+1]){

                        if(index == 2){
                            addClass(oA7[index+1],'go');
                            addClass(oA7[index+2],'go');
                        }else{
                            addClass(oA7[index+1],'go');
                        }
                    }
                },false)
            })(i)
        }
    }

    /*整页滑动*/

    /*var bigBox = document.querySelector('.wrap');
        var aBox = bigBox.children;
        var h = bigBox.offsetHeight;
        var iNow = 0;
        var touchY,
            disY;

        function start(ev){
                  ev.preventDefault();
                  bigBox.style.WebkitTransition='all 0s ease';

                  touchY = ev.targetTouches[0].pageY;

                  document.addEventListener('touchmove',move,false)
                  document.addEventListener('touchend',end,false)
              }

              function move(ev){
                  ev.preventDefault();
                  disY = ev.changedTouches[0].pageY-touchY;
                  bigBox.style.WebkitTransform='translate3D(0,'+(disY-iNow*h)+'px'+',0)';
              }

              function end(ev){
                  ev.preventDefault();
                  document.removeEventListener('touchmove',move,false);
                  document.removeEventListener('touchend',end,false);
                  bigBox.style.WebkitTransition='all 0.3s ease';

                  if(Math.abs(disY)>150){
                    if(disY<0){
                      iNow++;
                      if(iNow>aBox.length-1){
                        iNow=aBox.length-1;
                      }
                  }else if(disY > 0){
                      iNow--;
                      if(iNow<0){
                        iNow = 0;
                      }
                  }
                    bigBox.style.WebkitTransform='translate3D(0,'+(-iNow*h)+'px'+',0)';
                  }
                  bigBox.style.WebkitTransform='translate3D(0,'+(-iNow*h)+'px'+',0)';
              }

              document.addEventListener('touchstart',start,false)*/


    function flip(obj,json){
          var json=json || {};
          /*options*/
          json.options = json.options || {};
          json.options.time = json.options.time || '.5s';
          json.options.distance = json.options.distance || 150;
          json.options.type = json.options.type || 'move';
          json.options.degree = json.options.degree || 'once';
          json.options.timing = json.options.timing || 'ease';

        if(json['options']['driven'] == false){
            json.options.driven = json.options.driven;
        }else{
            json.options.driven = true;
        }


        /*callback*/
          json.callBack = json.callBack || {};
          json.callBack.page = json.callBack.page || [];
          json.callBack.fn = json.callBack.fn || [];
          var oBox = document.querySelector(obj);
          var aPage = oBox.children;
          var h = oBox.offsetHeight;
          var iNow = 0;


        /*如果回调函数在第一页  加载后立即执行*/
          if((json['callBack']['page'].length != 0) && (json['callBack']['page'][0] == 0)){
            json['callBack']['fn'][0]();
          }
          document.addEventListener('touchstart',function(ev){
            oBox.style.WebkitTransition='all 0s ease';
            var touchX = ev.targetTouches[0].pageX;
            var touchY = ev.targetTouches[0].pageY;
            var disX;
            var disY;
            /*防止一次滚动多页*/
            var go = true;


            /*回调函数*/
            function callGo(iNow){
              if((json['callBack']['page'].length == 0) || (json['callBack']['fn'].length == 0))  return;
              oBox.removeEventListener('webkitTransitionEnd',callGo,false);
              for(var i = 0; i < json['callBack']['page'].length; i++){
                (function(index){
                  if(json['callBack']['page'][index] == iNow){
                    json['callBack']['fn'][index] && json['callBack']['fn'][index]();
                    if(json['options']['degree'] == 'once'){
                      json['callBack']['page'].shift();
                      json['callBack']['fn'].shift();
                    }
                  }
                })(i)
              }
            }


            /*翻页*/
            function changePage(){
                 if(Math.abs(disY) > json['options']['distance']){
                        oBox.style.WebkitTransition = 'all '+json['options']['time']+' '+json['options']['timing'];
                        if(disY < 0){
                              iNow++;
                              if(iNow > aPage.length-1){
                                iNow = aPage.length-1;
                              }
                              go = false;
                              /*回调函数只触发一次*/
                              if(json['options']['degree'] == 'once'){
                                oBox.style.WebkitTransform = 'translate3D(0,'+(-iNow*h)+'px'+',0)';
                                if(json['callBack']['page'] && json['callBack']['fn']){
                                  aPage[iNow].addEventListener('webkitTransitionEnd',callGo(iNow),false);
                                }
                              }
                        }else if(disY > 0){
                              iNow--;
                              if(iNow < 0){
                                iNow = 0;
                              }
                              go = false;
                              if(json['options']['degree'] == 'once'){
                                oBox.style.WebkitTransform = 'translate3D(0,'+(-iNow*h)+'px'+',0)';
                              }
                        }
                        //每次翻到回调函数那页都会触发
                        //如果options.time时间过长 在翻页完成前来回翻页会多次触发当页的callback
                        if(json['options']['degree'] == 'repeatedly'){
                              oBox.style.WebkitTransform = 'translate3D(0,'+(-iNow*h)+'px'+',0)';
                              if(json['callBack']['page'] && json['callBack']['fn']){
                                aPage[iNow].addEventListener('webkitTransitionEnd',callGo(iNow),false);
                              }
                        }
                  }
            }


            /*滑动*/
            function move(ev){
                  ev.preventDefault();
                  if(!go) return;
                  disX = ev.changedTouches[0].pageX-touchX;
                  disY = ev.changedTouches[0].pageY-touchY;

                  if(((iNow == 0) && (disY > 0)) || ((iNow == aPage.length-1) && (disY < 0))){
                    //从动
                    if(json['options']['driven']){
                      oBox.style.WebkitTransform = 'translate3D(0,'+(disY*0.1-iNow*h)+'px'+',0)';
                    }
                  }else{
                    if(json['options']['driven']){
                      oBox.style.WebkitTransform = 'translate3D(0,'+(disY-iNow*h)+'px'+',0)';
                    }
                    if(json['options']['type'] == 'move')   changePage();
                  }
            }


            function end(){
                  document.removeEventListener('touchmove',move,false);
                  document.removeEventListener('touchend',end,false);
                  if(json['options']['type'] == 'leave') changePage();
                  oBox.style.WebkitTransform = 'translate3D(0,'+(-iNow*h)+'px'+',0)';
            }
            document.addEventListener('touchmove',move,false)
            document.addEventListener('touchend',end,false)
          },false);
    }
    var arr = [0,1,2,3,4,5,6]
    var arr1 = [an1,an2,an3,an4,an5,an6,an7]

    flip('.wrap',{callBack:{page:arr,fn:arr1}})































































