$( function() {
  var sidenav = $('.sidenav');
  var iconList = $('.icon-list');
  var menu = $('.full-itens');
  var collapseBtn = $('.collapse');

  var mainMenuIsVisible = function(){
    if(menu.hasClass('fadeInRight')){
      sidenav.addClass('menu-mobile');
      sidenav.removeClass('collapsible-mobile');
    } else {
      sidenav.addClass('collapsible-mobile');
      sidenav.removeClass('menu-mobile');
    }
  }

  mainMenuIsVisible();

  iconList.addClass('animated fadeInRight');
  iconList.on('click', function(){
    iconList.fadeOut(100);
    menu.toggleClass('fadeInRight fadeOutRight');
    mainMenuIsVisible();
      sidenav.delay(100).animate({
        'right': 0
      }, 150, function(){

      });
  });


  $('.collapse').on('click', function(e){
    e.preventDefault();
      menu.toggleClass('fadeInRight fadeOutRight');
      mainMenuIsVisible();
      sidenav.animate({
        'right': '-=172px'
      }, 150, function(){
        iconList.fadeIn(100);
      });

  });
});
