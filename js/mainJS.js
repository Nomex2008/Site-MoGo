$(function () {

    var header = $("header");
    var headernav = $(".header__nav")
    var introH = $(".intro").innerHeight();

    //fixed header
    scrollOfcet = $(window).scrollTop()

    checkScroll()

    $(window).on("scroll" , function() {
        
        checkScroll()

    });

    function checkScroll() {
        scrollOfcet = $(this).scrollTop();

        if(scrollOfcet >= introH){
            header.addClass("header__fixed")
            headernav.addClass("header__nav-fixed")
        } else {
            header.removeClass("header__fixed")
            headernav.removeClass("header__nav-fixed")
        }
    }
    //scroll nav header
    $("[data-scroll]").on("click",function(event){
        event.preventDefault();

        var $this = $(this)
        var blockId = $this.data('scroll')
        var blockOffset = $(blockId).offset() .top;

        $("#nav a").removeClass('active')
        $this.addClass('active')

        $("html, body").animate({
            scrollTop: blockOffset
        },500)
    })

    //burger
    $(".nav--toggle").on("click",function(event){
        event.preventDefault();

       $(".nav--toggle").toggleClass("active")
       $(".header__nav").toggleClass("active")
    })
    //accordion__item
    $("#accordion__item1").on("click",function(event){
        event.preventDefault();

        var accordion__item = $(".accordion__item")
        accordion__item.removeClass("active")


       $("#accordion__item1").toggleClass("active")
    })

    $("#accordion__item2").on("click",function(event){
        event.preventDefault();
        var accordion__item = $(".accordion__item")
        accordion__item.removeClass("active")

       $("#accordion__item2").toggleClass("active")
    })

    $("#accordion__item3").on("click",function(event){
        event.preventDefault();
        var accordion__item = $(".accordion__item")
        accordion__item.removeClass("active")

       $("#accordion__item3").toggleClass("active")
    })
    //
    $('[data-slidear]').slick({
        infinite: false,
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});