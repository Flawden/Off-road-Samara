$(document).ready(function(){
    $('.galery-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                }
            },{
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            }, {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    })
});