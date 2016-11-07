var $navToggle = $('.nav-toggle');
var $mainNavUl = $('.mobile-toggle');
var $window = $(window);
var mobileBreakpoint = 750;

$navToggle.on('click', function() {
  $mainNavUl.slideToggle();
  $navToggle.toggleClass('active');
});

$window.on('resize', function() {
  if ($window.width() > mobileBreakpoint) {
    $mainNavUl.show();
    $navToggle.addClass('active');
  }
});

$("img.lazy").lazyload();

$(".leaf").mouseover(function(){
    $(".leaf").css("transform", "rotate(3deg)");
});

$(".leaf").mouseout(function(){
    $(".leaf").css("transform", "rotate(-3deg)");
});
