document.addEventListener('DOMContentLoaded', () => {
  const cursorText = document.getElementById('cursor-text');
  const paneItems = document.querySelectorAll('.paneItem');

  document.addEventListener('mousemove', (e) => {
    cursorText.style.left = `${e.pageX}px`;
    cursorText.style.top = `${e.pageY}px`;
  });

  paneItems.forEach((item) => {
    const text = item.querySelector('h2').textContent;
    item.addEventListener('mouseenter', () => {
      cursorText.textContent = `[ ${text} ]`;
      cursorText.style.display = 'block';

      if (getComputedStyle(item).color !== 'rgb(0, 0, 0)') {
        cursorText.style.color = '#c0fe04';
      }
      item.querySelector('h2').textContent = "";
    });

    item.addEventListener('mouseleave', () => {
      cursorText.style.display = 'none';
      item.querySelector('h2').textContent = text;
      cursorText.style.color = '#000';
    });
  });
});