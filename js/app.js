$(document).ready(function() {
    $('.list-news').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            },
            2000: {
                items: 3
            }

        },

        navText: ["<i class='fas fa-angle-double-right'></i>", "<i class='fas fa-angle-double-left'></i>"],
    })
});




$(document).ready(function() {
    $('.navbar-toggler-icon').click(function() {
        $('.navbar-nav').css('display', 'none');
    })
})

// click vào icon menu thì xổ tràn menu - respon
$(document).ready(function() {
    $('.navbar-toggler-icon').click(function() {
        $('#wp-respon-menu').toggleClass('open-respon-menu');

    })

    $('#icon-menu-responsive').click(function() {
        $('#wp-respon-menu').removeClass('open-respon-menu');
    })


    $(window).resize(function() {
        // nếu màn hình có độ rộng nhỏ hơn 576px thì respon menu ẩn đi
        if ($(window).width() >= 768) {
            $('#wp-respon-menu').removeClass('open-respon-menu');
        }
    })
})


// scroll header
$(document).ready(function() {

    $(window).scroll(function() {

        //khoảng cách từ scropp tới top
        var window_croll = $(window).scrollTop();
        console.log('a = ' + window_croll);

        //khoảng cách từ slider tới top bằng height của header
        var slider_top = $('.slider').offset().top;
        console.log('b = ' + slider_top);

        //khi vị trí thanh cuộn lớn hơn hoặc bằng slider-top thì đổi màu
        if (window_croll >= slider_top) {
            // console.log('bang nhau');

            $('#header').css('position', 'fixed');
            $(this).removeClass('bg-dark');
        }
    });

})