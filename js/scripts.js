/**
 * Created by Daniel on 11/30/2015.
 */
jQuery(document).ready(function(){
    $('#home').on('click',function(){scrollTo('#top');});
    $('.glyphicon-menu-down').on('click',function(){
       scrollTo('#gallery-anchor');
    });
    $(window).scroll(function(){
        if($(window).scrollTop()<100){
            $("#center").fadeIn('fast');
        }else{
            $("#center").fadeOut('slow');
        }
    });
});

function scrollTo(id){
    $('html, body').animate({
        scrollTop:$(id).offset().top-30
    },2000);
}

function buildScroll(tag){
    $(tag).on('click', function(e){
        e.preventDefault();
        scrollTo(tag + 'h');
    });
}


