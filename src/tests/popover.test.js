/**
 * @jest-environment jsdom
 */
import Popover from '../scripts/popover.js';

describe('Popover', () => {
  let trigger;
  let popover;

  beforeEach(() => {
    document.body.innerHTML = `
      <button id="trigger" data-toggle="popover">Click me</button>
    `;
    trigger = document.getElementById('trigger');
    popover = new Popover(trigger, {
      title: 'Test Title',
      content: 'Test Content'
    });
  });

  test('popover is hidden by default', () => {
    expect(popover.popover.style.display).toBe('none');
  });

  test('show() makes popover visible', () => {
    popover.show();
    expect(popover.popover.style.display).toBe('block');
  });

  test('setContent updates title and content', () => {
    popover.setContent('New Title', 'New Content');
    expect(popover.popover.querySelector('.popover-title').textContent).toBe('New Title');
    expect(popover.popover.querySelector('.popover-content').textContent).toBe('New Content');
  });
});