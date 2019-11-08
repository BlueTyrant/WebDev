$(document).ready(function(){
    if ( $('li').hasClass("active") ) {
      $('li.active').removeClass("active");
      $('#contactus').addClass("active");
    }
  });