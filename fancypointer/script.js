const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');

//move the cursorOuter to be on the mouse position
document.addEventListener('mousemove', e => {
  cursorOuter.style.top = e.pageY-8 + 'px';
  cursorOuter.style.left = e.pageX-8 + 'px';
});

//on mouse pressed down
document.addEventListener('mousedown', () => {
    cursorOuter.style.transform = 'scale(1.5)';
});

//on mouse released
document.addEventListener('mouseup', () => {
    cursorOuter.style.transform = 'scale(1)';
});