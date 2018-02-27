/*获取DOM对象*/
var oContent = document.getElementById("content");
var oStart = document.getElementById("start");
var oMain = document.getElementById("main");
//敌机被打掉，显示分数区域
var oScoreLable = document.getElementById("label");
var oEnd = document.getElementById("end");
//游戏结束后，显示总分数区域
var oPlaneScore = document.getElementById("planeScore")

var oScore = document.getElementById("score");

var scores = 0; //总得分

//定义飞机类
function Plane(x,y,speed, imgsrc, boomImgSrc, score, breath, dietime){
	this.planeNode = null; //定义飞机节点
	this.posX = x; //飞机left值
	this.posY = y; //飞机top值
	this.planeSpeed = speed; //飞机正常飞行速度
	this.planeImgSrc = imgsrc; //飞机图片路径
	this.planeBoom = boomImgSrc; //飞机爆炸图片路径
	this.planeScore = score; //飞机分值
	this.planeBreath = breath; //飞机生命力
	this.planeIsDie = false; //飞机是否击毁
	this.planeDieTime = dietime; //飞机消失时间
	this.planeDieTimes = 0; //飞机从被击中开始的一个计时器
	//初始化
	this.init = function() {
		this.planeNode = document.createElement("img");
		this.planeNode.src = this.planeImgSrc;
		this.planeNode.style.left = this.posX + "px";
		this.planeNode.style.top = this.posY + "px";
		oMain.appendChild(this.planeNode);
	}
	this.init();
	
}
Plane.prototype.move = function() {
	if(fen <= 100000) {
		this.planeNode.style.top = this.planeNode.offsetTop + this.planeSpeed + "px";
	} else if(fen > 100000 && fen < 200000) {
		this.planeNode.style.top = this.planeNode.offsetTop + this.planeSpeed + 5 + "px";
	} else {
		this.planeNode.style.top = this.planeNode.offsetTop + this.planeSpeed + 10 + "px";
	}
}
function Enemy(speed, imgsrc, boomImgSrc, score, breath, dietime) {
	Plane.call(this, Math.floor(Math.random() * 210), -164, speed, imgsrc, boomImgSrc, score, breath, dietime)
}

for(var i in Plane.prototype) {
	Enemy.prototype[i] = Plane.prototype[i];
}

function MyPlane(x, y) {
	Plane.call(this, x, y, 0, "image/我的飞机.gif", "image/本方飞机爆炸.gif", 0, 1, 600);
}
