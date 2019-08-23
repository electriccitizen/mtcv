(function($, Drupal) {

/* RESPONSIVE TABLES WITH STACKTABLE
------------------------------------ */
Drupal.behaviors.stackTable = {
	attach: function (context, settings) {
		$('.layout-container table', context).once('responsive_table').each(function(){
			$(this).cardtable({myClass:'responsive-table'});
			$(document).ajaxComplete(function() {
					$('.layout-container table').cardtable({myClass:'responsive-table'});
			});
		});
	}
};

})(jQuery, Drupal);
