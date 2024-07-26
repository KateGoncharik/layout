import { Component } from '../component.js';
import { description, titleText } from '../data.js';
import { tryButton } from './try-button.js';

export const descriptionWrapper = new Component(
  { className: 'description-wrapper' },
  new Component(
    { className: 'description-container' },
    new Component({
      tag: 'h1',
      className: 'title',
      text: titleText,
    }),
    new Component({
      tag: 'p',
      className: 'description',
      text: description,
    })
  ),
  tryButton
);
