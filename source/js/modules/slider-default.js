const initDefaultSlider = (container) => new window.Swiper(container, {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.slider__btn--next',
    prevEl: '.slider__btn--prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    },
    formatFractionTotal(number) {
      if (number < 10) {
        number = '0' + number;
      }
      return number;
    },
  },
});

export {initDefaultSlider};
