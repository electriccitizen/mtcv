(function($, Drupal, once) {

/* DISCLAIMER
------------------------------------ */
Drupal.behaviors.disclaimer = {
	attach: function (context, settings) {
		$(once('legalese', '.node-disclaimer', context)).each(function(){
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

})(jQuery, Drupal, once);
