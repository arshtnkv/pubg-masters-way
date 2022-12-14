import {initDefaultSlider} from './slider-default';
import {initMobileSlider} from './slider-mobile';
import {initSliderPerviewTwo} from './slider-perview-two';

const sliderContainers = document.querySelectorAll('[data-slider]');

const initSetupSwiper = (type, container) => {
  switch (type) {
    case 'init-mobile':
      initMobileSlider(container);
      break;
    case 'init-mobile-perview-two':
      initSliderPerviewTwo(container);
      break;
    default:
      initDefaultSlider(container);
  }
};

const initSlider = () => {
  sliderContainers.forEach((it) => {
    const type = it.dataset.slider;
    initSetupSwiper(type, it);
  });
};

export {initSlider};
