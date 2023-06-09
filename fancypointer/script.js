const cursorOuter = document.querySelector('.cursor-outer');
const cursorInner = document.querySelector('.cursor-inner');


//on page start
document.addEventListener('DOMContentLoaded', () => {
    cursorOuter.style.top = e.pageY - 8 + "px";
	cursorOuter.style.left = e.pageX - 8 + "px";
    cursorOuter.style.transform = "scale(1.33)";
    cursorOuter.style.transform = "scale(1)";
});

//move the cursorOuter to be on the mouse position
document.addEventListener('mousemove', e => {
    cursorOuter.style.top = e.pageY-8 + 'px';
    cursorOuter.style.left = e.pageX-8 + 'px';
});

//on mouse pressed down
document.addEventListener('mousedown', () => {
    cursorOuter.style.transform = 'scale(1.33)';
});

//on mouse released
document.addEventListener('mouseup', () => {
    cursorOuter.style.transform = 'scale(1)';
});

//on mouse hover over a link
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('mouseover', () => {
        cursorOuter.style.transform = 'scale(1.33)';
    });
    link.addEventListener('mouseout', () => {
        cursorOuter.style.transform = 'scale(1)';
    });
});

//on mouse over over a class .button
document.querySelectorAll('.button').forEach(link => {
    link.addEventListener('mouseover', () => {
        cursorOuter.style.transform = 'scale(1.33)';
    });
    link.addEventListener('mouseout', () => {
        cursorOuter.style.transform = 'scale(1)';
    });
});

document.querySelectorAll('input').forEach(link => {
    link.addEventListener('mouseover', () => {
        cursorOuter.style.width = '8px';
        cursorOuter.style.height = '24px';
        cursorOuter.style.borderRadius = '4px';
    });
    link.addEventListener('mouseout', () => {
        cursorOuter.style.width = '16px';
        cursorOuter.style.height = '16px';
        cursorOuter.style.borderRadius = '50%';
    });
});

//on mouse over of ID #not-allowed
document.querySelectorAll('#not-allowed').forEach(link => {
    link.addEventListener('mouseover', () => {
        cursorOuter.style.backgroundImage = "url('/fancypointer/assets/cross.svg')";
        cursorOuter.style.border = "none";
    });
    link.addEventListener('mouseout', () => {
        cursorOuter.style.backgroundImage = "none";
        cursorOuter.style.border = "1px solid #fff";
    });
});