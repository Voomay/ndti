// contact.js - Form handling for Intrio
(function($) {
  'use strict';
  $(document).ready(function() {
    $('#contact_form').on('submit', function(e) {
      e.preventDefault();
      var $btn = $(this).find('#send_message');
      $btn.val('Sending...');
      setTimeout(function() {
        $('#mail_success').fadeIn(500);
        $btn.val('Send Message');
        $('#contact_form')[0].reset();
      }, 1000);
    });
  });
})(jQuery);
