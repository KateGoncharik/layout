import { Component } from '../component.js';
import { description } from '../data.js';
import { tryButton } from './try-button.js';

export const descriptionWrapper = new Component(
  { className: 'description-wrapper' },
  new Component({
    tag: 'h1',
    className: 'title',
    text: 'Демо-версия',
  }),
  new Component({
    tag: 'p',
    className: 'description',
    text: description,
  }),
  tryButton
);
