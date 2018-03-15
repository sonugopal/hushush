$(document).ready(function() {
    $('.drawer').drawer();
    $(".drawer-menu-item").click(function () {
        $('.drawer').drawer('close');
    })


    $('#video_modal1').on('hide.bs.modal', function (e) {
        $('video').get(0).pause()
    });

    $("#play1").click(function () {
        $("#couple").show();
        $('#couple video').get(0).play()
    })
    $("#close1").click(function () {
        $("#couple").hide();
        $('#couple video').get(0).pause()


    })
    $("#play2").click(function () {
        $("#family").show();
        $('#family video').get(0).play()
    })

    $("#clo").click(function () {
        $("#family").hide();
        $('#family video').get(0).pause()
    })


})
$(window).on("load",function () {
    $('.mainhead').addClass('animated flip');
    $('.mainp').addClass('animated rollIn');
    $('.strImg1').addClass('animated bounceInLeft');
    $('.strImg2').addClass('animated bounceInRight');
    $('.icon').addClass('animated pulse infinite');
    $('.watch').addClass('animated jello infinite');
    $('.watch').addClass('animated jello infinite');
    $('.social-icons img').addClass('animated flash infinite');
})

