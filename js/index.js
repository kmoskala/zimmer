/*
http://css-tricks.com/example/index.html
	window.location.protocol = "http:"
	window.location.host = "css-tricks.com"
	window.location.pathname = "example/index.html"

* */

$( document ).ready(function() {
	console.log( "ready!" );
	var actualURL = window.location.protocol +  window.location.host + "/" + window.location.pathname;
	//console.log("protocol ", window.location.protocol," host ", window.location.host, " pathname ",window.location.pathname);
	var height = window.innerHeight;
	$('#myLink').css("height",height);
	var pathname = window.location.host;
	
	$("header ul li, footer .logo img, footer .menu div, #content button").click( function () {
		var path = window.location.pathname.split('/');
		var data = this.dataset.name + ".html";
		
		if(path[path.length-1] == data){
		
		}else if( this.dataset.name == "index") {
			window.location.href = window.location.protocol + path[0] +"/" + path[1] + "/" + path[2] + "/" + data;
			// window.location.pathname = ""; //powrot na glowna
		} else {
			window.location.href = window.location.protocol + path[0] +"/" + path[1] + "/" + path[2] + "/pages/" + data;
			// window.location.href = "/pages/" + data;
		}
		
	});
	
	var owl2 = $(".squerContainer.owl-carousel");
	owl2.owlCarousel({
		loop:true,
		margin:0,
		autoplay: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			998: {
				items: 3
			}
		}
	});
	$('#content .section .next').click(function() {
		owl2.trigger('prev.owl.carousel', [300]);
	});
	$('#content .section .prev').click(function() {
		owl2.trigger('next.owl.carousel', [300]);
	});
	var squerHeight = $(".squer").width();
	$(".layer, .squer .image, #content .section .arrow").height(squerHeight);
	$(".layer, .squer .image").width(squerHeight);
	
	$(".squer").hover(
		function () {
			$(this).find(".layer").fadeIn("fast","swing",function () {
				$(this).css({
					"display": "block",
					"cursor": "pointer"
				});
			});
			
			console.log("this " + $(this));
		}
		,
		function () {
			$(this).find(".layer").fadeOut("fast","swing",function () {
				$(this).css({
					"display": "none",
					"cursor": "pointer"
				});
			});
			console.log("wyszedlem");
		}

	);

	//alert();
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
		html.clientHeight, html.scrollHeight, html.offsetHeight, html.height);
	console.log(body.scrollHeight, body.offsetHeight,
		html.clientHeight, html.scrollHeight, html.offsetHeight, "max: ", height);
	var windowHeight = window.innerHeight;
	$("#parlax .image").height(windowHeight - $('header').outerHeight());
	
	
	$('#goTop').click(function () {
		$('html, body').animate({
			scrollTop: $("header").offset().top
		}, 700);
		
	});
	
	console.log($("header").is(":visible"));
	// $("footer").css("top",height - footerHeight);
});

// $(window).scroll(function() {
// 	$('html, body').animate({
// 		scrollTop: $("#content").offset().top
// 	}, 2000);
// });