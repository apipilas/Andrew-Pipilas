/*!
    * Start Bootstrap - Freelancer v6.0.4 (https://startbootstrap.com/themes/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */

var tl = new TimelineMax({ onUpdate: updatePercentage });
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();



const scene = new ScrollMagic.Scene({
  triggerElement: "#about",
  triggerHook: "onLeave",
  duration: "100%"
})
  .setPin("#about")
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: ""
})
  .setTween(tl2)
  .addTo(controller);


var mq = window.matchMedia("(max-width: 1200px)");
if (mq.matches) {
  // window width is at less than 1200px
  tl.from('#para', .5, { x: 20, opacity: 0 });
  tl.from('span', 1, { width: 0 }, "=-.5");
  tl.from('#tester', 1, { x: -20, opacity: 0, ease: Power4.easeInOut }, "=-1");
}
else {
  // window width is greater than 1200px
  tl.from('#para', .5, { x: 20, opacity: 0 });
  tl.from('span', 1, { width: 0 }, "=-.5");
  tl.from('#tester', 1, { x: -20, opacity: 0, ease: Power4.easeInOut }, "=-1");
}

function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}
(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 71)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to top button appear
  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80
  });

  // Collapse Navbar
  var navbarCollapse = function () {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Floating label headings for the contact form
  $(function () {
    $("body").on("input propertychange", ".floating-label-form-group", function (e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function () {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function () {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
