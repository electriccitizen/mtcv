(function($, Drupal) {

/* SELECT2
----------------------- */
Drupal.behaviors.mobileSelect = {
	attach: function (context, settings) {
    $("select", context).once('selects').each(function(){
    	$( 'form:not(.entity-embed-dialog):not(.entity-form-display-form):not(.entity-view-display-form) select' ).select2({
    		placeholder: "Select an option"
    	});
      $(".js-form-type-select", context).once('selectAccessiblity').each(function(){
        $(document).ready(function(){
          $('.select2-search__field').each(function(){
            var label = $(this).closest('.select2-container').siblings('label').text();
            $(this).attr('aria-label',label).removeAttr('role');
          });
        });
      });
   	});
   }
};

/* QUICKLINKS NAV
------------------------------------ */
Drupal.behaviors.pageMenu = {
  attach: function (context, settings) {
    $("#block-crane-quicklinks", context).once('page-menu').each(function(){      
      $('#block-crane-quicklinks .item-level-1 > a').attr('aria-expanded','false').siblings('ul').attr('aria-hidden', true);

      var wwidth = $(window).outerWidth();

      //set button roles, tab indexes and keypresses on sidebar links
      $(document).on('click','#block-crane-quicklinks.desk-quick .item-level-1 > a',function(e){
        e.preventDefault();
        if($(this).attr('aria-expanded') == 'true'){
          $(this).attr('aria-expanded', "false").siblings('ul').animate({'left':'-310'}, 300).attr('aria-hidden', 'true').end().closest('li').removeClass('expanded');
        }else{
          $('#block-crane-quicklinks li.expanded').removeClass('expanded').find('> a').attr('aria-expanded', 'false').siblings('ul').animate({'left':'-320'}, 300).attr('aria-hidden', 'true');
          $(this).attr('aria-expanded', "true").siblings('ul').animate({'left':'+80'}, 300).attr('aria-hidden', 'false').end().closest('li').addClass('expanded');
        }
      });
      $(document).on('click','#block-crane-quicklinks.mobile-quick .item-level-1 > a',function(e){
        e.preventDefault();
        if($(this).attr('aria-expanded') == 'true'){
          $(this).attr('aria-expanded', "false").siblings('ul').slideUp(300).attr('aria-hidden', 'true').end().closest('li').removeClass('expanded');
        }else{
          $('#block-crane-quicklinks li.expanded').removeClass('expanded').find('> a').attr('aria-expanded', 'false').siblings('ul').slideUp(300).attr('aria-hidden', 'true');
          $(this).attr('aria-expanded', "true").siblings('ul').slideDown(300).attr('aria-hidden', 'false').end().closest('li').addClass('expanded');
        }
      });

      $(window).on('resize',  _.debounce( mobileQuickNav, 10 )).trigger('resize');

    });
  }
}//end quicklinks

$.fn.removeStyle = function(style) {
  var search = new RegExp(style + '[^;]+;?', 'g');
  return this.each(function() {
    $(this).attr('style', function(i, style) {
       return style && style.replace(search, '');
    });
  });
};

function mobileQuickNav() {
  var wwidth = $(window).outerWidth();
  if (wwidth < 600) {
    $('.desk-quick .item-level-1 > a').attr('aria-expanded', "false").siblings('ul').attr('aria-hidden', 'true').removeStyle('left');;
    $('#block-crane-quicklinks').removeClass('desk-quick').addClass('mobile-quick');
  }else{
    $('.mobile-quick .item-level-1 > a').attr('aria-expanded', "false").siblings('ul').attr('aria-hidden', 'true').removeStyle('display');;
    $('#block-crane-quicklinks').removeClass('mobile-quick').addClass('desk-quick');
  }
};


/* TAXONOMY OVERVIEW MENU VOCAB ALTERS
----------------------- */
Drupal.behaviors.menuVocab = {
  attach: function (context, settings) {
    $("#taxonomy-overview-vocabularies", context).once('MenuVocabAlter').each(function(){
      $(document).ready(function(){
        $('ul[data-drupal-selector*="menu"]').children().each(function() {           
          $(this).html($(this).html().replace(/term/g,"link"));
        });
      });
    });
   }
};



})(jQuery, Drupal);
