$(document).ready(function () {
    function initBgCover(context) {
        if (!context) context = $('body');
        context.find('.bg-cover').each(function () {
            var holder = $(this);
            var image = holder.find('> img').hide();
            var imageSrc = image.prop('src');
            holder.css({
                backgroundImage: 'url(' + imageSrc + ')',
            });
        });
    }

    initBgCover();


    //news-slider
    $('.news-slider').slick({
        infinite: true,
        dots: true,
        arrows: false,
        slidesToShow: 3,
        adaptiveHeight: true,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                }
            }
        ]
    });

    //testimonial-slider
    $('.testimonial-slider').slick({
        infinite: true,
        dots: false,
        arrows: true,
        slidesToShow: 1,
        adaptiveHeight: true,
        slidesToScroll: 1,
    });
});