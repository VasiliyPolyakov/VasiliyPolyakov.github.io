$(function() {

  $('a[href^="#"]').click(function(e) {
    var target = $(this).attr('href');
    var strip = target.slice(1);

    if (strip === "main-page") {
      var anchor = $("header[id='" + strip + "']")
    } else {
      var anchor = $("article[id='" + strip + "']")
    }
    e.preventDefault();

    $('html, body').animate({
      scrollTop: anchor.offset().top -90

    }, 'slow');

  });

});
