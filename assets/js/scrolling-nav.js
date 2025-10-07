(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(e) {
    e.preventDefault(); // منع السلوك الافتراضي
    
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      
      if (target.length) {
        // حساب ارتفاع navbar
        var navbarHeight = $('#mainNav').outerHeight() || 70;
        var offset = navbarHeight + 20; // إضافة 20px مساحة إضافية
        
        $('html, body').animate({
          scrollTop: (target.offset().top - offset)
        }, 400, "easeInOutExpo"); // تقليل المدة لجعل التمرير أسرع
        
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 80 // زيادة offset للـ scrollspy
  });

  // تحديث scrollspy عند تغيير حجم النافذة
  $(window).on('resize', function() {
    $('body').scrollspy('refresh');
  });

})(jQuery); // End of use strict
