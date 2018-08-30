jQuery(document).ready(function() {
	var el = $('#before-title'),
	curMargin = el.css('margin-left'),
	autoMargin = el.css('margin-left', 'auto').css('margin-left');
	el.css('margin-left', curMargin);
	$('#before-title, #after-title').animate({marginLeft: autoMargin}, 500, function() {
		$('#before-title, #after-title').css('margin-left', 'auto');
		$('h1, h3').fadeTo(300, 1)
	});
	$('#page1').particleground({
		dotColor: '#4AC1D0',
		lineColor: '#4AC1D0',
		density: 7500
	});
});
