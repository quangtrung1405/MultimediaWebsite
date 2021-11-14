
// ===== HoverIn/HoverOut Flash Effect =====

$('.track_info').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1");
});

$('.burger-wrapper, .logo-text, .back_btn').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1")
});

$('.btn-open-player').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1")
});


// ===== Player - List Items =====
$('.list_item').click(function() {
	$('.list_item').removeClass('selected');
	$(this).addClass('selected');
});


// ===== Main Play Button - Hover =====
	
$('.text-wrap .text').hover(function(){
	TweenMax.to($('.main-btn_wrapper'), 0.5, {opacity: 1, display: 'block', position: 'absolute', scale: 1, ease: Elastic.easeOut.config(1, 0.75)}),
	TweenMax.to($('.line'), 0.5, {css: { scaleY: 0.6, transformOrigin: "center center" }, ease: Expo.easeOut})},
								 
	function(){
		TweenMax.to($('.main-btn_wrapper'), 0.5, {opacity: 0, display: 'none', scale: 0, ease: Elastic.easeOut.config(1, 0.75)}),
		TweenMax.to($('.line'), 0.5, {css: { scaleY: 1, transformOrigin: "center center" }, ease: Expo.easeOut})
});


// ===== Curation Page  =====
// ===== List  =====
$('.item').hover(function(){
	TweenMax.to($(this), 0.5, {y: -30, ease: Power2.easeInOut}),	
	$(this).children('.thumb').addClass('shadow'),
	$(this).children('.connect_btn').addClass('shadow'),
		
	TweenMax.to($(this).children('.info'), 0.5, {opacity: 1, ease: Power2.easeInOut})
	},
								 
	function(){
		TweenMax.to($(this), 0.5, {y: 0, ease: Power2.easeInOut}),
		$(this).children('.thumb').removeClass('shadow'),
		$(this).children('.connect_btn').removeClass('shadow'),
			
		TweenMax.to($(this).children('.info'), 0.5, {opacity: 0, ease: Power2.easeInOut})
});


// ===== Home Page to Curation Page Transition  =====
// ===== Main Play Button Activate =====

$('.text-wrap .text').click(function(){
	
	var homeToMain = new TimelineMax({});
	
	// Hide
	$('.logo-text').css('display', 'none'),
	homeToMain.to($('.line, .text-wrap'), 0.5, {display: 'none', opacity: 0, y: -20, ease: Power2.easeInOut}, 0),
	
	// Background down
	homeToMain.to($('.wave-container'), 1, {yPercent: 30, ease: Power2.easeInOut}, 0),
		
	// Show
	$('#curator').css('display', 'block'),
	homeToMain.fromTo($('.back_btn'), 0.8, {x: 15},
										{display: 'flex', opacity: 1, x: 0, ease: Power2.easeInOut}, 1),
		
	homeToMain.fromTo($('.curator_title_wrapper'), 0.8, {opacity: 0, x: 30},
										{opacity: 1, x: 0, ease: Power2.easeInOut}, 1),
		
	homeToMain.fromTo($('.curator_list'), 0.8, {opacity: 0, display: 'none', x: 30},
									{opacity: 1, x: 0, display: 'block', ease: Power2.easeInOut}, 1.2)
	
});


// ===== Curation Page to Playlist Page Transition  =====
// ===== Item Activate =====
$('.item').click(function(){
	var mainToPlaylist = new TimelineMax({});
	
	// Hide
			
	// mainToPlaylist.fromTo($('.curator_list'), 0.5, {opacity: 1, display: 'block', x: 0},
	// 									{opacity: 0, x: 30, display: 'none', ease: Power2.easeInOut}, 0.5),
	
	
	
	
});
var audio = document.getElementById('audio');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;

function playPause(){
	if(count == 0){
		count = 1;
		audio.play();
		playPauseBTN.innerHTML = "Pause &#9208;";
	}else{
		count = 0;
		audio.pause();
		playPauseBTN.innerHTML = "Play &#9658;";
	}

}

function stop(){
	playPause()
	audio.pause();
	audio.currentTime = 0;
	playPauseBTN.innerHTML = "Play &#9658;";
}


