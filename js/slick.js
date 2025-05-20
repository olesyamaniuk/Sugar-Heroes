$(function () {
  $(".e-k-gallery-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    centerMode: true,
    cssEase: "linear",
    prevArrow: ".e-k-gallery-list-left",
    nextArrow: ".e-k-gallery-list-right",
  });
});

$(function () {
  $(".e-k-reviews-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    cssEase: "linear",
    prevArrow: ".e-k-reviews-list-left",
    nextArrow: ".e-k-reviews-list-right",
  });
});
$(function () {
  $(".e-k-why-list").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: false,
    cssEase: "linear",
    prevArrow: ".e-k-why-list-left",
    nextArrow: ".e-k-why-list-right",
  });
});
