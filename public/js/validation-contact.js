$(document).ready(function() {
    $('#send_message').click(function(e) {
        e.preventDefault(); // Prevent default submission

        // Reset error state
        var error = false;
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var message = $('#message').val().trim();

        // Remove previous error styles when typing again
        $('#name, #email, #phone, #message').on('input', function() {
            $(this).removeClass("error_input");
        });

        // Validation rules
        if (name.length === 0) {
            error = true;
            $('#name').addClass("error_input");
        }

        if (email.length === 0 || email.indexOf('@') === -1) {
            error = true;
            $('#email').addClass("error_input");
        }

        if (phone.length === 0) {
            error = true;
            $('#phone').addClass("error_input");
        }

        if (message.length === 0) {
            error = true;
            $('#message').addClass("error_input");
        }

        // Process the form if no error
        if (!error) {
            $('#send_message').attr({
                'disabled': true,
                'value': 'Sending...'
            });

            setTimeout(function() {
                $('#contact_form').fadeOut(400, function() {
                    $('<div id="success_message" class="alert alert-success mt-3 p-4 text-center" style="border-radius: 14px; background: rgba(210, 160, 115, 0.15); border: 1px solid #d2a073; color: #222;"><h4 class="mb-2" style="font-weight: 600;">Message Sent Successfully!</h4><p class="mb-0 text-muted">Thank you for contacting Intrio. A senior interior designer will respond within 24 hours.</p></div>')
                        .hide()
                        .appendTo($(this).parent())
                        .fadeIn(500);
                });
            }, 700);
        }
    });
});
