//depth2
$(".gnb > li").mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn(500);
    $(".depth2_bg").stop().fadeIn();
    $("#header").addClass("active");
    $(".search").hide();
    $(".btn_search").removeClass("active");
});
$(".gnb > li").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut();
    $(".depth2_bg").stop().fadeOut();
    $("#header").removeClass("active");
});

//search
$(".btn_search").click(function () {
    $(this).toggleClass("active")
    $(".search").fadeToggle();
    $("#header").toggleClass("active");
    //toggleclass = addclass + removeclass
});

//mgnb
$(".mgnb_wrap").hide();
$(".btn_ham").click(function () {
    $(".mgnb_wrap").fadeIn();
});
$(".mgnb_close").click(function () {
    $(".mgnb_wrap").fadeOut();
});