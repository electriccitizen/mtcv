(function($, Drupal, once) {

/* RESPONSIVE TABLES WITH STACKTABLE
------------------------------------ */
Drupal.behaviors.stackTable = {
	attach: function (context, settings) {
		$(once('responsive_table', '.layout-container table', context)).each(function(){
			$(this).cardtable({myClass:'responsive-table'});
			$(document).ajaxComplete(function() {
					$('.layout-container table').cardtable({myClass:'responsive-table'});
			});
		});
	}
};

})(jQuery, Drupal, once);
