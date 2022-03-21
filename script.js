console.log('redbull');
console.log('bruh');
console.log(69);
$(document).ready(function() {

    $(".whatwedo p").hide();
  
    $('.whatwedo img.one').click(function() {
      $(".whatwedo img.one").toggle();
      $(".whatwedo p.one").toggle();
    });