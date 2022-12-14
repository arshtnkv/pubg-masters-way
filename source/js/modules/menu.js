const menu = () => {
  if (document.querySelector('.main-nav')) {
    const header = document.querySelector('.header');
    const toggle = header.querySelector('.main-nav__toggle');
    const nav = header.querySelector('.main-nav');

    header.classList.remove('header--nojs');

    toggle.addEventListener('click', () => {
      if (!header.classList.contains('is-opened')) {
        showMenu(header, nav);
      } else {
        hideMenu(header, nav);
      }
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        hideMenu(header, nav);
      }
    });

    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth > 767) {
        hideMenu(header, nav);
      }
    });
  }
};

const showMenu = (header, nav) => {
  header.classList.add('is-opened');
  nav.classList.add('is-opened');
  document.body.classList.add('scroll-lock');
};

const hideMenu = (header, nav) => {
  header.classList.remove('is-opened');
  nav.classList.remove('is-opened');
  document.body.classList.remove('scroll-lock');
};

export {menu};
