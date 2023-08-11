(function($, Drupal, once) {

/* QUICKLINKS NAV
------------------------------------ */
Drupal.behaviors.quickMenu = {
	attach: function (context, settings) {
		$(once('quick-menu', '#block-quicklinks', context)).each(function(){		
			$('#block-quicklinks .item-level-1 > a:not(.live)').attr('aria-expanded','false').siblings('ul').attr('aria-hidden', true);

			var wwidth = $(window).outerWidth();

      //insert deploy items
      $(document).ready(function(){
        var liveDeploys = $('.toolbar-menu a.deploy-live').text();
        $('#block-quicklinks a.live-deploys,.header-actions .deploy-link').text('Deploy ' + liveDeploys);
      });

      //set button roles, tab indexes and keypresses on sidebar links
      $(document).on('click','.crane-menu-toggle',function(e){
        e.preventDefault();
        if($(this).is('.crane-menu-toggle.active')){
          $(this).removeClass('active').next('ul.root-menu').slideUp(300);
        }else{
          $(this).addClass('active').next('ul.root-menu').slideDown(300);
        }
      });

			//set button roles, tab indexes and keypresses on sidebar links
			$(document).on('click','#block-quicklinks.desk-quick .item-level-1 > a:not(.live)',function(e){
				e.preventDefault();
      	$('#block-quicklinks li.expanded').removeClass('expanded').find('> a').attr('aria-expanded', 'false').siblings('ul').animate({'left':'-310'}, 300).attr('aria-hidden', 'true');
        $(this).attr('aria-expanded', "true").siblings('ul').animate({'left':'+0'}, 300).attr('aria-hidden', 'false').end().closest('li').addClass('expanded');
			});
      $(document).on('click','#block-quicklinks.desk-quick .item-level-2 > a.subtoggle',function(e){
        e.preventDefault();
        $('#block-quicklinks li.expanded').removeClass('expanded').find('> a').attr('aria-expanded', 'false').siblings('ul').animate({'left':'-310'}, 300).attr('aria-hidden', 'true');
      });
			$(document).on('click','#block-quicklinks.mobile-quick .item-level-1 > a:not(.live)',function(e){
				e.preventDefault();
        if($(this).attr('aria-expanded') == 'true'){
          $(this).attr('aria-expanded', "false").siblings('ul').slideUp(300).attr('aria-hidden', 'true').end().closest('li').removeClass('expanded');
        }else{
        	$('#block-quicklinks li.expanded').removeClass('expanded').find('> a').attr('aria-expanded', 'false').siblings('ul').slideUp(300).attr('aria-hidden', 'true');
          $(this).attr('aria-expanded', "true").siblings('ul').slideDown(300).attr('aria-hidden', 'false').end().closest('li').addClass('expanded');
        }
			});

			$(window).on('resize', debounce( mobileQuickNav, 10 )).trigger('resize');

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
  if (wwidth < 760) {
  	$('.desk-quick .item-level-1 > a:not(.live)').attr('aria-expanded', "false").siblings('ul').attr('aria-hidden', 'true').removeStyle('left');;
  	$('#block-quicklinks').removeClass('desk-quick').addClass('mobile-quick');
  }else{
    $('.mobile-quick .item-level-1 > a:not(.live)').attr('aria-expanded', "false").siblings('ul').attr('aria-hidden', 'true').removeStyle('display');;
  	$('#block-quicklinks').removeClass('mobile-quick').addClass('desk-quick');
  }
};

})(jQuery, Drupal, once);
