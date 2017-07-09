

   $(document).ready(function() {
     window.alert("in function")
  $(".events").fadeIn();
     // place this within dom ready function
     function showpanel() {

       $('.events').css({background: "linear-gradient(rgba(60, 95, 112, 0.7),rgba(60, 95, 112, 0.7)), url(images/carousel1.jpg)"});
    }

    function showtext() {

      $('.event_number').fadeIn();
   }

   function showevent() {

     $('.event_name').fadeIn();
  }

    // use setTimeout() to execute
    setTimeout(showpanel, 1000);

    setTimeout(showtext, 4000);

    setTimeout(showevent, 6000);

   });
