$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		dots:false,
		slidesToShow:2.2,
		autoplay:true,
		speed:2000,
		autoplaySpeed:1200,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

$(document).ready(function(){
	$('.slider_our-advantages').slick({
		rtl: true,
		arrows:false,
		dots:false,
		slidesToShow:2.2,
		autoplay:true,
		speed:2000,
		autoplaySpeed:1200,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1.7
				}
			}
		]
	});
});

