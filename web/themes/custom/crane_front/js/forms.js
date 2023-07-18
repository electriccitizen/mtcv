(function($, Drupal, once) {

/* USER LOGIN PASSWORD SHOW
------------------------------------ */
Drupal.behaviors.userLogin = {
	attach: function (context, settings) {
		$(once('showPass', '#user-login-form', context)).each(function(){
      $('.show-password').click(function(e){
        e.preventDefault();
        if($(this).is('.show')){
          $(this).removeClass('show').text('Show');
          $('#edit-pass').attr('type', 'password');
        }else{
          $(this).addClass('show').text('Hide');
          $('#edit-pass').attr('type', 'text');
        }
      });
		});
	}
};

})(jQuery, Drupal, once);
