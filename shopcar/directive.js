Vue.directive('swipe',{
    bind(el,bindings,vnode){
        var start,end,sTime,eTime,{arg,value}=bindings;
        el.addEventListener('touchstart',function(e){
            start = e.touches[0].clientX
            sTime = new Date().getTime()
        })
        el.addEventListener('touchmove',function(e){
            end = e.touches[0].pageX   
        })
        el.addEventListener('touchend',function(e){
            eTime = new Date().getTime()
            if( arg == 'right' && end-start>0 && Math.abs(end-start)>30 && eTime-sTime<1000 ){
                //右
                value()
            }
            if( arg == 'left' && end-start<0 && Math.abs(end-start)>30 && eTime-sTime<1000 ){
               //左
               value()
            }
        })
    },
    inserted(){

    }
})