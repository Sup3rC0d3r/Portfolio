$(document).ready(function(){

var content = $("blockquote")

/* Toggle content associated with each menu item on mouseover
   unless the content is already visible

*/
	function ToggleQuote(n) {

		$(".nav_header li").eq(n).on('mouseenter',function(){
		if (content.eq(n).is(":visible")) {} 
		else{
		content.hide();
		content.eq(n).slideToggle();
		};
		});
				
	}

	content.hide();
	$(".pageContainer").fadeIn(1000);
	content.eq(0).show();
	
//Run Toggle Quote Function on each Menu item
	for (var i = 0; i < 5; i++) {
	ToggleQuote(i);
	};


});

