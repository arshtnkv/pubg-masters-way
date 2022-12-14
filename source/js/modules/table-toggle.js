const tableToggle = () => {
  const tables = document.querySelectorAll('[data-table]');

  if (!tables) {
    return;
  }

  tables.forEach((table) => {
    const btns = table.querySelectorAll('.table-control');
    const prev = table.querySelector('.table-control--prev');
    const next = table.querySelector('.table-control--next');

    btns.forEach((btn) => {
      btn.addEventListener('click', () => {
        if (!next.classList.contains('is-active')) {
          prev.classList.remove('is-active');
          next.classList.add('is-active');
          table.classList.toggle('is-active');
        } else if (!prev.classList.contains('is-active')) {
          prev.classList.add('is-active');
          next.classList.remove('is-active');
          table.classList.toggle('is-active');
        }
      });
    });
  });
};

export {tableToggle};
