(function($, Drupal) {

Drupal.behaviors.reactComponent = {
	attach: function (context, settings) {
    $(".component-edit", context).once('clickWarning').each(function(){
      $(this).click(function(){
        var c=confirm('Any unsaved changes you have on this node will be lost if you leave to edit the component.');
        if(c){
          return true;
        }
        else
        return false;
      });
   	});
   }
};



})(jQuery, Drupal);
