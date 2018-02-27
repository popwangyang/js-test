function addEvent(obj,type,fun){
	/* 添加事件处理函数*/
			if(obj.addEventListener){
					obj.addEventListener(type,fun,false);
				}else{
					obj.attachEvent("on"+type,fun);
					}
		}
function removeEvent(obj,type,fun){
	/*移除事件处理函数*/
			if(obj.removeEventListener){
					obj.removeEventListener(type,fun);
				}else{
					obj.detachEvent("on"+type,fun);
					}
		}
function setCookie(name,value,iDay){
	//增加/修改cookie函数：
	var newDate = new Date();
	newDate.setDate(newDate.getDate()+iDay);
	document.cookie=name+"="+value+";expires="+newDate;
}
function getCookie(name){
	//获取cookie函数：
	var arr = document.cookie().split("; ");
	for(var i =0; i<arr.length; i++){
		var arr2 = arr[i].split("=");
		if(arr2[0] == name){
			return arr2[1];
		}
	}
}
function removeCookie(name){
	//删除cookie函数：
	setCookie(name,1,-1);
}
function getStyle(obj, attr){  
    if(obj.currentStyle)    {  
        return obj.currentStyle[attr];  
    }else{  
        return getComputedStyle(obj, false)[attr];  
    }  
}  
function Move(obj,json,fn){  
    //停止上一次定时器  
    clearInterval(obj.timer);  
    //保存每一个物体运动的定时器  
    obj.timer = setInterval(function(){  
        //判断同时运动标志  
        var bStop = true;  
        for(var attr in json){    
            //取当前值    
            var iCur = 0;  
            if(attr == 'opacity'){  
                iCur = parseInt(parseFloat(getStyle(obj, attr))*100);  
            }else{  
                iCur = parseInt(getStyle(obj,attr));  
            }  
            //计算速度  
            var iSpeed = (json[attr] - iCur) / 8;  
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);  
            //检测同时到达标志  
            if(iCur != json[attr]){  
                bStop = false;  
            }     
            //更改属性，获取动画效果  
            if(attr=='opacity'){  
                iCur += iSpeed  
                obj.style.filter='alpha(opacity:' + iCur + ')';  
                obj.style.opacity=iCur / 100;  
            }  
            else{  
                obj.style[attr]=iCur+iSpeed+'px';  
            }  
        }  
        //检测停止  
        if(bStop){  
            clearInterval(obj.timer);  
            if(fn) fn();  
        }  
    },200)  
}  