const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');

//move the cursorOuter to be on the mouse position
document.addEventListener('mousemove', e => {
  cursorOuter.style.top = e.pageY + 'px';
  cursorOuter.style.left = e.pageX + 'px';
});
