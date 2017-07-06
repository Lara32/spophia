// /**
//  * Created by L on 02.07.2017.
//  */
// $(function(){
// 	$('.menu_button').on('click', function() {
// 		$('ul.main_menu').slideToggle(300, function(){
//         if($(this).css('display')=== 'none'){
// 		$(this).removeAttr('style');}
// 		});
// 	});
// });

// $(function(){
// 	$('.menu_button2').on('click', function() {
// 		$('.aside_menu').slideToggle(300, function(){
//         if($(this).css('display')=== 'none'){
// 		$(this).removeAttr('style');}
// 		});
// 	});
// });

$(function(){

    var offset = 300,
        offset_opacity = 1200,
        scroll_top_duration = 700,
        $back_to_top = $('.fa-chevron-up');

    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0 ,
            }, scroll_top_duration
        );
    });
});