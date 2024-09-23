const navToggle = document.querySelector('.page-nav__toggle');
const navList = document.querySelector('.page-nav__list');
navToggle.classList.remove('page-nav__toggle--opened');
navList.classList.remove('page-nav__list--opened');
navToggle.onclick = function () {
  navToggle.classList.toggle('page-nav__toggle--opened');
  navList.classList.toggle('page-nav__list--opened');
};
