$(function() {
    
    var slides = $('.slide');
    var total = slides.length;
    var current = 0;
    var next = current+1;
    var sliderTime = 10000;
    
    slides.addClass('animated');
    slides.css('opacity',0);
    slides.eq(current).removeAttr('style');
    
    
    var changeSliderTexts = function(){
        var title = slides.eq(current).data('title');
        var desc = slides.eq(current).data('desc');
        $('.slider-pagin').find('.current').text(current+1);
        $('.slider-title').text(title);
    }
    
    changeSliderTexts();
    
    var slider = function(){
        
        if(current+1 < total){
            current++;
            next = current+1;
        } else {
            current = 0;
            next = current+1;
        }
        
        changeSliderTexts();
        slides.eq(current-1).addClass('fadeOut');
        slides.eq(current).removeClass('fadeOut').addClass('fadeIn');
    }
    

    window.setInterval(slider, sliderTime);

   
});