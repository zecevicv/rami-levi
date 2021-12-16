/* #Header
  ======================================================= */
const body = document.querySelector('body');
const header = document.querySelector('.header');

if (document.querySelector('.header')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('header-white');
    } else {
      header.classList.remove('header-white');
    }
  });
}

if (document.querySelector('.header')) {
  if (window.scrollY > 0) {
    header.classList.add('header-white');
  } else {
    header.classList.remove('header-white');
  }
}

/* #Logos 2
  ======================================================= */
const logos2PopupTogglers = document.querySelectorAll('.logos-2 .popup-toggler');
const logos2Popup = document.querySelector('.logos-2 .popup');
const logos2PopupClose = document.querySelector('.logos-2 .popup .close');

logos2PopupTogglers.forEach((toggler) => {
  toggler.addEventListener('click', (e) => {
    e.preventDefault();

    e.target.closest('.logos-2').querySelector('.popup').classList.add('show');
  });
});

logos2PopupClose.addEventListener('click', (e) => {
  e.preventDefault();
  logos2Popup.classList.remove('show');
});

/* #Sidebar
  ======================================================= */
const sidebarPopupToggler = document.querySelector('.sidebar .popup-toggler');
const sidebarPopup = document.querySelector('.sidebar .popup');
const sidebarPopupClose = document.querySelector('.sidebar .popup .close');

sidebarPopupToggler.addEventListener('click', (e) => {
  e.preventDefault();

  e.target.closest('.sidebar').querySelector('.popup').classList.add('show');
});

sidebarPopupClose.addEventListener('click', (e) => {
  e.preventDefault();
  sidebarPopup.classList.remove('show');
});