function bigPic(opt){
    var box=document.getElementById(opt.id);
    box.style.cssText='width:'+opt.boxWid+'px;height:'+opt.boxHei+'px;position:relative;margin-left:30px;border:1px solid #ccc;';
    var leftBox=document.createElement('div');
    leftBox.style.cssText='width:'+opt.boxWid+'px;height:'+opt.boxHei+'px;position:relative;';
    var mb=document.createElement('div');
    mb.style.cssText='width:'+opt.boxWid+'px;height:'+opt.boxHei+'px;position:absolute;top:0;left:0;background:rgba(255,255,255,0);z-index:10;';
    var ball=document.createElement('div');
    ball.style.cssText='width:'+opt.boxWid/opt.scal+'px;height:'+opt.boxHei/opt.scal+'px;position:absolute;top:0;left:0;background:rgba(244, 235, 12, 0.3);z-index:10;display:none;';
    var leftImg=document.createElement('img');
    leftImg.src=opt.imgSrc;
    leftImg.style.cssText='width:'+opt.boxWid+'px;height:'+opt.boxHei+'px;';
    leftBox.appendChild(leftImg);
    leftBox.appendChild(ball);
    leftBox.appendChild(mb);
    box.appendChild(leftBox);

    var rightBox=document.createElement('div');
    rightBox.style.cssText='width:'+opt.boxWid+'px;height:'+opt.boxHei+'px;position:absolute;top:0;left:'+(opt.boxWid+10)+'px;overflow:hidden;display:none;z-index:100;';
    var rightImg=document.createElement('img');
    rightImg.src=opt.imgSrc;
    rightImg.style.cssText='width:'+opt.boxWid*opt.scal+'px;height:'+opt.boxHei*opt.scal+'px;position:absolute;top:0;left:0;';
    rightBox.appendChild(rightImg);
    box.appendChild(rightBox);
    
    leftBox.onmousemove=function(event){
        var e=event||window.event;
        ball.style.display='block';
        rightBox.style.display='block';
        var posX=e.offsetX-ball.offsetWidth/2;
        var posY=e.offsetY-ball.offsetHeight/2;
        if(posX<0){
            posX=0;
        }else if(posX>leftBox.offsetWidth-ball.offsetWidth){
            posX=leftBox.offsetWidth-ball.offsetWidth;
        }
        if(posY<0){
            posY=0;
        }else if(posY>leftBox.offsetHeight-ball.offsetHeight){
            posY=leftBox.offsetHeight-ball.offsetHeight;
        }
        ball.style.left=posX+'px';
        ball.style.top=posY+'px';
        rightImg.style.left=(-posX*opt.scal)+'px';
        rightImg.style.top=(-posY*opt.scal)+'px';
        this.onmouseout=function(){
            ball.style.display='none';
            rightBox.style.display='none';
        }
    }
}