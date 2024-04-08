var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 10,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    loop: true,
    });