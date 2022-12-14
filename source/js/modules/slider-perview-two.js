const initSliderPerviewTwo = (container) => {
  const breakpoint = window.matchMedia('(max-width:767px)');

  let newsSlider;

  let settings = {
    autoHeight: true,
    loop: false,
    slidesPerView: 2,
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
  };

  const breakpointChecker = () => {
    if (breakpoint.matches) {
      newsSlider = new window.Swiper(container, settings);

      return newsSlider;
    } else if (newsSlider) {
      return newsSlider.destroy(true, true);
    } else {
      return '';
    }
  };

  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
};

export {initSliderPerviewTwo};
