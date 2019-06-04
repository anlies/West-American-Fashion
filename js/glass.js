function glass(active,inner,movebig,moveimg){//滤镜活动区域图片  滤镜  放大盒子 放大图片
	var bbox = document.getElementById(active);
	var bmove = document.getElementById(inner);
	var bbimg = document.getElementById(movebig);
	var b_bimg = document.getElementById(moveimg);
	bbox.onmousemove = function(e){//获取鼠标位置
		var x = e.offsetX;//鼠标相对于视口位置
		var y = e.offsetY;
		var t = bbox.offsetTop;//box相对于视口的位置
		var l = bbox.offsetLeft;
		
		var _left =Math.floor(x - l - bmove.offsetWidth/2); 
		var _top =Math.floor(y - t - bmove.offsetHeight/2);
		
		if(_top<=0){
			_top = 0;
		}else if(_top >= bbox.offsetHeight-bmove.offsetHeight){//滑到box的最底部
			_top = bbox.offsetHeight-bmove.offsetHeight; 
		}if(_left<=0){//滑到box的最左边
 			 _left=0;
		}else if(_left>=bbox.offsetWidth-bmove.offsetWidth){//滑到box的最右边
 			_left=bbox.offsetWidth-bmove.offsetWidth ;
 		}
		bmove.style.top = _top +"px";//设置move的位置
		bmove.style.left = _left + "px";
		var w = _left/(bbox.offsetWidth-bmove.offsetWidth);  //计算移动的比例
	    var h = _top/(bbox.offsetHeight-bmove.offsetHeight);
	    var b_bimg_top = (b_bimg.offsetHeight-bbimg.offsetHeight)*h;//计算大图的位置
	    var b_bimg_left = (b_bimg.offsetWidth-bbimg.offsetWidth)*w;
	    b_bimg.style.top = -b_bimg_top + "px";//设置大图的位置信息
	    b_bimg.style.left = -b_bimg_left + "px";
	}  
}