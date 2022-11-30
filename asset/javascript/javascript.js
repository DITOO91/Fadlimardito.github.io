$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
      $(".navbar-right.navbar-r").css("margin-top", 14);
      $(".navbar-brand img").css("width", 195);
    } else {
      $("#back-to-top").fadeOut();
      $(".navbar-right.navbar-r").css("margin-top", 17);
      $(".navbar-brand img").css("width", 230);
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function () {
    $("#back-to-top").tooltip("hide");
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $("#back-to-top").tooltip("show");
});
