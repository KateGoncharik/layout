import { Component } from '../../component.js';
import {
  loginButtonText,
  loginInputText,
  passwordInputText,
  recoverPasswordText,
  registerButtonText,
  rememberPasswordText,
} from '../../data.js';

const loginButton = new Component({
  tag: 'button',
  className: 'login-button',
  text: loginButtonText,
});
const registerButton = new Component({
  tag: 'button',
  className: 'register-button',
  text: registerButtonText,
});

const loginInput = new Component({ tag: 'input', className: 'login-input' });
const passwordInput = new Component({ tag: 'input', className: 'password-input' });
loginInput.setAttribute('name', 'login');
loginInput.setAttribute('placeholder', loginInputText);

passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('placeholder', passwordInputText);

const rememberMeCheckbox = new Component({ tag: 'input' });
rememberMeCheckbox.setAttribute('type', 'checkbox');
rememberMeCheckbox.setAttribute('id', 'remember-me');

const label = new Component({ tag: 'label', text: rememberPasswordText });
label.setAttribute('for', 'remember-me');

export const authForm = new Component(
  { tag: 'form', className: 'auth-form' },
  loginInput,
  passwordInput,
  new Component({ className: 'remember-me-wrapper' }, rememberMeCheckbox, label),
  new Component({ tag: 'p', text: recoverPasswordText, className: 'recover' }),
  loginButton,
  registerButton
);
