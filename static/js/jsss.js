    $(window).on('scroll', function(){
        if ($(window).scrollTop()){
            $('nav').addClass('black');
        }
        else 
        {
            $('nav').removeClass('black');
        }
    })

$('#carouselExampleIndicators').on('slide.bs.carousel', function () {
    interval: 2000;
})