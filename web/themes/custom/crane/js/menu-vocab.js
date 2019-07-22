(function($, Drupal) {

Drupal.behaviors.menuVocabTerms = {
	attach: function (context, settings) {
    $("body", context).once('menuterms').each(function(){
      $(document).ready(function(){
        $("#block-crane-local-actions").children().each(function() {           
          $(this).html($(this).html().replace(/term/g,"link"));
        });
        $(".taxonomy-term-form > .form-item-prefix,#edit-relations label,#edit-weight--description,#edit-help").each(function() {           
          $(this).html($(this).html().replace(/term/g,"link"));
        });
      });
   	});
   }
};



})(jQuery, Drupal);
