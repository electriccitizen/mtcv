(function($, Drupal) {

Drupal.behaviors.viewsFilters = {
	attach: function (context, settings) {
    $(".drawer-toggle .toggle-action", context).once('filterToggle').each(function(){
      $(this).click(function(e){
        e.preventDefault();
        if($(this).hasClass('active-filters')){
          $(this).attr('aria-expanded','false').text('show').removeClass('active-filters').closest('.drawer-toggle').next('.form-drawer').attr('aria-hidden','true').slideUp(300);
        }else{
          $(this).attr('aria-expanded','true').text('hide').addClass('active-filters').closest('.drawer-toggle').next('.form-drawer').attr('aria-hidden','false').slideDown(300);
        }
      });
      var filters = 0;
      $('#views-filter-wrapper option:selected').each(function(){
        if($(this).val() != 'All'){
          filters += 1;  
        }
      });
      $('#views-filter-wrapper input[type="text"]').each(function(){
        if($(this).val().length > 0){
          filters += 1;
        }
      });
      if(filters > 0){
        $('.filter-control .toggle-action').attr('aria-expanded','true').text('hide').addClass('active-filters').closest('.drawer-toggle').next('.form-drawer').attr('aria-hidden','false').show(0);
      }
   	});
   }
};



})(jQuery, Drupal);
