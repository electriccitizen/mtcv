(function($, Drupal) {

Drupal.behaviors.menuVocab = {
	attach: function (context, settings) {
    $("body", context).once('menuterms').each(function(){
      $(document).ready(function(){
        $("body").children().each(function() {           
          $(this).html($(this).html().replace(/term/g,"link"));
        });
      });
   	});
   }
};



})(jQuery, Drupal);
