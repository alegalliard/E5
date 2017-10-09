$(function() {
    
    var slides = $('.slide');
    var current = 0;
    var next = current+1;
    var prev = slides.length;
    var sliderTime = 10000;
    
    slides.addClass('animated');
    
    
    var changeSliderTexts = function(){
        var title = slides.eq(current).data('title');
        var desc = slides.eq(current).data('desc');
        $('.slider-pagin').find('.current').text(current+1);
        $('.slider-title').text(title);
    }
    
    changeSliderTexts();
    
    var slider = function(){
        changeSliderTexts();
        slides.eq(current);
        
        slides.addClass('fadeIn fadeOut');
        slides.eq(current).addClass('fadeIn').removeClass('fadeOut');
        slides.eq(next).addClass('fadeOut').removeClass('fadeIn');
        
        
        if(current < slides.length) {
            current++;
            next = current+1;
            prev = current-1;
            
        } else {
            current = 0;
            next = current+1;
            prev = slides.length;
        }        
    }
    
    
    window.setInterval(slider, sliderTime);
   
});