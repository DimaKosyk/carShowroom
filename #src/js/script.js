@@include('./slick.js')
@@include('./rangeSlider.js')
@@include('./formStyler.js')
@@include('./rateyo.js')


$(function () {
  $('.blog-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.blog-tabs__top-item').removeClass('blog-tabs__top-item--active');
    $(this).addClass('blog-tabs__top-item--active');

    $('.blog-tabs__content-item').removeClass('blog-tabs__content-item--active');
    $($(this).attr('href')).addClass('blog-tabs__content-item--active');
  });
});