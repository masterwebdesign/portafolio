(function ($) {

  /**
 * Copyright 2012, Digital Fusion
 * Licensed under the MIT license.
 * http://teamdf.com/jquery-plugins/license/
 *
 * @author Sam Sehnert
 * @desc A small plugin that checks whether elements are within
 *     the user visible viewport of a web browser.
 *     only accounts for vertical position, not horizontal.
 */

  $.fn.visible = function (partial) {
    let $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

/** End of Digital Fusion plugin **/


/* Animates selected elements into the page when scrolling to them */

$(".animateIn").each(function (i, el) {
  /* if the element is visible on page load */
  if ($(el).visible(true)) {
    $(el).removeClass("animateIn");
    $(el).addClass("already-visible");
  } else {
    $(window).scroll(function (event) {
      $(".animateIn").each(function (i, el) {
        if ($(el).visible(true)) {
          $(el).addClass("slide-in");
        }
      });
    });
  }
});

jQuery(function ($) {
  var path = window.location.href;;
  $('.navbar-nav li a').each(function () {
    if (this.href === path) {
      $(this).addClass('active');
      $(this).parent().closest("li").addClass('active');
      $(this).parent().parent().closest("li").addClass('active');
    }
  });
})

$('#nav-menu-btn').on("click", () => {
  if ($('.navbar-collapse').hasClass('in')) {
    $('.icon-bar').removeClass('hide');
    $('#x-menu-btn').addClass('hide');
  } else {
    $('.icon-bar').addClass('hide');
    $('#x-menu-btn').removeClass('hide')
  }
});