window.onload=function(){
	var ul=document.getElementById("soldul");
	var soldIndex=1;
	var soldtimer; //每个多长时间，就播放下一页
	var isPause=false;
	startsold();
	function startsold(){
		clearInterval(soldtimer);
		soldtimer=setInterval(function(){
	    if(soldIndex>8){
	        //把ul 拉回到最右端；
	        ul.style.left=0;
	        //页码重新初始化为1；
            soldIndex=1;
        }
        startMove(ul,{left:-180*soldIndex});
        soldIndex++;
   		},3000) 
	}
	
	 
	
}
