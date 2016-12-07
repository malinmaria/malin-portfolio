$(function() {
  $('a[href="#about"]').click(function(e){
    e.preventDefault();
    var targetOffset = $('a[name="about"]').offset().top;
    $('body').animate(
      {scrollTop: targetOffset},
      1000
    );
  });
});
