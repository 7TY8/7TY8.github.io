$(document).ready(function () {
	$('html, body').animate({
		scrollTop: 0
	});
	$('body').css('visibility', 'visible');
})

$('.btn-main').click(function () {
	$('html, body').animate({
		scrollTop: 654
	}, 1000);
})

$('.fixed').click(function () {
	if ($('html, body').scrollTop() <= 5886) {
		$('html, body').animate({
			scrollTop: $('html, body').scrollTop() + 654
		}, 1000);
	}

	else if ($('html, body').scrollTop() >= 5886) {
		$('html, body').animate({
			scrollTop: 0
		}, 2000);
	}
})

setInterval(function () {
	if ($('html, body').scrollTop() >= 327) {
		$('.fixed').css('opacity', '1')
	}

	if ($('html, body').scrollTop() <= 327) {
		$('.fixed').css('opacity', '0')
	}
})