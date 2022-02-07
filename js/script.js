$(function () {
	//https://kenwheeler.github.io/slick/
	//Слайдер
	//$('.slider').slick();



	$(".wpcf7-form").submit(function () {
		var a = $(this);
		$.ajax({
			type: "POST",
			url: "/wp-content/themes/chery_expocar/mail.php",
			data: a.serialize()
		}).done(function () {
			$('.adp_poup').fadeOut(400);
			$("#poup_ok").fadeIn(400);
		});
		return !1
	});
	
	
	document.addEventListener( 'wpcf7mailsent', function( event ) {
		$('.adp_poup').fadeOut(400);
			$("#poup_ok").fadeIn(400);
	}, false );
	
	$('.modal-hide span').click(function(e) {
		$(this).closest('.adp_poup').hide();
	$('body').removeClass('fixed');					
	});
	

	$('body').on('click', '.popup-open', function(e){
		e.preventDefault();
		$('#'+$(this).attr('data-id')).show();
		$('body').addClass('fixed');
		console.log(2312312);
		return false;
	});

	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.adp_poup').hide();
		$('body').removeClass('fixed');
		}
	});

	$('.adp_poup').click(function(e) {
		if ($(e.target).closest('.request-form__wrapper').length == 0) {
			$(this).hide();				
		$('body').removeClass('fixed');
		}
	});

});