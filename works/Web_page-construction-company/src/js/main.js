(function() {
  var documentEl = $(document);
  var parallaxBg = $('.header-footer');

  document.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();
    $('.header-footer').css('background-position', '0 ' + -currScrollPos /
      4 +
      'px');
  });

});
