/**
 * [description]
 * @param  {[type]} global [description]
 * @return {[type]}        [description]
 */
(function(global){
    function remchange(){
        document.documentElement.style.fontSize=20*document.documentElement.clientWidth/320+'px';
    }
    remchange();
    global.addEventListener('resize', remchange, false);
})(window);

//回到顶部
document.addEventListener('DOMContentLoaded', function(){
    var oBtn=document.getElementById('btn');

    var userScroll=false;

    window.onscroll=function (){
        if (userScroll)
        {
            clearInterval(document.timer);
        }
        
        userScroll=true;
    };

    oBtn.onclick=function (){
        move(500);
    };

    function move(duration)
    {
        var start=document.documentElement.scrollTop || document.body.scrollTop;
        var dis=0-start;
        var n=0;
        var count=Math.floor(duration/30);
        
        clearInterval(document.timer);
        document.timer=setInterval(function (){
            n++;
            userScroll=false;
                        
            var cur=start+dis*n/count;
            document.body.scrollTop=cur;
            document.documentElement.scrollTop=cur;
            
            if (n == count)
            {
                clearInterval(document.timer);
            }
        }, 30);
    }
}, false);