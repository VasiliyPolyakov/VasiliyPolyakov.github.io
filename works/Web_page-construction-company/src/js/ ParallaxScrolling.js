(function() {
  var documentEl = $(document);
  var parallaxBg = $('div.about-us__img');
  console.log(parallaxBg);
  debugger;

  documentEl.on('scroll', function() {
    var currScrollPos = documentEl.scrollTop();
    parallaxBg.css('background-position', '0 ' + -currScrollPos / 6 +
      'px');

  });


})();
