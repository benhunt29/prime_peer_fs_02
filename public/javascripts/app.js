//write magic
$body = $('body');
$(document).ready(function () {
	console.log('ready');
	var ajaxCall = $.ajax({
		type: 'GET',
		dataType: 'json',
		url: '/images'
	});

	ajaxCall.done(function (res) {
		res.forEach(function (elem) {
			var $div = $('<div>', {
				"class" : "img",
				"width" : "auto",
				"height" : "300px",
				"background-repeat" : "no-repeat"
			});
			var $img = $('<div>', {'class': 'img'});
			$img.css('background-image', 'url('+ elem.link +')');
			$div.append($img);
			$body.append($div);
		});
	});
});