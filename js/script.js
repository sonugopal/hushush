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

    $('.icon').addClass('animated pulse infinite');
    $('.watch').addClass('animated jello infinite');



})

