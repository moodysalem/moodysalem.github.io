"use strict";
$(function () {
  FastClick.attach(document.body);

  $("#gotop").click(function () {
    jQuery("html,body").animate({
      scrollTop: 0
    }, 500);
  });
  $(window).load(function () {
    $('#gotop').hide();
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $('#gotop').fadeIn("fast");
    } else {
      $('#gotop').stop().fadeOut("fast");
    }
  });

  $(document).on("click", "[href]", function (e) {
    var t = $(e.target).closest("[href]").attr("href");
    if (typeof t !== "string") {
      return;
    }

    t = t.toLowerCase();
    // external URLs should open in new window
    if (t.indexOf("http://") !== -1 || t.indexOf("https://") !== -1) {
      e.preventDefault();
      window.open(t);
    }
  })
});