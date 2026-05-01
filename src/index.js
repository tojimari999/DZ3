import './styles/popover.css';
import Popover from './scripts/popover.js';

document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.querySelector('[data-toggle="popover"]');
  
  if (trigger) {
    new Popover(trigger, {
      title: 'Заголовок',
      content: 'Это текст попавера на чистом JS!'
    });
  }
});