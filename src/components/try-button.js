import { Component } from '../component.js';
import { arrowIconPath, tryButtonText } from '../data.js';

const arrowImg = new Component({ tag: 'img' });
arrowImg.setAttribute('src', arrowIconPath);

export const tryButton = new Component(
  {
    tag: 'button',
    className: 'try-button',
    text: tryButtonText,
  },
  new Component({ className: 'arrow-wrapper' }, arrowImg)
);

const showModal = () => {
  const modal = document.querySelector('.dialog');
  modal.showModal();
};

tryButton.addListener('click', showModal());
