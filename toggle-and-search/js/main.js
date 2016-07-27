


$(document).ready(function(){
	//append span tag for toggle click
	$('.sitemap-list li:has(ul)').children('a').after('<span class="toggleIconClass"></span>');

	$('.toggleIconClass').each(function(){
		$(this).next('ul').addClass('toggleParent');
	})

	//add another class for plus/minus icon
	$('.toggleIconClass').click(function(){
		$(this).toggleClass('plusIcon').next('ul').slideToggle(); 
	})

	// expand/collapse all
	$('.toggalAll').click(function(){
		var $this = $(this);
		$this.toggleClass('collapse-all');
		
		if($(this).hasClass('collapse-all')){
			$('.toggleIconClass').addClass('plusIcon');
			$this.text('Collapse All');
			$('.sitemap-list-col').find('.sitemap-list li > ul').slideDown();
			$(".toggleIconClass").next('ul').css("display", "block");
		}
		else{
			$('.sitemap-list-col').find('.sitemap-list li > ul').slideUp();
			$('.toggleIconClass').removeClass('plusIcon');
			$this.text('Expand All');
		}
	})



})


$(".sitemap-list li a").each(function() {
    var liText=$(this).text().toLowerCase().replace(/\s/g, '');
    $(this).parent().addClass(liText);
});

function searchFunction(){
	var str=$('#search-field').val();

	
	if(str == ''){
		$('.notFound').hide();
		$('.seven-cols').show();
		return false
	}

	var value=str.toLowerCase().replace(/\s/g, '');
	if($("li[class*=" + value + "]").html() == undefined){
		$('.notFound').show();
		$('.seven-cols').hide();
	}
	else{
		$('.notFound').hide();
        $(".seven-cols").show();

        if ($("li[class*=" + value + "]").parents('ul.toggleParent').html() != undefined) {
			$("li[class*=" + value + "]").parents('ul.toggleParent').slideToggle();
        	$("li[class*=" + value + "]").parents('ul.toggleParent').prev('span').toggleClass('plusIcon');           
            
        }
        else {
            $("li[class*=" + value + "]").find('.toggleIconClass').next().first('ul').slideToggle();
        	$("li[class*=" + value + "]").find('span').first().toggleClass('plusIcon');
        }
	}

}


	
$('#search-field').keypress(function(e) {
    if(e.which == 13) {
        searchFunction();
        return false;
    }
});