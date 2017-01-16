var debug = false;

$(document).ready(function(){
	set_size(function(){
		var myLenticular = new Lenticular.Image($('.lenticular_container')[0], {
			images: 'imgs/Test##.jpg',
			frames: 24,
			minTilt: 12,
			maxTile: 12
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

//FIXING FOREACH IN IE8
if (typeof Array.prototype.forEach != 'function') {
    Array.prototype.forEach = function(callback){
      for (var i = 0; i < this.length; i++){
        callback.apply(this, [this[i], i, this]);
      }
    };
}