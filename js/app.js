/**
 * Created by Daniel on 12/10/2015.
 */

jQuery(document).ready(function(){
    $('.carousel').carousel(200);
    $('.left').on('click',function(){
        $('.carousel').carousel('prev');
    });
    $('.right').on('click', function(){
        $('.carousel').carousel('next');
    });
    $('.carousel-indicators').on('click',function(event){
        //alert('hi');
        var num=event.target.firstChild("li").id;
        $('.carousel').carousel(num);
    });
    setTimeout(function(){
        $('.carousel-inner .item:first-child').addClass('active');
    },500);
});

var app=angular.module("portfolio", []);

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
            $('.carousel').carousel(200);
            $('.carousel-inner').fadeOut('slow');
            this.currLibrary="print";
            $('.carousel-inner').fadeIn('slow');
        }
        if(setSec==1){
            setTimeout(function(){
                $('.carousel-inner .item:first-child').addClass('active');
            },500);
            $('.carousel').carousel(200);
            $('.carousel-inner').fadeOut('fast');
            this.currLibrary="web";
            $('.carousel-inner').fadeIn('slow');
        }
        if(setSec==2){
            setTimeout(function(){
                $('.carousel-inner .item:first-child').addClass('active');
            },500);
            $('.carousel').carousel(200);
            $('.carousel-inner').fadeOut('slow');
            this.currLibrary="video";
            $('.carousel-inner').fadeIn('slow');
        }
    };
    this.isSelected=function(checkSec){
        return this.section==checkSec;
    };

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

