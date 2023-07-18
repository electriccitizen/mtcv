(function($, Drupal, once) {

Drupal.behaviors.accordion = {
    attach: function (context, settings) {
      $(once('accordion', '.accordion-item', context)).each(function(){
        //open and shut accordions on click
        $('.accordion-header a', this).click(function(e){
          e.preventDefault();
          var activeHeader = $(this).parent('.accordion-header');
          if(activeHeader.closest('.accordion-item.accord-active').length){
            $('.accord-active').removeClass('accord-active');
            activeHeader.next().slideUp(500).attr('aria-hidden', 'true').end().find('a').attr('aria-expanded', "false");
          }else{
            $('.accord-active').find('.field-text').slideUp(500).attr('aria-hidden', 'true').end().removeClass('accord-active').find('.accordion-header a').attr('aria-expanded', 'false');
            activeHeader.parent('.accordion-item').addClass('accord-active').end().next().slideDown(500).attr('aria-hidden', 'false').end().find('a').attr('aria-expanded', "true");
          }
        });
      });
    }
}

})(jQuery, Drupal, once);
