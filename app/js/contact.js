$(document).ready(function() {
  //First form
  $("#send").click(function() {
    var name = $("#from").val();
    var email = $("#email").val();
    var message = $("#content").val();

    // Checking for blank fields.
    if (name == '' || email == '' || message == '') {
      $("#alert")
        .show()
        .html("All fields required")
        .css({"display": "inline-block"});
    } else {
      $.post("php/contact.php", {
        name1: name,
        email1: email,
        message1: message
      });
      $("#alert")
        .show()
        .html("Your message was successfully sent")
        .css({"display": "inline-block", "color": "green"});
      $("#form").trigger("reset");
    }
  });

  // Second form (popping)
  $("#send2").click(function() {
    var name = $("#from2").val();
    var email = $("#email2").val();
    var message = $("#content2").val();

    // Checking for blank fields.
    if (name == '' || email == '' || message == '') {
      $("#alert2")
        .show()
        .html("All fields required")
        .css({"display": "inline-block"});
    } else {
      $.post("php/contact.php", {
        name1: name,
        email1: email,
        message1: message
      });
      $("#alert2")
        .show()
        .html("Your message was successfully sent")
        .css({"color": "green"});
      $('.contacts__contact-form_popup')
        .bPopup()
        .close();
      $("#alert2")
        .html("Your message was successfully sent")
        .css({"color": "green", "background-color": "white", "padding": "25px"})
        .bPopup({
          speed: 300,
          transition: 'slideIn',
          transitionClose: 'slideBack',
          onClose: function () {
            form.trigger("reset");
          }
        });
    }
  });
});
