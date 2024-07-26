import { Component } from './component.js';

export const layout = new Component(
  {
    className: 'app',
  },
  new Component({ className: 'wrapper' })
);
