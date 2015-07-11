// caisenlei 测试一下merge

function drag(id){
	var obj = document.getElementById(id);
	var dis_X = 0;
	var dis_Y = 0;
	obj.onmousedown = function(ev){
		dis_X = ev.pageX - obj.offsetLeft;
		dis_Y = ev.pageY - obj.offsetTop;
		document.onmousemove = function(ev){
			obj.style.left = ev.pageX - dis_X + 'px';
			obj.style.top = ev.pageY - dis_Y + 'px';
		};
		document.onmouseup = function(){
			document.onmousemove = null;
			document.onmouseup = null;
		};
	}
	return false;
}
