const tabsDropdown = () => {
  const dropTabs = document.querySelector('.droptabs');
  if (dropTabs) {
    const tabBtns = dropTabs.querySelectorAll('.droptabs__control');
    const tabContents = dropTabs.querySelectorAll('.droptabs__element');
    const trigger = dropTabs.querySelector('.droptabs__trigger');
    const dropdown = dropTabs.querySelector('.droptabs__dropdown');

    tabBtns.forEach((element) => {
      element.addEventListener('click', () => {
        const index = Array.prototype.slice.call(tabBtns).indexOf(element);

        tabBtns.forEach((btn) => {
          btn.classList.remove('is-active');
        });

        trigger.textContent = element.textContent;
        element.classList.add('is-active');
        dropdown.classList.remove('is-open');

        tabContents.forEach((content) => {
          content.classList.remove('is-active');
        });
        tabContents[index].classList.add('is-active');
      });
    });
    trigger.addEventListener('click', () => {
      dropdown.classList.toggle('is-open');
    });
  }
};

export {tabsDropdown};
