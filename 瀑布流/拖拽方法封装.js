function dage(obj) {
	
	obj.onmousedown = function(e) {
		var evt = e || event;
		var disX = evt.offsetX;
		var disY = evt.offsetY;
		document.onmousemove = function(e) {
			var evt = e || event;
			var _left = evt.clientX - disX;
			var _top = evt.clientY - disY;
			obj.style.left = _left + "px";
			obj.style.top = _top + "px";
		}
		document.onmouseup = function() {
			document.onmousemove = null;
			document.onmouseup = null;
		}
		return false;
	}
}