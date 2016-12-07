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
$(function() {
  $('a[href="#experience"]').click(function(e){
    e.preventDefault();
    var targetOffset = $('a[name="experience"]').offset().top;
    $('body').animate(
      {scrollTop: targetOffset},
      1500
    );
  });
});
$(function() {
  $('a[href="#contact"]').click(function(e){
    e.preventDefault();
    var targetOffset = $('a[name="contact"]').offset().top;
    $('body').animate(
      {scrollTop: targetOffset},
      2000
    );
  });
});
