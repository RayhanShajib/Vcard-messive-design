/**	
	* Template Name: Massfolio
	* Version: 1.0	
	* Template Scripts
	* Author: Tech Fountain
	* Author URI: http://tech-fountain.com/

	explore JS
	
	1. Preloader
	2. WOW.js
	3. Sidebar
	4. Scroll Back to Up Button
	5. Service Info Button
	6. Tell One Info Box
	7. Tell Two Info Box
	8. Tell Three Info Box
	9. Tell Four Info Box
	10. Testimonial carousel 
	11. Contact Form
	12. Footer
	
**/
// ---------------------Preloader--------------------- //
$(window).on('load', function(){
	setTimeout(function(){
		$('.preloader').addClass('loaded');
	},5000);
	$('.preloader-box').addClass('hide')
});
// ---------------------Sidebar--------------------- //
$(document).ready(function(){
	$('.openingButton').click(function(){
		$('.sidebar').toggleClass('positioned');
	});
});
// ---------------------Contact Form--------------------- //
$('.fname-input').focus(function(){
	$('.fname-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.fname-input').focusout(function(){
		if($(this).val() == ''){
			$('.fname-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.fname-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
$('.lname-input').focus(function(){
	$('.lname-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.lname-input').focusout(function(){
		if($(this).val() == ''){
			$('.lname-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.lname-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
$('.mobile-number-input').focus(function(){
	$('.mobile-number-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.mobile-number-input').focusout(function(){
		if($(this).val() == ''){
			$('.mobile-number-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.mobile-number-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
$('.email-input').focus(function(){
	$('.email-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.email-input').focusout(function(){
		if($(this).val() == ''){
			$('.email-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.email-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
$('.message-input').focus(function(){
	$('.message-label').attr("id","activate");
	$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
	$('.message-input').focusout(function(){
		if($(this).val() == ''){
			$('.message-label').attr("id","");
			$(this).attr("style","");
		}
		else{
			$('.message-label').attr("id","activate");
			$(this).attr("style","outline:none;border-bottom:2px solid #51C2E8;");
		}
	})
})
// ---------------------Footer--------------------- //
// Year //
var time = new Date();
var year = time.getFullYear();
document.querySelector('#footer-year').innerHTML = time.getFullYear();
// ---------------------Scroll Back to Up Button--------------------- //
window.addEventListener('scroll',function(){
	var scroll = window.scrollY;
	if(scroll>100){
		$('.ScrollUpButton').attr("id","ScrollUpButton");
	}
	else{
		$('.ScrollUpButton').attr("id","");
	}
})
// ---------------------Testimonial carousel--------------------- //
$(function(){
	$("#customers-testimonial").owlCarousel({
		items:1,
		autoplay:true,
		smartSpeed:700,
		look:true,
		loop:true,
		autoPlayHoverPause:true
	});
});


