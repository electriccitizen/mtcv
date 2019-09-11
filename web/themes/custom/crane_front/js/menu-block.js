(function($, Drupal) {
Drupal.behaviors.pageMenu = {
	attach: function (context, settings) {
		$("#block-page-menu", context).once('page-menu').each(function(){  
			//mobile toggle
			$('.crane-menu-toggle').click(function(e){
				e.preventDefault();
		      if($(window).outerWidth() < 976){
		        if($(this).is('.active-nav')){
		          $(this).removeClass('active-nav').next('ul.root-menu').slideUp(300);
		        }else{
		          $(this).addClass('active-nav').next('ul.root-menu').slideDown(300);
		        }
		      }
			});
					
			//need doc ready because active-class script fires after theme scripts
			$(document).ready(function(){
				$('#block-page-menu ul li').each(function(){
					//find nested lists and set their parents and expanders
					if(($('ul', this).length) && (!$('.expander:first', this).length) ){
					  $(this).addClass('parent').prepend('<a href="#" class="expander" aria-expanded="false" role="button" aria-label="Page Submenu Expander"></a>').find(' > a:not(.expander)').next('ul').attr('aria-hidden', 'true');
					}

					//find active links and set the active trail
					$('.is-active', this).removeAttr('href').siblings('ul').slideDown(100).attr('aria-hidden', 'false').end().parentsUntil('#block-page-menu > ul').addClass('active-trail expanded');

					//find active-trail li and add aria expanded role to the expander
					$('li.active-trail > .expander').attr('aria-expanded', "true").siblings('ul').attr('aria-hidden', 'false');
				});

				//set button roles, tab indexes and keypresses on sidebar links
				$(document).on('click','#block-page-menu .expander',function(e){
					e.preventDefault();
          if($(this).attr('aria-expanded') == 'false'){
            $(this).attr('aria-expanded', "true").siblings('ul').slideDown(300).attr('aria-hidden', 'false').end().closest('li').addClass('expanded');
          }else{
            $(this).attr('aria-expanded', "false").siblings('ul').slideUp(300).attr('aria-hidden', 'true').end().closest('li').removeClass('expanded');
          }
				});
			});
		});
	}
}//end page menu function

})(jQuery, Drupal);
