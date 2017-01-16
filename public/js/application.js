var debug = false;

$(document).ready(function(){
	set_size(function(){
		var myLenticular = new Lenticular.Image($('.lenticular_container')[0], {
			images: 'imgs/Test##.jpg',
			frames: 24
		});
	});
});

function set_size(callback) {
	window.scroll(0, 1);
	
	window.setTimeout(function() {
		$(window).scrollTop(0); 
	}, 0);
	
	$('.lenticular_container').css('width', $(window).width());
	$('.lenticular_container').css('height', $(window).height());
	
	var ua = window.navigator.userAgent;
	if(ua.indexOf('iPhone') !== -1 && ua.indexOf('Safari') !== -1) {
		attachMobileSafariAddressBarHelpTip('#main-nav');
	    attachMobileSafariAddressBarHelpTip('.lenticular_container');
	}
	
	callback();
}

function preventScroll(e) {
	e.preventDefault();
}

function setMouseCoords(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
}

function updateOrientation(e) {
	if(window.orientation == 0) {
		$body.removeClass('is-landscape').addClass('is-portrait');
	} else {
		$body.removeClass('is-portrait').addClass('is-landscape');
	}
	$(window).scrollTop(0).scrollLeft(0);
}

var attachMobileSafariAddressBarHelpTip = function (target) {
    var $target = $(target);
    $target.tooltip({
        title: 'Scroll up to hide Safari address bar',
        trigger: 'manual',
        placement: 'bottom'
    });
    $(window).on('resize', function () {
        var bodyHeight = document.body.offsetHeight;
        var windowHeight = window.innerHeight;
        var isLandscape = Math.abs(window.orientation) === 90;
        var showTooltip = (windowHeight < bodyHeight);
        if(!isLandscape) return;
        $target.tooltip(showTooltip ? 'show' : 'hide');
    });
}

//FIXING FOREACH IN IE8
if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function(callback){
      for (var i = 0; i < this.length; i++){
        callback.apply(this, [this[i], i, this]);
      }
    };
}