import { Component } from './component.js';
import { descriptionWrapper } from './components/description-wrapper.js';
import { modal } from './components/modal.js';
import { layoutImgPath } from './data.js';

export const createLayout = () => {
  const layoutImg = new Component({ tag: 'img', className: 'layout-img' });
  layoutImg.setAttribute('src', layoutImgPath);

  return new Component(
    {
      className: 'app',
    },
    new Component(
      { className: 'wrapper' },
      descriptionWrapper,
      new Component({ className: 'layout-img-wrapper' }, layoutImg)
    ),
    modal
  );
};
