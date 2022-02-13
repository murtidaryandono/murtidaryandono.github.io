$(document).ready(function() {
	// THEME COLOR :
	$('#theme-color').attr('content', rgb2hex($('header nav').css('background-color')));

	// NAV LINKS :
	anchors.options.icon = '#';
	anchors.add('article h1, article h2, article h3, article h4');

	$('#icon-print').click(function() {
		$('article').print();
	});

	if(window.location.hash.length > 0) {
		goToHash(undefined, decodeURI(window.location.hash));
	}

	$('a[href*=\\#]').on('click', function(event) {
		goToHash(event, decodeURI(this.hash));
	});

	// SYNTAX HIGHLIGHTING :
	if(("code[class^='language-']").length) {
		$('head').append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/darcula.min.css"/>');
		$.getScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js', function() {
			$('pre code').each(function(i, block) {
				hljs.highlightBlock(block);
			});
		});
	}

	// OTHERS :
	$('.modal').modal();
	$('.sidenav').sidenav();
	$('article ul').addClass('browser-default');
});

/**
* Found here : https://stackoverflow.com/a/18365991/3608831
*/

function goToHash(event, hash) {
	if(hash.length == 0) {
		return;
	}
	var jqueryHash = $(hash);
	if(!jqueryHash.length) {
		return;
	}
	if(!typeof event === 'undefined') {
		event.preventDefault();
	}
	$('html, body').animate({
		scrollTop: jqueryHash.offset().top
	}, 500);
	if(history.pushState) {
		history.pushState(null, null, hash);
	}
	else {
		location.hash = hash;
	}
}

/**
* Found here : https://stackoverflow.com/a/3627747/3608831
*/

function rgb2hex(rgb) {
	if(/^#[0-9A-F]{6}$/i.test(rgb)) {
		return rgb;
	}

	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	function hex(x) {
		return('0' + parseInt(x).toString(16)).slice(-2);
	}
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function resetPosition(navigation) {
	navigation.css('position', '');
}

function localize(messages) {
	for(var selector in messages){
		var target = selector.split('&');
		switch(target[1].toLowerCase()) {
			case 'html':
			$(target[0]).html(messages[selector]);
			break;
			default:
			$(target[0]).attr(target[1], messages[selector]);
			break;
		}
	}
}
