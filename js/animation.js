

   $(document).ready(function() {
     $("#events").fadeOut();
     $("#event_name").fadeOut();
     $("#event_description").fadeOut();
     $(".explore").fadeOut();
     // place this within dom ready function
     function showpanel() {

        $("#events").fadeIn();
    }

    function showtext() {

      $('#event_number').fadeIn();
   }

   function showevent() {

     $('#event_name').fadeIn();
     $('#event_description').fadeIn();
     $('.explore').fadeIn();


  }

    // use setTimeout() to execute
    setTimeout(showpanel, 1000);

    setTimeout(showtext, 2000);

    setTimeout(showevent, 3000);

   });
