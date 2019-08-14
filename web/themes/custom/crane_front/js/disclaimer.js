(function($, Drupal) {

/* DISCLAIMER
------------------------------------ */
Drupal.behaviors.disclaimer = {
	attach: function (context, settings) {
		$('.node-disclaimer', context).once('legalese').each(function(){
      $(document).ready(function(){
        $('.node-disclaimer').delay(10000).fadeOut(500);
        $('.node-disclaimer a').click(function(e){
	      	e.preventDefault();
	      	$('.node-disclaimer').addClass('visually-hidden');
	      });
      });
		});
	}
};

})(jQuery, Drupal);
