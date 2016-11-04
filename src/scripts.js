var $navToggle = $('.nav-toggle');
var $mainNavUl = $('.mobile-toggle');

$navToggle.on('click', function() {
  $mainNavUl.slideToggle();
  $navToggle.toggleClass('active');
});

var $faqToggle = $('.nav-toggle');
$faqToggle.on('click', function() {
  $('.mobile-toggle').slideUp();
  $(this).siblings().slideToggle();
});
