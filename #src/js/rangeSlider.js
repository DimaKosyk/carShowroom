$(function () {
  var prise_values = [0, 500, 800, 1.1, 1.4, 1.7, 2, 2.3, 2.7, 3];
  var term_values = [6, 12, 24, 36, 48, 60, 72, 84];

  $('.cars__filter-price').ionRangeSlider({
    type: "double",
    grid: true,
    values: prise_values,
  });

  $('.autocredit__input-price').ionRangeSlider({
    grid: true,
    values: prise_values,
  });

  $('.autocredit__input-term').ionRangeSlider({
    grid: true,
    values: term_values,
  });
});