(function($, Drupal) {

/* LAYOUT TABS
------------------------------------ */
Drupal.behaviors.layoutTabs = {
	attach: function (context, settings) {
		$('.layout__region--tabs:not(.layout-builder__region)', context).once('isTabs').each(function(){
      $('.tabs-instructions').remove();
      var tabItems = $(this).children();
      if(tabItems.length > 1){
        $(this).wrapInner('<div class="tabs-wrapper"></div>');
        $('.tabs-wrapper', this).prepend('<ul class="tabs-header"></ul>');
        tabItems.each(function(){
          var tabTitle = $('.block-title', this).text();
          var tabId = 'tab' + Math.floor((Math.random() * 100) + 1);
          var tabControl = '<li><a href="#" class="tab-control" aria-expanded="false" aria-controls="' + tabId + '">' + tabTitle + '</a></li>';
          $('.tabs-header').append(tabControl);
          $(this).wrapAll('<div id="' + tabId + '" class="tab-item" aria-hidden="true"></div>');
        });
        $('.tab-item:first').attr('aria-hidden', 'false').addClass('open-tab');
        $('.tab-control:first').attr('aria-expanded', 'true').addClass('active-tab');
      }
      $('.tab-control').click(function(){
        if(!$(this).is('.tab-control.active-tab')){
          var tabTrigger = $(this).attr('aria-controls');
          $('.active-tab').removeClass('active-tab').attr('aria-expanded', 'false');
          $('.open-tab').removeClass('open-tab').attr('aria-hidden', 'true').hide();
          $(this).addClass('active-tab').attr('aria-expanded', 'true');
          $('.tab-item#' + tabTrigger).addClass('open-tab').attr('aria-hidden', 'false').fadeIn(500);
        }
      });
		});
	}
};

})(jQuery, Drupal);
