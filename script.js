$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky')
        } else {
            $('.navbar').removeClass('sticky')
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show')
        } else {
            $('.scroll-up-btn').removeClass('show')
        }
    });

    //slide up script
    $('.scroll-up-btn').click(function () {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });

    //togle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    });

    //toggle read more script
    $('#read-more').click(function () {
        $('.skills .skill-content .left p').toggleClass("read-more")
        $('.skills .skill-content .left #read-more').toggleClass("read-more")
    });

    //popup screen script
    $('#btn-popup-show').click(function () {
        $('.popup-screen').addClass("active");
    });

    $('#popup-btn-close').click(function () {
        $('.popup-screen').removeClass("active");
    });

    //on logo icon click listener
    // Select the link element
    var link = document.getElementById('applogo');

    // Add a click event listener to the link
    link.addEventListener('click', function (event) {
        // Prevent the default behavior of the link (navigating to "#")
        event.preventDefault();

        // Perform some logic to determine the URL dynamically
        var dynamicUrl = window.location.href; // Replace this with your dynamic URL logic
        var baseUrl = dynamicUrl.split('/').slice(0, 3).join('/');

        // Set the href attribute of the link to the dynamic URL
        link.href = baseUrl;


        // Navigate to the dynamic URL
        window.location.href = baseUrl;
        console.log("d url" + baseUrl);
    });


    var genColorTheme = function () {
        var colorList = [
            // Base elegant tones
            '#1E1E2F', // dark slate
            '#FF6B6B', // soft red
            '#6C5DD3', // soft purple
            '#00B8A9', // teal green
            '#F9ED69', // pastel yellow
            '#F08A5D', // warm coral
            '#B83B5E', // rich magenta
            '#3A4750', // dark gray-blue
            '#6A2C70', // deep plum
            '#2D4059', // deep navy
            '#EA5455', // soft crimson

            // Modern UI color trends
            '#845EC2', // lavender purple
            '#FFC75F', // orange yellow
            '#FF9671', // mango
            '#00C9A7', // turquoise
            '#4B4453', // muted dark
            '#0081CF', // sky blue
            '#A178DF', // purple haze
            '#4DD599', // mint green
            '#FB7B6B', // salmon pink
            '#E4BAD4', // soft pink
            '#2F4858', // rich slate
            '#455A64', // blue gray
            '#009688', // material teal
        ];


        var position = Math.floor(Math.random() * colorList.length);
        var selectedColor = colorList[position];

        document.documentElement.style.setProperty('--primary-color', selectedColor);
    };

    genColorTheme();



    var workList = ["App Developer", "Contest Programmer", "Blogger"];

    // typing animation script
    var typed = new Typed(".typing", {
        strings: workList,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    // owl carousel script
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        loop: false,
        margin: 16,
        // slideTransition: '',
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 600,
        dots: true,
        dotsEach:true,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1,
                //nav: false
            },
            480: {
                items: 2,
                // nav: false
            },
            768: {
                items: 3,
                // nav: false
            },
            1024: {
                items: 4,
                //  nav: false
            }
        }
    });


});




