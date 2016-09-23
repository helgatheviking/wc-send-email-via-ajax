jQuery(document).ready(function($) {

  $(".email-trigger").on("click", function(e) {

    e.preventDefault();

    $.ajax({
        url: kia_ajax_email.wc_ajax_url.toString(),
        type: 'POST',
        data: {
          'whatever': 1234
        },
      })
      .done(function(response) {
        if (console && console.log) {
          console.log(response);
        }
      });
  });

});