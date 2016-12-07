$(function() {
  $('a[href="#portfolio"]').click(function(e){
    e.preventDefault();
    var targetOffset = $('a[name="portfolio"]').offset().top;
    $('body').animate(
      {scrollTop: targetOffset},
      1000
    );
  });
});
