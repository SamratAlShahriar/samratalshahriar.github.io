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
    $('#btn-popup-show').click(function(){
        $('.popup-screen').addClass("active");
    });

    $('#popup-btn-close').click(function(){
        $('.popup-screen').removeClass("active");
    });


    //load random site theme color
    var genColorTheme = function(){
        var colorList = ['#ff1144', '#006917', '#0b539b', '#80099e', '#ff4726', '#8c9b08'];
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
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});