import { Component } from './component.js';
import { descriptionWrapper } from './components/description-wrapper.js';
import { imgPath } from './data.js';

export const createLayout = () => {
  const img = new Component({ tag: 'img', className: 'layout-img' });
  img.setAttribute('src', imgPath);

  return new Component(
    {
      className: 'app',
    },
    new Component({ className: 'wrapper' }, descriptionWrapper, new Component({ className: 'layout-img-wrapper' }, img))
  );
};
