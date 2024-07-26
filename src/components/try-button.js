import { Component } from '../component.js';
import { tryButtonText } from '../data.js';

const arrowImg = new Component({ tag: 'img' });
arrowImg.setAttribute('src', './src/assets/icon/arrow-up-right.png');

export const tryButton = new Component(
  {
    tag: 'button',
    className: 'try-button',
    text: tryButtonText,
  },
  new Component({ className: 'arrow-wrapper' }, arrowImg)
);
