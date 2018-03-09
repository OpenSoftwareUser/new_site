//Start full load
$(document).ready(function() {

$('.d_gallery_button').click(
function () {

			var to_big = "./img/big_img/big_" + $(this).attr('id') + '.jpg';

			$('.d_gallery_big_photo').removeAttr('src').attr('src',to_big);
			
			$( ".d_img1" ).removeClass("d_img1");
			$(this).addClass( "d_img1" );
	
});

$('.m_menu_button_cm').click(
function () {

	$('.m_menu_button_cm').toggleClass("m_menu_button_om")
	
});


});//End full load