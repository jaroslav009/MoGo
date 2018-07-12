

jQuery(document).ready(function($) {

	var show = true;
	// $(window).on("scroll", function() {
	// 	if(!show) return false;
	// 	var w_top = $(window).scrollTop();
	// 	var e_top = $('#advantages').offset().top;
	// 	if(w_top + 300 >= e_top) {
	// 		$('.number').spincrement({
	// 			duration: 4000,
	// 			from: 0
	// 		});
	// 		show = false;
	// 	}

	// });
	$('.cont-work, .cont-work2, .cont-work3').hide();
	$('.hide-element').click(function() {

		$('.cont-work').slideToggle("slow");
		$(this).toggleClass('fa-angle-up');
	});
	$('.hide-element2').click(function(event) {
		$('.cont-work2').slideToggle("slow");
		$(this).toggleClass('fa-angle-up');
	});
	$('.hide-element3').click(function(event) {
		$('.cont-work3').slideToggle("slow");
		$(this).toggleClass('fa-angle-up');
	});

	$('.owl-carousel').owlCarousel({
		center: true,
		margin:50,
		loop: true,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>' ],
		responsive:{
	        0:{
	            items:1,
	            nav:false
	        },
	        600:{
	            items:1,
	            nav:false
	        },
	        1000:{
	            items:1,
	            nav:true,
	            loop:false
	        }
    }
	});

}); 

	
		
function scrollFunc(id) {
	var offset = 0;
	$('html, body').animate ({
		scrollTop: $(id).offset().top
	}, 1000);
}