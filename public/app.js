"use strict";

const toggleBtn = document.getElementById('main-nav__toggle');
const mainNav = document.getElementById('main-nav');
const btnBefore = document.getElementById('btn-before');
const btnAfter = document.getElementById('btn-after');
const beforeMobile = document.getElementById('before-mobile');
const afterMobile = document.getElementById('after-mobile');


toggleBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (mainNav.classList.contains('main__nav--opened')) {
    mainNav.classList.remove('main__nav--opened')
    mainNav.classList.add('main__nav--closed')

  } else {
    mainNav.classList.remove('main__nav--closed')
    mainNav.classList.add('main__nav--opened')
    
  }
})

btnBefore.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (beforeMobile.classList.contains('visually-hidden')) {
    beforeMobile.classList.remove('visually-hidden');
    afterMobile.classList.add('visually-hidden');
  }
})

btnAfter.addEventListener('click', (evt) => {
  evt.preventDefault();
  if (afterMobile.classList.contains('visually-hidden')) {
    afterMobile.classList.remove('visually-hidden');
    beforeMobile.classList.add('visually-hidden');
  }
})