const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');


//on page start
document.addEventListener('DOMContentLoaded', () => {
    cursorOuter.style.top = e.pageY - 8 + "px";
	cursorOuter.style.left = e.pageX - 8 + "px";
    cursorOuter.style.transform = "scale(1.5)";
    cursorOuter.style.transform = "scale(1)";
});

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

//on mouse hover over a link
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        cursorOuter.style.transform = 'scale(1.5)';
    });
    link.addEventListener('mouseout', () => {
        cursorOuter.style.transform = 'scale(1)';
    });
});