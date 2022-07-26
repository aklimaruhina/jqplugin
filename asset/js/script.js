

$('.carousel2').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:6
        },
        1200:{
          items: 4
        }
    }
});
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    $('#toTopBtn').fadeIn();
  } else {
    $('#toTopBtn').fadeOut();
  }
});

$('#toTopBtn').click(function() {
  $("html, body").animate({
    scrollTop: 0
  }, 1000);
  return false;
});
// $('.counter-count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).text()
//     }, {
//         duration: 5000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now));
//         }
//     });
// });
$('.counter-count').counterUp({
     delay: 10,
      time: 5000

});
$(".popimg").lightcase();
$(".typed").typed({
    strings: ["Business","Responsibilty", "Work", "Priority"],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 30,
    // time before typing starts
    startDelay: 1200,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 500,
    fadeOut: false,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: Infinity,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
  });
  $("a.nav-link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

$(window).scroll(function(){

  let headerOffset = $(".header").height() * 2;      
   if($(window).scrollTop() > headerOffset){
    $('.navbar').addClass('fixed-top');
     navbar_height = document.querySelector('.navbar').offsetHeight;
     document.body.style.paddingTop = navbar_height + 'px';
   } else {
     // document.getElementById('navbar_top').classList.remove('fixed-top');
     // document.getElementById('navbar_top').classList.add('unsticky');
     $('.navbar').removeClass('fixed-top');
      // remove padding top from body
     document.body.style.paddingTop = '0';
   }
});
$(".testimonial-reel").slick({
  centerMode: true,
  centerPadding: "40px",
  dots: true,
  slidesToShow: 3,
  infinite: true,
  arrows: false,
  lazyLoad: "ondemand",
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerMode: false
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});