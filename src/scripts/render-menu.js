import menuList from '../partials/menu-list.hbs';

export function renderCards(menu) {
  const menuElem = document.querySelector('.toolbar');
  const html = menuList({
    menu,
  });

  menuElem.insertAdjacentHTML('beforeend', html);
}
