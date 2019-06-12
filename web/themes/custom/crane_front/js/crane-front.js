(function($, Drupal) {

/* QUICKLINKS NAV
------------------------------------ */
Drupal.behaviors.pageMenu = {
	attach: function (context, settings) {
		$("#block-quicklinks", context).once('page-menu').each(function(){  		
			$('#block-quicklinks .item-level-1 > a').attr('aria-expanded','false').siblings('ul').attr('aria-hidden', true);

			//set button roles, tab indexes and keypresses on sidebar links
			$(document).on('click','#block-quicklinks .item-level-1 > a',function(e){
				e.preventDefault();
        if($(this).attr('aria-expanded') == 'true'){
          $(this).attr('aria-expanded', "false").siblings('ul').slideUp(300).attr('aria-hidden', 'true').end().closest('li').removeClass('expanded');
        }else{
        	$('#block-quicklinks li.expanded').removeClass('expanded').find('> a').attr('aria-expanded', 'false').siblings('ul').slideUp(300).attr('aria-hidden', 'true');
          $(this).attr('aria-expanded', "true").siblings('ul').slideDown(300).attr('aria-hidden', 'false').end().closest('li').addClass('expanded');
        }
			});

		});
	}
}//end page menu function

})(jQuery, Drupal);
