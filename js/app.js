/**
 * Created by Daniel on 12/10/2015.
 */

jQuery(document).ready(function(){
    $('.carousel').carousel();
    $('.left').on('click',function(){
        $('.carousel').carousel('prev');
    });
    $('.right').on('click', function(){
        $('.carousel').carousel('next');
    });
    $('.carousel-indicators').on('click',function(event){
        alert('hi');
        var num=event.target.id;
        $('.carousel').carousel(num);
    });
    setTimeout(function(){
        $('.carousel-inner .item:first-child').addClass('active');
    },500);
});
currentIndex = $('div.active').index() + 1;
$('.carousel').bind('slid', function() {
    currentIndex = $('div.active').index() + 1;
});

var app=angular.module("portfolio", ['ngRoute']);

app.controller('GalleryNavigation',function(){
    this.section="0";
    this.slides=Library;
    this.currLibrary="print";
    this.selectSection=function(setSec){
        this.section=setSec;
        if(setSec==0){
            setTimeout(function(){
                $('.carousel-inner .item:first-child').addClass('active');
            },500);
            this.currLibrary="print";
        }
        if(setSec==1){
            setTimeout(function(){
                $('.carousel-inner .item:first-child').addClass('active');
            },500);
            this.currLibrary="web";
        }
        if(setSec==2){
            setTimeout(function(){
                $('.carousel-inner .item:first-child').addClass('active');
            },500);
            this.currLibrary="video";
        }
    };
    this.isSelected=function(checkSec){
        return this.section==checkSec;
    };
    this.isActive=function(num){
        console.log("Current Index: " + currentIndex);
        console.log("Slide Index: "+(num+1));
        console.log(currentIndex==(num+1));
        return currentIndex==(num+1);
    }
});

app.controller('AboutNavigation',function(){
    this.section=0;
    this.isSelected=function(checkSection){
        return this.section==checkSection;
    };
    this.setSection=function(setSection){
        this.section=setSection;
    };
});

//Custom directives are below
//This allows me to create my own HTML tags that Angular recognizes to load the HTML
app.directive("carouselIndicators",function(){
    return{
        restrict:'E',
        templateUrl:'templates/carousel-indicators.html'
    };
});

app.directive("works",function(){
    return{
        restrict:'E',
        templateUrl:'templates/works.html'
    };
});

var Library=[
    {
        title:'Aluna George Promo Poster',
        image:'aluna_george.gif',
        num:'0',
        library:'print'
    },
    {
        title:'Contempo Flux',
        image:'contempo_flux.gif',
        num:'1',
        library:'print'
    },
    {
        title:'death_grips.gif',
        image:'death_grips.gif',
        num:'0',
        library:'web'
    },
    {
        title:'Bruin Bash',
        image:'bbash.gif',
        num:'1',
        library:'web'
    }
];

