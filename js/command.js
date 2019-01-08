$(document).ready(function(){

  $('.burger').click(function(){
      $(this).toggleClass('open');
      $(".menu").slideToggle("slow");
  });

  $('.sets').isotope({
    itemSelector: '.sets_list',
    columnWidth: '.sets_list',
    filter: "*"
  });

  $('.filters .filters_list').click(function(){
    var selector = $(this).attr('data-filter');

    $('.sets').isotope({
      filter: selector,
    })

    //changing active class with click event
    $('.filters .filters_list.active').removeClass('active');
    $(this).addClass('active');
  });


  $('.carousel_slider').slick({
    arrows: false,
    dots: true
  });


});
