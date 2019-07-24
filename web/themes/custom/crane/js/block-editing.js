(function($, Drupal) {

Drupal.behaviors.menuVocabTerms = {
	attach: function (context, settings) {
    $("a.block-library", context).once('menuterms').each(function(){
      $(document).ready(function(){
        if(($('.block-homepage-featured-content-form').length) || ($('.block-homepage-intro-form').length) || ($('.block-homepage-resources-form').length) || ($('.block-content-homepage-featured-content-delete-form').length) || ($('.block-content-homepage-intro-delete-form').length) || ($('.block-content-homepage-resources-delete-form').length)) {
          $('a.block-library').attr('href','/admin/structure/block/blocks-home').text('Home page blocks.');
        }
      });
   	});
   }
};



})(jQuery, Drupal);
