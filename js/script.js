




$(function() {

// Dropdown toggle
$('.dropdown-toggle').click(function(){

  $(this).parent().next('#loginModal').toggle();
});

$(document).click(function(e) {

  var target = e.target;
  if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle')) {
    $('.dropdown').hide();
  }
});

});

$(function() {

// Dropdown toggle
$('.hours-toggle').click(function(){


  $(this).parent().parent().find('#hoursModal').toggle();
});

});
