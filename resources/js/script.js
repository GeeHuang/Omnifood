// var waypoint = new Waypoint({
//     element: document.getElementById('px-offset-waypoint'),
//     handler: function(direction) {
//       notify('I am 20px from the top of the window')
//     },
//     offset: 20
//   })
$(document).ready(function() {
  // Sticky Nav
  $(".section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  //Scroll on button
  $(".js--scroll-to-plans").click(function() {
    $("html, body").animate(
      { scrollTop: $(".section-plan").offset().top },
      1000
    );
  });

  $(".js--scroll-to-start").click(function() {
    $("html, body").animate(
      { scrollTop: $(".section-features").offset().top },
      1000
    );
  });

  //Nav Scroll
  $(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on("click", function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          800,
          function() {
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          }
        );
      } // End if
    });
  });

  //Animation on scroll
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated jello");
    },
    {
      offset: "25%"
    }
  );

  $(".js--wp-3").waypoint(
    function(direction) {
      $(".js--wp-3").addClass("animated fadeInLeft");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-4").waypoint(
    function(direction) {
      $(".js--wp-4").addClass("animated fadeInRight");
    },
    {
      offset: "50%"
    }
  );

  $(".js--wp-5").waypoint(
    function(direction) {
      $(".js--wp-5").addClass("animated fadeInUpBig");
    },
    {
      offset: "75%"
    }
  );
  $(".js--wp-6").waypoint(
    function(direction) {
      $(".js--wp-6").addClass("animated pulse");
    },
    {
      offset: "50%;"
    }
  );

  //Mobile Nav
  $(".js--nav-icon").click(function() {
    var nav = $(".main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass("fa-bars")) {
      icon.addClass("fa-times");
      icon.removeClass("fa-bars");
    } else {
      icon.addClass("fa-bars");
      icon.removeClass("fa-times");
    }
  });
});
