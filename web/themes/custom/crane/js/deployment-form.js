(function($, Drupal) {

/* Add Counter
----------------------- */
Drupal.behaviors.liveCounter = {
	attach: function (context, settings) {
    $("#deployment-form", context).once('deploys').each(function(){
      var count = $('.toolbar-menu .deploy-live').text().replace('LIVE (','');
    	if($('#deployment-form.live').length){
        $(this).prepend('<div class="deploy-counter"><strong>There are <span>' + count.replace(')','') + '</span> waiting to go live!</strong></div>');
      }
   	});
   }
};

})(jQuery, Drupal);
