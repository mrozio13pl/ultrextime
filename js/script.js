$(window).resize(function () {
    windowResize();
});

$(window).on("load", function () {
    windowResize();
});

function windowResize() {
    pageWidth = $('body').width();
    uiWidth = $('.overlay .wrapper').width();
    pageHeight = $('body').height();
    uiHeight = $('.overlay .wrapper').height();
    if (pageWidth < uiWidth || pageHeight < uiHeight) {
        scaleX = pageWidth / uiWidth;
        scaleY = pageHeight / uiHeight;
        if (scaleX > scaleY) {
            scale = scaleY;
        }
        else {
            scale = scaleX;
        }
        $('.overlay .wrapper').attr('style', '-webkit-transform: translate(-50%, -50%) scale(' + scale + ');');
    }
    else {
        $('.overlay .wrapper').attr('style', '-webkit-transform:  translate(-50%, -50%) scale(1);');
    }
}


/* ---------------------------------- Menu ---------------------------------- */

var colRight = $(".column.right");
var colCenter = $(".column.center");
var colCenterContent = $(".column.center .content");

$("[data-nav-btn]").click(function () {
    var data = $(this).data("nav");
    $(".column.left .menu .menu-list .button").removeClass("active");
    $(this).addClass("active");
    if (data === 'home') {
        smallCenter()
        $("[data-nav-target]").hide();
        $('[data-nav-target="' + data + '"]').show();
    } else {
        bigCenter();
        $("[data-nav-target]").hide();
        $('[data-nav-target="' + data + '"]').show();
    }
})

function bigCenter() {
    if ($(colCenter).width() > 320) {
        return;
    } else {
        $(colCenter).css({
            width: colCenter.width() * 2
        });
    }
    $(".column.right").hide();
}

function smallCenter() {
    $(colCenter).css({
        width: ''
    })
    $(".column.right").show();
}

/* ------------------------------------ - ----------------------------------- */