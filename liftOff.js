$.fn.liftOff = function(){
    var div=$(".preloader");
    $.when(
    	$(".logo-container").animate({bottom: '40%'}).promise()
    ).done(function(){
    	$(".loader-container").animate({bottom: '20%'}).promise
    })

    div.delay(4000).animate({bottom:'100%'}, 400);

 };


$(document).ready(function(){
    $('body').liftOff();

});