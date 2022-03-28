$(function () {
  var price_values = [0, 500, 800, 1.1, 1.4, 1.7, 2, 2.3, 2.7, 3];
  var price_from = price_values.indexOf(0);

  $('.cars__filter-price').ionRangeSlider({
    type: "double",
    grid: true,
    values: price_values,
  });

  $('.autocredit__input-contribution').ionRangeSlider({
    type: "single",
    grid: false
  });

  $('.autocredit__input-price').ionRangeSlider({
    type: "single",
    grid: true,
    values: price_values,
    from: price_from,
    onStart: function (data) {
      $('.autocredit__price-from').text(data.from);
    },
    onChange: function (data) {
      $('.autocredit__price-from').text(data.from);
    },
  });

  $('.autocredit__input-term').ionRangeSlider({
    type: "single",
    grid: true,
    min: 6,
    max: 84,
    from: 6,
    step: 6,
    grid_snap: true,
    onStart: function (data) {
      $('.autocredit__term-from').text(data.from);
    },
    onChange: function (data) {
      $('.autocredit__term-from').text(data.from);
    },
  });
});