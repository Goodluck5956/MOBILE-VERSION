const menu = document.querySelector('.mobile-menu');
const ham = document.querySelector('.ham');
const xIcon = document.querySelector('.xIcon');
const menuIcon = document.querySelector('.menuIcon');
const main = document.querySelector('.main');
// const logo = document.querySelector('.bold');
const header = document.getElementById('logo');
const projs = document.querySelectorAll('.work');

function projOn() {
  projs.forEach(
    (work) => {
      work.style.filter = 'blur(4px)';
    },
  );
}

function projOff() {
  projs.forEach(
    (work) => {
      work.style.filter = 'blur(0px)';
    },
  );
}

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    xIcon.style.display = 'none';
    menuIcon.style.display = 'block';
  } else {
    menu.classList.add('showMenu');
    xIcon.style.display = 'block';
    menuIcon.style.display = 'none';
  }
}

ham.addEventListener('click', toggleMenu);

const menuLinks = document.querySelectorAll('.mobileLink');

menuLinks.forEach(
  (mobileLink) => {
    mobileLink.addEventListener('click', toggleMenu);
  },
);
