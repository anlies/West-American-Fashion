window.onload=function(){
	var oUl=document.getElementById("imgul");
	var pageIndex=1;
	var timer; //每个多长时间，就播放下一页
	var isPause=false;
	var Bpre=document.getElementById("banner-pre");
	var Bnext=document.getElementById("banner-next");
	/*var Pic-none=document.getElementById("pic-none");*/
	start(pageIndex);
	function start(pageIndex){
		clearInterval(timer);
		timer=setInterval(function(){
	    if(pageIndex>6){
	        //把ul 拉回到最右端；
	        oUl.style.left=0;
	        //页码重新初始化为1；
            pageIndex=1;
        }
        startMove(oUl,{left:-960*pageIndex});
        pageIndex++;
   		},3000) 
	}
	Bpre.onclick=function(){ 
		//判断暂停的方法
		//isPause=false;
		clearInterval(timer);
		pageIndex--;
		if(pageIndex<0){
	        //把ul 拉回到最左端； 
	        oUl.style.left=-5760+"px";
	        //页码调到最后一页的前面，进行轮播
            pageIndex=5;
        }
		startMove(oUl,{left:-960*pageIndex});  
		//isPause=true; 
		
		start(pageIndex-1); 
	}
		
	Bnext.onclick=function(){
		
		clearInterval(timer);
		pageIndex++;
		if(pageIndex>6){
	        //把ul 拉回到最右端；
	        oUl.style.left=0;
	        //页码重新初始化为1；
            pageIndex=1;
        }
		startMove(oUl,{left:-960*pageIndex});  
		start(pageIndex+1); 
	}
	
	
	 
	
}
