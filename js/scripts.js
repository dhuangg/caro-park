/**
 * Created by Daniel on 11/30/2015.
 */
jQuery(document).ready(function(){
    $('#home').on('click',function(){scrollTo('#top');})
    $('.glyphicon-menu-down').on('click',function(){
       scrollTo('#gallery');
    });
});

function scrollTo(id){
    $('html, body').animate({
        scrollTop:$(id).offset().top - 90
    },2000);
}

function buildScroll(tag){
    $(tag).on('click', function(e){
        e.preventDefault();
        scrollTo(tag + 'h');
    });
}

var app=angular.module("portfolio", []);
app.controller('GalleryNavigation',function(){

});