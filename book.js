$(document).on("focusout", ".form-input", function () {
    $(this).removeClass("active-field");
    if ($(this).val().length > 0) {
      $(this).addClass("active-field");
    }
  });
  
  jQuery(".form-input").on("focus", function (e) {
    $(this).addClass("active-field");
  });
  
