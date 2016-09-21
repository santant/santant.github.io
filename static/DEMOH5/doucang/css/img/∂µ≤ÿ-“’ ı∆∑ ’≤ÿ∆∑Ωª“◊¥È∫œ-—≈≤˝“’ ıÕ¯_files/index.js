'use strict';
;!(function(){
    var indexFn = {
        pageSwitch : function(pageParent){
            var winH =  window.innerHeight,
                pages = pageParent.children,
                len = pages.length,
                offY = pageParent.offsetTop,
                className = 'active';

            pageParent.now = pageParent.now || 0;

            for(var i=0;i<len;i++){
                pages[i].style.height = winH + 'px';
                pages[i].classList.remove(className);
            }
            pages[pageParent.now ].classList.add(className);


            pageParent.addEventListener('touchstart',startFn,false);
             if( pageParent.swicthTag){
                 return false;
             }
             pageParent.swicthTag = true;

            function startFn(e){
                //console.log('start:' +offY)
               var startY = e.targetTouches[0].pageY,
                   disY = startY - offY,
                   _this = this;
                //console.log('startY:' +disY);

                _this.style.transition = 'none';

               document.addEventListener('touchmove',moveFn,false);
               document.addEventListener('touchend',endFn,false);


               function moveFn(e){
                  var moveY = e.targetTouches[0].pageY - disY;

                   //console.log('moveY:' +moveY);
                   offY = moveY;
                  // _this.style.webkitTransform = 'translate3d(0,'+ moveY +'px,0)';


                   e.preventDefault();
               }
               function endFn(e){
                   var endY = e.changedTouches[0].pageY;
                   if(Math.abs(endY - startY ) > 50 ){
                      // console.log(endY-startY)
                        if(endY - startY < 0){
                            pageParent.now ++;
                            pageParent.now  > len - 1 && (pageParent.now  = len -1);
                        }else{
                            pageParent.now --;
                            pageParent.now  < 0 && (pageParent.now  = 0);
                        }
                       _this.style.webkitTransform = 'translate3d(0,'+ (-pageParent.now  * winH) +'px,0)';
                       _this.style.webkitTransition = 'all .5s linear';
                       _this.addEventListener('webkitTransitionEnd',function(){
                           pageParent.swicthTag = false;
                           activeClass(pageParent.now);
                          // _this.style.transition = 'none';
                       },false);
                   }

                   document.removeEventListener('touchmove',moveFn,false);
                   document.removeEventListener('touchend',endFn,false);
               }
            }

            function activeClass(now){
                for(var i=0;i< len; i++){
                    pages[i].classList.remove(className);
                }
                pages[now ].classList.add(className);

            }



        },
        loading : function(oLoad){
            var oBody = document.getElementById('body');
            oLoad.parentNode.removeChild(oLoad);
            oBody.style.display = 'block';
        }
    };//end indexFn

    window.addEventListener('load',loadFn,false);

    function loadFn(){

        var pageWraper = document.getElementById('page'),
            oLoad = document.getElementById('loading');

        oLoad && indexFn.loading(oLoad);
        pageWraper && indexFn.pageSwitch(pageWraper);
    }
})(window,document,undefined);