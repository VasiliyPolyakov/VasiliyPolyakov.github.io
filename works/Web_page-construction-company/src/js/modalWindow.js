$(document).ready(function() {
  $('.header-logo__menu').click(function() {
    $('.modal-window').show(300)
  })

  $('.modal-header__button').click(function() {
    $('.modal-window').hide(300)
  })

  $('.modal-content__item').click(function() {
    $('.modal-window').hide(300)
  })

});
