import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {initFormValidate} from './modules/form/init-form-validate';
import {menu} from './modules/menu';
import {initVideo} from './modules/video';
import {initSlider} from './modules/init-slider';
import {initTabs} from './modules/init-tabs';
import {initAccordions} from './modules/init-accordion';
import {tabsDropdown} from './modules/tabs-dropdown';
import {tableToggle} from './modules/table-toggle';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  menu();
  initSlider();
  tabsDropdown();
  tableToggle();


  window.addEventListener('load', () => {
    initModals();
    initTabs();
    initAccordions();
    initFormValidate();
    initVideo();
  });
});
