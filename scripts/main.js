"use strict";
$(function () {
  FastClick.attach(document.body);

  $(document).on("click", "[href]", function (e) {
    var t = $(e.target).closest("[href]").attr("href");
    if (typeof t !== "string") {
      return;
    }

    // external URLs should open in new window
    if (t.toLowerCase().indexOf("http://") !== -1 || t.toLowerCase().indexOf("https://") !== -1) {
      e.preventDefault();
      window.open(t);
    }
  })
});