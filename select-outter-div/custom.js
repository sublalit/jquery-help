$(document).ready(function(){
	// add class on outter div
	$('.btn-info').closest('.col-md-4').addClass('newClass');

	// add class on click on outter div
	$('.btn-warning').on('click', function(){
		$(this).closest('.col-md-4').addClass('newClass');
	})

	// add and remove outter class on click
	$('.btn-primary').on('click', function(){
		if($(this).closest('.col-md-4').hasClass("show"))
		{
		$(this).closest('.col-md-4').removeClass("show");	
		}
		else
		{
		$(this).closest('.col-md-4').addClass("show");
		}

	})
})