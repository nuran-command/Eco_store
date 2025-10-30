// main.js
$(document).ready(function() {
    // Navbar scroll effect
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('shadow-lg');
        } else {
            $('header').removeClass('shadow-lg');
        }
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        const target = $(this.getAttribute('href'));
        if(target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 800);
        }
    });

    // Hover effect for product cards
    $('.card').hover(
        function() { $(this).addClass('shadow-lg').css('transform', 'translateY(-5px)'); },
        function() { $(this).removeClass('shadow-lg').css('transform', 'translateY(0)'); }
    );

    // Fade in sections on page load
    $('section').hide().fadeIn(1000);

    // Fade in accordion items on page load
    $('.accordion-item').hide().fadeIn(1000);
});