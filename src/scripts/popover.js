// src/scripts/popover.js

export default class Popover {
  constructor(triggerElement, options = {}) {
    this.trigger = triggerElement;
    this.title = options.title || '';
    this.content = options.content || '';
    this.popover = null;
    
    this.init();
  }

  init() {
    // Создаём элемент popover
    this.popover = document.createElement('div');
    this.popover.className = 'popover';
    this.popover.innerHTML = `
      <div class="popover-arrow"></div>
      <h3 class="popover-title"></h3>
      <div class="popover-content"></div>
    `;
    document.body.appendChild(this.popover);
    
    // Скрываем по умолчанию
    this.hide();
    
    // Обработчики событий
    this.trigger.addEventListener('mouseenter', () => this.show());
    this.trigger.addEventListener('mouseleave', () => this.hide());
    this.trigger.addEventListener('focus', () => this.show());
    this.trigger.addEventListener('blur', () => this.hide());
  }

  setContent(title, content) {
    this.title = title;
    this.content = content;
    if (this.popover) {
      this.popover.querySelector('.popover-title').textContent = title;
      this.popover.querySelector('.popover-content').textContent = content;
    }
  }

  show() {
    // Обновляем контент
    this.setContent(this.title, this.content);
    
    // Показываем
    this.popover.style.display = 'block';
    
    // Позиционируем
    this.updatePosition();
  }

  hide() {
    this.popover.style.display = 'none';
  }

  updatePosition() {
    const triggerRect = this.trigger.getBoundingClientRect();
    const popoverRect = this.popover.getBoundingClientRect();
    
    // Позиция сверху по центру относительно триггера (в px, без translate)
    const left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
    const top = triggerRect.top - popoverRect.height - 10; // 10px отступ
    
    this.popover.style.position = 'fixed';
    this.popover.style.left = `${left}px`;
    this.popover.style.top = `${top}px`;
  }
}