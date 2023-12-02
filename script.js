
//  Swiper functionality
function swiperContainer(){
  let swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay:{
      delay: 3000,
      disableOnInteraction: true
    },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
swiperContainer();






