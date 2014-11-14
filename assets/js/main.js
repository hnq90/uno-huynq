/* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
var disqus_shortname = 'huynqsblog'; // required: replace example with your forum shortname

$(document).ready(function () {

	$('body').removeClass('no-js');
	
	// Handle click on blog button
	$('a.blog-button').click(function () {
		// Check if panel cover is collapsed, do nothing
		if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
		// Detect current panel cover width
		currentWidth = $('.panel-cover').width();
		if (currentWidth < 960) {
			$('.panel-cover').addClass('panel-cover--collapsed');
			$('.content-wrapper').addClass('animated slideInRight');
		} else {
			$('.panel-cover').css('max-width', currentWidth);
			$('.panel-cover').animate({
				'max-width': '530px',
				'width': '40%'
			}, 400, swing = 'swing', function () {});
			$('.panel-cover').addClass('panel-cover--collapsed');
		}
	});

	if (window.location.hash && window.location.hash == "#blog") {
		$('.panel-cover').addClass('panel-cover--collapsed');
	}

	if (window.location.pathname.substring(0, 5) == "/tag/") {
		$('.panel-cover').addClass('panel-cover--collapsed');
	}

	$('.btn-mobile-menu').click(function () {
		$('.navigation-wrapper').toggleClass('visible animated bounceInDown');
		$('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
	});

	$('.navigation-wrapper .blog-button').click(function () {
		$('.navigation-wrapper').toggleClass('visible');
		$('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn');
	});

	var s = document.createElement('script');
	s.async = true;
	s.type = 'text/javascript';
	s.src = 'http://' + disqus_shortname + '.disqus.com/count.js';
	(document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);

});