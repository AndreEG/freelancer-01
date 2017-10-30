$(document).ready(function(){
    
       $(window).scroll(function(){
           if( $(this).scrollTop() > 0 ){
               $('nav').addClass('nav-2');
           } else {
               $('nav').removeClass('nav-2');
           }
       });
    
   });