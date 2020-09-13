$(document).ready(function(){
    $('.city-select').customSelect();
    
    $('.topnav li').hover(
        function () {
            $('ul', this).stop().fadeIn();
        },
        function () {
            $('ul', this).fadeOut();
        }
    );
    $(".topnav li").has( "ul" ).addClass("haschild");
    
    $('.txt-running').simplemarquee({
            speed: 30,
    });
    
    $('.qtyplus').click(function(e){
        e.preventDefault();
        fieldName = $(this).attr('data-field');
        var currentInp = $(this).parent().find('input[name='+fieldName+']');
        var currentVal = parseInt(currentInp.val());
        if (!isNaN(currentVal)) {
            currentInp.val(currentVal + 1);
        } else {
            currentInp.val(0);
        }
    });
    $(".qtyminus").click(function(e) {
        e.preventDefault();
        fieldName = $(this).attr('data-field');
        var currentInp = $(this).parent().find('input[name='+fieldName+']');
        var currentVal = parseInt(currentInp.val());
        if (!isNaN(currentVal) && currentVal > 1) {
            currentInp.val(currentVal - 1);
        } else {
            currentInp.val(1);
        }
    });
    $(".minicart a").click(function (e) {
        e.preventDefault();
        $(".expanded-cart").toggle();
        $(".expanded-cart .close").click(function(){
            $(".expanded-cart").hide();
        });
    });
    
    $(".rel-carousel").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 4
    });
    $(".collections").jCarouselLite({
        btnNext: ".next2",
        btnPrev: ".prev2",
        visible: 9
    });   
    $(".product-img-box .carousel").jCarouselLite({
        btnNext: ".next-ps",
        btnPrev: ".prev-ps",
        visible: 3,
        speed: 200
    });
    $(".product-img-box2 .carousel").jCarouselLite({
        btnNext: ".next-ps2",
        btnPrev: ".prev-ps2",
        visible: 3,
        speed: 200
    });
    $(".popup-slider").jCarouselLite({
        btnNext: ".next",
        btnPrev: ".prev",
        visible: 1
    });
    $(".product-img-box .carousel li").click(function() {
        $(".product-img-box .mid img").attr("src", $(this).find('img').attr("src"));
    });
    $(".product-img-box2 .carousel li").click(function() {
        $(".product-img-box2 .mid img").attr("src", $(this).find('img').attr("src"));
        $(".product-img-box2 .mid a").attr("href", $(this).attr("src"));
    });    
    $('.rstocart, .toggle-amount').hover(function() {
        $(this).parent().find('.toggle-amount').stop().slideToggle();
    });
    
    $('.cat-img, .descr').hover(function() {
        $(this).parent().find('.descr').stop().fadeToggle();
    });
    
    $(".carousel li").click(function() {
        $('.carousel li').not(this).removeClass('active');
        $(this).addClass('active');
    });
    
    $(".mid a").append("<span></span>");

    $(".mid a").hover(function(){

        $(this).children("span").fadeIn(600);

    },function(){

        $(this).children("span").fadeOut(200);

    });
    
    $('#fadeandscale').popup({
        scrolllock: true,
        blur: false,
        opacity: 0.7,
        transition: 'all 0.3s'
    });
    $(".popup-right").mCustomScrollbar({
        scrollInertia: 500
    });
});