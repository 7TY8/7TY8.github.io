mp3 = 1;

$(document).ready(function () {
	$(document.body).css('visibility', 'visible');
	$('[data-toggle="tooltip"]').tooltip();

  	audio = new Audio();
  	audio.src = 'media/sounds/audio-' + mp3 + '.mp3';
  	audio.autoplay = true;
  	audio.volume = 0;
  	audio.loop = true;
  	timerId = setInterval(function () {
  		audio.volume += 0.001;
  		if (audio.volume >= 0.05) {
  			clearInterval(timerId);
  		}
  	}, 300)

})

$(function volume () {
	$('.volume').click(function () {
		if ($('.volume').hasClass('mute')) {
			$('.volume').html('<i class="fas fa-volume-up"></i>');
			$('.volume').removeClass('mute');
			audio.volume = 0.05;
		}
		else {
			$('.volume').html('<i class="fas fa-volume-mute"></i>');
			$('.volume').addClass('mute');
			audio.volume = 0;
		}
	})
})

$(function audioType () {
	$('.type').click(function () {
		if ($('.type').hasClass('play')) {
			$('.type').html('<i class="fas fa-play"></i>');
			$('.type').removeClass('play');
			audio.pause();
		}
		else {
			$('.type').html('<i class="fas fa-pause"></i>');
			$('.type').addClass('play');
			audio.play();
		}
	})
})

$(function slide () {
	$('.next').click(function () {
		mp3 += 1;
		audio.src = 'media/sounds/audio-' + mp3 + '.mp3';
		if (mp3 == 4) {
			mp3 = 1;
			audio.src = 'media/sounds/audio-' + mp3 + '.mp3';
		}
	})
})