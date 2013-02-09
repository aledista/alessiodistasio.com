$(document).ready(function() {

	// Color switcher when you click an nav anchor
    $('ul li a').click(function(){
    	var anyActive = $(this).parent().parent().find('li a.active');
    	// checks to see if the anchor parent list has an active anchor setted
    		if(anyActive) { 
  		  		// remove the active class from the previous selected anchor
    			$(this).parent().parent().find('li a.active').removeClass('active');
    			// add active state to the anchor clicked
    			$(this).addClass('active');
    		}
    });
    
    $('li.sidebarLi a').bind("click", jump2);
    $('li.yearsLi a').bind("click", jump);
	return false;


});

var jump=function(e)
{
       //prevent the "normal" behaviour which would be a "hard" jump
       e.preventDefault();
       //Get the target
       var target = $(this).attr("href");
       //perform animated scrolling
       $('html,body').animate(
       {
               //get top-position of target-element and set it as scroll target
               scrollTop: $(target).offset().top - 110
       //scrolldelay: 2 seconds
       },700);
}

var jump2=function(e)
{
       //prevent the "normal" behaviour which would be a "hard" jump
       e.preventDefault();
       //Get the target
       var target2 = $(this).attr("href");
       //perform animated scrolling
       $('html,body').animate(
       {
               //get top-position of target-element and set it as scroll target
               scrollTop: $(target2).offset().top - 315
       //scrolldelay: 2 seconds
       },700);
}
