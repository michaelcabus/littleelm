

   $(document).ready(function() {

     // place this within dom ready function
     function showpanel() {

        $("#events").fadeIn();
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
