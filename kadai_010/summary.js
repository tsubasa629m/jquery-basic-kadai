$(function () {
    // 色を赤にする
  $('#change-color').on('click', function () {
  $('#target').css('color', 'red');
  });
   // テキスト変更
  $('#change-text').on('click', function () {
  $('#target').text("Hello!");
  });
    // フェードアウトする
  $('#fade-out').on('click', function () {
   $('#target').fadeOut();
  });
   // フェードインする
  $('#fade-in').on('click', function () {
   $('#target').fadeIn();
  });

});