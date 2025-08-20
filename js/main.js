AOS.init({

});

//banner_list
const banner_list = new Swiper(".banner_list", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {//자동슬라이드
        delay: 3000,  //밀리세컨 2.5초
        disableOnInteraction: false,
    },
    loop: true,
});



$(".pause").click(function () {
    banner_list.autoplay.stop();
    $(".pause").hide();
    $(".play").show();
});
$(".play").click(function () {
    banner_list.autoplay.start();
    $(".play").hide();
    $(".pause").show();
});

//notice_list
const notice_list = new Swiper(".notice_list", {
    autoplay: {//자동슬라이드
        delay: 2000,  //밀리세컨 2.5초
        disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    direction: "vertical", //세로슬라이드.높이값!
});

//prd_list
const prd_list = new Swiper(".prd_list", {
    centeredSlides: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar", // 버튼 종류 설정..(bullets)
        clickable: true, //버튼 클릭여부

    },
    autoplay: {//자동슬라이드
        delay: 2500,  //밀리세컨 2.5초
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        750: {
            slidesPerView: 3,
            spaceBetween: 40,
        },

        1200: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    }
});

//teaware
// $(".teaware_tab button").eq(0).addClass("active"); or html 직접 클래스 주던지  


$(".teaware_tab button").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let num = $(this).index();
    $(".teaware_list a").eq(num).fadeIn().siblings().hide();
});