
/*js控制框架中的页面宽高，使网页全部显示*/
function LAGE(N){
		var odiv=document.getElementById("main");
		if(N==1){odiv.style.height="1415px"; odiv.style.width="1000px";}
		if(N==2){odiv.style.height="1000px"; odiv.style.width="1200px";}
		if(N==3){odiv.style.height="1150px"; odiv.style.width="1000px";}
		if(N==4){odiv.style.height="1350px"; odiv.style.width="1000px";}
		
}
/*js控制的锚链接，document.getElementById("id").offsetTop)获取某个元素距离top的高度，window.scrollTo()为屏幕向下滚动的位置*/
function fun(N,M){
	var odiv=document.getElementById("main");
	if(N==1){odiv.style.height="381px"; odiv.style.width="1000px";}
	if(N==2){odiv.style.height="1000px"; odiv.style.width="1200px";}
	if(N==3){odiv.style.height="1150px"; odiv.style.width="1000px";}
	if(N==4){odiv.style.height="1350px"; odiv.style.width="1000px";}
	if(M==1){window.scrollTo(0,document.getElementById("daily-top").offsetTop);}
	if(M==2){window.scrollTo(0,document.getElementById("daily-center").offsetTop);}
	if(M==3){window.scrollTo(0,document.getElementById("ZX-content").offsetTop);}
	if(M==4){window.scrollTo(0,document.getElementById("may").offsetTop);}
	if(M==5){window.scrollTo(0,document.getElementById("emotional").offsetTop);}
	if(M==6){window.scrollTo(0,document.getElementById("team").offsetTop);}
	if(M==7){window.scrollTo(0,document.getElementById("who").offsetTop);}
	if(M==9){window.scrollTo(0,document.getElementById("function").offsetTop);}
	if(M==8){window.scrollTo(0,document.getElementById("contactme").offsetTop);}
	if(M==10){window.scrollTo(0,document.getElementById("composition").offsetTop);}
}