function setCookie(name, value, day) {
	var oDate = new Date();
	oDate.setDate(oDate.getDate() + day);
	document.cookie = name + "=" + value + ";expires=" + oDate;

}

function getCookie(name) {
	var strCookie = document.cookie;
	//需要对字符串进行分割（;）
	var arrCookie = strCookie.split("; ");
	//console.log(arrCookie);
	for(var i = 0; i < arrCookie.length; i++) {
		//把数组中的每一项以=分割，判断形参和分割后的数组中的第一元素是否相等，相等则返回第二个元素
		var arr = arrCookie[i].split("=");
		if(arr[0] == name) {
			return arr[1];
		}
	}
}

function removeCookie(name) {
	setCookie(name, 1, -1);

}
