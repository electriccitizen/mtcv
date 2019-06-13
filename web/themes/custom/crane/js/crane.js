(function($, Drupal) {

/* SELECT2
----------------------- */
Drupal.behaviors.mobileSelect = {
	attach: function (context, settings) {
    $("select", context).once('selects').each(function(){
    	$( 'form:not(.entity-embed-dialog):not(.entity-form-display-form):not(.entity-view-display-form) select' ).select2({
    		placeholder: "Select an option"
    	});
      $(".js-form-type-select", context).once('selectAccessiblity').each(function(){
        $(document).ready(function(){
          $('.select2-search__field').each(function(){
            var label = $(this).closest('.select2-container').siblings('label').text();
            $(this).attr('aria-label',label).removeAttr('role');
          });
        });
      });
   	});
   }
};

/* QUICKLINKS NAV
------------------------------------ */
Drupal.behaviors.pageMenu = {
  attach: function (context, settings) {
    $("#block-crane-quicklinks", context).once('page-menu').each(function(){      
      $('#block-crane-quicklinks .item-level-1 > a').attr('aria-expanded','false').siblings('ul').attr('aria-hidden', true);

      //set button roles, tab indexes and keypresses on sidebar links
      $(document).on('click','#block-crane-quicklinks .item-level-1 > a',function(e){
        e.preventDefault();
        if($(this).attr('aria-expanded') == 'true'){
          $(this).attr('aria-expanded', "false").siblings('ul').animate({'left':'-310'}, 300).attr('aria-hidden', 'true').end().closest('li').removeClass('expanded');
        }else{
          $('#block-crane-quicklinks li.expanded').removeClass('expanded').find('> a').attr('aria-expanded', 'false').siblings('ul').animate({'left':'-320'}, 300).attr('aria-hidden', 'true');
          $(this).attr('aria-expanded', "true").siblings('ul').animate({'left':'+80'}, 300).attr('aria-hidden', 'false').end().closest('li').addClass('expanded');
        }
      });

    });
  }
}//end quicklinks

})(jQuery, Drupal);
