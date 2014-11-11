$.fn.liftOff = function(){
    var div=$(".preloader");
    $.when(
    	$(".logo-container").animate({bottom: '35%'}).promise()
    ).done(function(){
    	$(".loader-container").animate({bottom: '15%'}).promise
    })

    div.delay(4000).animate({bottom:'100%'}, 400);

 };


$(document).ready(function(){
    $('body').liftOff();

});