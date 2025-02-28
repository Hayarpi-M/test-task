window.addEventListener("scroll", function() {
  let header = document.getElementById("header");

  if (window.scrollY >= 30) { 
      header.classList.add("scrolled");
  } else {
      header.classList.remove("scrolled");
  }
});

(function($) {
    /* fixed menu */
    $(document).scroll(function() {
      if ( $(document).scrollTop() >= 30 ) {
          $('.header').addClass('scrolled');
      } else if ( $(document).scrollTop() >= -30 ) {
          $('.header').removeClass('scrolled');
      }
    });

    /* Form validation */
    
    /*Form validation end*/

    /* Menu burger */
    document.addEventListener("DOMContentLoaded", function () {
      let menuBurger = document.querySelector(".menu-burger");
      let menuClose = document.querySelector(".menu-close");
      let headerMenu = document.querySelector(".header-menu");
      let body = document.body;
  
      if (menuBurger) {
          menuBurger.addEventListener("click", function () {
              console.log("hii");
              headerMenu.classList.add("active");
              body.classList.add("body-fixed");
          });
      }
  
      if (menuClose) {
          menuClose.addEventListener("click", function () {
              headerMenu.classList.remove("active");
              body.classList.remove("body-fixed");
          });
      }
  });

    
})(jQuery);