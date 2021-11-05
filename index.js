$(document).ready(function () {

    var $click_a = $('.head_center .menu li a')
  

    $click_a.click(function (e) {
        e.preventDefault()
        $click_a.removeClass('active')
        var id = $(this).addClass('active').attr('href')
        var href = $(id).offset().top +100
        $('html , body').animate({
            scrollTop: href
        },500)
    })


    $(window).scroll(function () {
        var scrol = $(this).scrollTop()
        $click_a.each(function () {
            var id__ = $(this).attr('href')
            var hreff = $(id__).offset().top 
            console.log(scrol , hreff);
            if (scrol >= hreff) {
                $click_a.removeClass('active')
               $(this).addClass('active')
            }
        })
    })


    ///==================================================================
      var $bars =  $('.head_center span i')
      $bars.on('click' , function () {
        $('.menu').slideToggle(500)
       
    })
    
//========================================================================

    function car() {
       
            $('.car_1').animate({
                width: '50%',
                right: "2%"
            }, 1000)
        
        
        if (window.scrollY >= document.querySelector('.namber').offsetTop) {
            $('.car_2').animate({
                left: "0%"
            }, 1000)
          
        }
        if (window.scrollY >= document.querySelector('.sec_icon').offsetTop) {
            $('.car_3').animate({
                right: "0%",
                top: '-8%'
            }, 1000)          
        }

        if (scrollY >= document.querySelector('.sec_cluc').offsetTop) {
            $('.car_4').animate({
                right: "50%",
            }, 2000)
            
        }
     

    }
    $(window).on('scroll', car)
    car()

    //====================================================================
    clearInterval(wina(), 4000)

    function wina() {
        $('.wina').animate({
            bottom: "-10%",

        }, 1000).animate({
            bottom: "-22%",

        }, 1000)
        $('.mappp').animate({
            top: "-50%",

        }, 1000).animate({
            top: "-30%",

        }, 1000)
        setInterval(wina(), 4000)
    }

});