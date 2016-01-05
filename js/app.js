/**
 * Created by Daniel on 12/10/2015.
 */

jQuery(document).ready(function(){
    setTimeout(function(){
        $('.carousel-inner .item:first-child').addClass('active');
    },500);
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
    this.isActive=function(){
        console.log('crap');
        return $('span').parent('li').hasClass('.active');
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

app.directive("work",function(){
    return{
        restrict:'E',
        templateUrl:'templates/work.html'
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

var webLibrary=[
    {
        title:'death_grips.gif',
        image:'death_grips.gif',
        num:'1'
    },
    {
        title:'Contempo Flux',
        image:'contempo_flux.gif',
        num:'1'
    }
];
var videoLibrary=[
    {
        title:'Bruin Bash',
        image:'bbash.gif',
        num:'0'
    }
];
var exhibitionLibrary=[
    {
        title:'Bruin Bash',
        image:'bbash.gif',
        num:'0'
    }
];
var photographyLibrary=[
    {
        title:'Bruin Bash',
        image:'bbash.gif',
        num:'0'
    }
];
var illustrationLibrary=[
    {
        title:'Bruin Bash',
        image:'bbash.gif',
        num:'0'
    }
];
