$(document).ready(function(){
	$(".menu-button").click(function(){
		$(".menu-bar").toggleClass( "open" );
	});

	$(".menu-bar").children().click(function(){
		$(".menu-bar").children().clildren().removeClass("open");
	});

	
})
