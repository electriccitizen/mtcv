(function($, Drupal) {

  $(document).on('click','#edit-ec-preview',function(e) {
    e.preventDefault();
    $('.responsive-preview-icon-active').trigger('click');
  });


})(jQuery, Drupal, drupalSettings);
