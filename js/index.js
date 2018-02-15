/*
http://css-tricks.com/example/index.html
	window.location.protocol = "http:"
	window.location.host = "css-tricks.com"
	window.location.pathname = "example/index.html"

* */

$( document ).ready(function() {
	console.log( "ready!" );
	var actualURL = window.location.protocol +  window.location.host + "/" + window.location.pathname;
	
	var height = window.innerHeight;
	$('#myLink').css("height",height);
	
	
	$("header ul li, header .logo img, footer .logo img, footer .menu div").click( function () {
		var path = window.location.pathname.split('/');
		var data = this.dataset.name + ".html";
		
		if(path[path.length-1] == data){
		
		}else if( this.dataset.name == "index") {
			window.location.href = window.location.protocol + path[0] +"/" + path[1] + "/" + path[2] + "/" + data;
		} else {
			window.location.href = window.location.protocol + path[0] +"/" + path[1] + "/" + path[2] + "/pages/" + data;
		}
		
	});
	
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:0,
		items:1,
		center: true,
		nav: true,
		dots: true
		
	});
	
	var connectPage = $('#myLink');
	// $('.close').click(function () {
	// 	connectPage.fadeToggle("slow", function () {
	// 		this.css("display", "none");
	// 	});
	//
	//
	// });
	var body = document.body,
		html = document.documentElement,
	    footerHeight = $("footer").outerHeight();
	
	var height = Math.max( body.scrollHeight, body.offsetHeight,
		html.clientHeight, html.scrollHeight, html.offsetHeight );
	console.log(footerHeight, height, body.scrollHeight, body.offsetHeight,
		html.clientHeight, html.scrollHeight, html.offsetHeight);
	
	$("footer").css("top",height - footerHeight);
});