import { Component } from '../component.js';
import { authFormTitleText, crossIconPath } from '../data.js';
import { authForm } from './modal/auth-form.js';

const crossPng = new Component({ tag: 'img' });
crossPng.setAttribute('src', crossIconPath);

const cancelButton = new Component(
  {
    tag: 'button',
    className: 'cancel-button',
  },
  crossPng
);

const authFormTitle = new Component({ tag: 'h2', text: authFormTitleText, className: 'auth-form-title' });
const modalContainer = new Component({ className: 'modal-container' }, cancelButton, authFormTitle, authForm);

const modal = new Component({ tag: 'dialog', className: 'dialog' }, modalContainer);

const closeModal = () => {
  const modal = document.querySelector('.dialog');
  modal.close();
};

cancelButton.addListener('click', () => closeModal());

export { modal };
