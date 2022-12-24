import './styles/index.css';
import menu from './data/menu.json';
import menuCard from './partials/menu-card.hbs';
import { renderCards } from './scripts/render-menu.js';

renderCards(menu);

const body = document.querySelector('body');
const themeSwitcherInput = document.querySelector('#theme-switch-toggle');

const THEME = {
  Light: 'light-theme',
  Dark: 'dark-theme',
};
const THEME_KEY = 'theme';
const defaultTheme = body.className;

function changeTheme(themeName) {
  localStorage.setItem(THEME_KEY, themeName);
  body.className = '';
  body.classList.add(themeName);
}

function checkPersistedTheme() {
  const persistedTheme = localStorage.getItem(THEME_KEY);

  if (persistedTheme) {
    changeTheme(persistedTheme);
  } else {
    changeTheme(defaultTheme);
  }

  if (persistedTheme === THEME.Light) {
    themeSwitcherInput.checked = false;
  } else {
    themeSwitcherInput.checked = true;
  }
}

checkPersistedTheme();

themeSwitcherInput.addEventListener('click', (e) => {
  if (e.target.checked) {
    changeTheme(THEME.Dark);
  } else {
    changeTheme(THEME.Light);
  }
});
