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
    link.addEventListener('click', function(event) {
        // Prevent the default behavior of the link (navigating to "#")
        event.preventDefault();
        
        // Perform some logic to determine the URL dynamically
        var dynamicUrl = window.location.href; // Replace this with your dynamic URL logic
        
        // Set the href attribute of the link to the dynamic URL
        link.href = dynamicUrl;
        
        // Navigate to the dynamic URL
        window.location.href = dynamicUrl;
    });


    //load random site theme color
    var genColorTheme = function () {
        var colorList = [
            '#000000', //black
            '#ff1144', //crimson
            '#006917', //green
            '#07417a', //deepblue
            '#1748e9', //bluelight
            '#4d0786', //violet
            '#cf4711', //deeporange
            '#ffd00f', //yellow
            '#ff1001', //red
            '#8a0569', //purple
            '#027981', //cyan

            '#8B1874',
            '#654E92',
            '#F97B22',
            '#0A4D68',
            '#D14D72',
            '#393646',
            '#009FBD',
            '#9A208C',
            '#990000',
            '#1A5D1A',
            '#FF6666',
            '#643843',
            '#606C5D',
            '#9C0F48',
            '#0A1D37',
            '#6F4C5B',
            '#00AF91',


        ];
        var totalColor = colorList.length;
        let randomNumber = Math.random() * totalColor;
        let position = Math.floor(randomNumber);
        console.log(position);
        var rootElement = document.querySelector(':root');
        rootElement.style.setProperty('--primary-color', colorList[position]);
    }
    genColorTheme();


    var workList = ["App Developer", "Contest Programmer", "Blogger"];

    // typing animation script
    var typed = new Typed(".typing", {
        strings: workList,
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    var typed = new Typed(".typing2", {
        strings: workList,
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 10,
        loop: true,
        margin: 16,
        // slideTransition: '',
        autoplay: true,
        autoplaySpeed:700,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            350: {
                items: 2,
                nav: false
            },
            750: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: false
            }
        }
    });


});




