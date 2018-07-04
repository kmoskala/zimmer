/*
http://css-tricks.com/example/index.html
	window.location.protocol = "http:"
	window.location.host = "css-tricks.com"
	window.location.pathname = "example/index.html"

* */
function isPhone() {
	var windowWidth = window.innerWidth;
	if (windowWidth < 768) {
		return true;
	} else {
		return false;
	}
}
function isMobile() {
	
	var windowWidth = window.innerWidth;
	if (windowWidth < 999) {
		return true;
	} else {
		return false;
	}
	
}
$(window).resize(function () {
		init();
});

function init() {
	goTop();
	$("#content .parlax.aboutText .image").height($("#content .parlax.aboutText .textPlace").outerHeight() +1);
	
	var height = window.innerHeight;
	$('#myLink').css("height",height);
	
	$('#myLink .owl-carousel .item').height(window.innerHeight - 200);
	
	var windowHeight = window.innerHeight;
	$("#parlax .image").height(windowHeight - $('header').outerHeight());
	
	$(".gallery .one-image").height($('.gallery .one-image').outerWidth());
	$('#content .section .circle').height($("#content .section .circle").outerWidth()/2);
	
	
	
	var mobile = isMobile();
	if (!mobile) {
		console.log("nie tel");
		if (!$('#menuNormal').is(':visible')) {
			$('#menuNormal').css('display', 'block');
		}
		$("#menuResposive").css('display', 'none');
		$('header .menuContainer').removeClass("container-fluid").addClass("container");
		$(".gallery-Menu .one-category").height($(".gallery-Menu .one-category").outerWidth()/2);
	} else {
		console.log("telef");
		if (!$('#menuResposive').is(':visible')) {
			$('#menuResposive').css('display', 'block');
		}
		$("#menuNormal").css('display', 'none');
		$('header .menuContainer').removeClass("container").addClass("container-fluid");
		$(".gallery-Menu .one-category").height();
	}
	$("#content .section .one-option, #content .section .one-option div").height($("#content .section .one-option").outerWidth());
	
}
function closeMenu(){
	$('header .menuContainer #menuResposive ul').fadeOut(350);
}

$( document ).ready(function() {
	init();
	
	$(document.body).click( function() {
		closeMenu();
	});
	
	$("header .menuContainer #menuResposive .menuIcon").on('click', function (e) {
		e.stopPropagation();
		if($("header .menuContainer #menuResposive ul").is(':visible')) {
			$("header .menuContainer #menuResposive ul").fadeOut(500);
		} else {
			$("header .menuContainer #menuResposive ul").fadeIn(500);
			
		}
	});
	
	
	
	
	var actualURL = window.location.protocol +  window.location.host + "/" + window.location.pathname;
	//console.log("protocol ", window.location.protocol," host ", window.location.host, " pathname ",window.location.pathname);
	
	var pathname = window.location.host;
	
	$("header ul li,header .menuContainer #menuResposive .logo, footer .logo img, footer .menu div, #content button").click( function () {
		var path = window.location.pathname.split('/');
		var data = this.dataset.name + ".html";
		
		if(path[path.length-1] == data){
		
		}else if( this.dataset.name == "index") {
			// window.location.href = window.location.protocol + path[0] +"/" + path[1] + "/" + path[2] + "/" + data;
			window.location.pathname = ""; //powrot na glowna
		} else {
			// window.location.href = window.location.protocol + path[0] +"/" + path[1] + "/" + path[2] + "/pages/" + data;
			window.location.href = "/pages/" + data;
		}
		
	});
	
	var owl2 = $("#slider.owl-carousel");
	owl2.owlCarousel({
		loop:true,
		margin:10,
		autoplay: true,
		// autoWidth:true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			998: {
				items: 4
			}
		}
	});
	var owl = $("#offerSlider.owl-carousel");
	owl.owlCarousel({
		loop:true,
		margin: 0,
		autoplay: true,
		items: 1
	});
	// //sterowanie za pomoca strzalek
	// $('#content .section .next').click(function() {
	// 	owl2.trigger('prev.owl.carousel', [300]);
	// });
	// $('#content .section .prev').click(function() {
	// 	owl2.trigger('next.owl.carousel', [300]);
	// });
	
	
	$("#content .section .one-option").click(function () {
		var myId = this.dataset.name;
		
		if($('#content .section.money table').is(':visible')) {
			$('#content .section.money table').css('display','none').fadeOut(300);
			$('#content .section .one-option div').css('opacity', '0.7');
		}
		$("#" + myId).css('display', 'block').fadeIn();
		$(this).children().css('opacity', '1');
		$('#content .money .star').css('display','block');
		
		console.log(isPhone());
		if(isPhone()) {
			$('html, body').animate({
				scrollTop: $('#'+myId).offset().top
			}, 700);
		}
		
	});
	
	//galeria
	
	$(".gallery-Menu .one-category").click(function () {
		var myId = this.dataset.name;
		console.log(myId);
		//"pogas" zakladki i wylacz galerie
		if($('.gallery').is(':visible')) {
			$('.gallery').css('display','none').fadeOut(300);
			$(this).siblings().css({
				'background-color': '#fff',
				'color': '#000'
			});
		}
		//wyswietl galerie i zaznacz w jakiej kat jestes
		$(".gallery#" + myId).css('display', 'flex');
		$(".gallery .one-image").height($('.gallery#'+myId+' .one-image').outerWidth());
		$(this).css({
			'background-color': '#000',
			'color': '#fff'
		});
		
		console.log(isPhone());
		if(isPhone()) {
			$('html, body').animate({
				scrollTop: $('#'+myId).offset().top
			}, 700);
		}
	});
	
	
	
	
	$(".gallery .one-image").click(function () {
		var myId = this.dataset.name;
		$('#myLink').css('display','block');
		$('#myLink .informator').css('display', 'none');
		$('#myLink .informator.' + myId).css('display','block');
		$("#goTop").hide();
		
		
	});
	var sliderGalerry = $('#myLink .owl-carousel');
	sliderGalerry.owlCarousel({
		loop:true,
		margin: 0,
		autoplay: true,
		items: 1
	});
	$("#myLink .informator .close").click(function () {
		$('#myLink').css('display','none');
	});
	
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
		scrollingTop();
	});
	
	$(window).on("scroll", function() {
		goTop();
	});
	
	
});


function goTop() {
	var scrollPos = $(window).scrollTop();
	if (scrollPos <= $('header').outerHeight()) {
		$("#goTop").fadeOut();
	} else {
		$("#goTop").fadeIn();
	}

}
function scrollingTop() {
	$('html, body').animate({
		scrollTop: $("header").offset().top
	}, 700);
}