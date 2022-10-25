const canvas = document.querySelector('#drawingCanvas')

canvas.width = window.innerWidth;
canvas.height = windows.innerHeight;

const pig__cursor = document.createElement('img')

pig__cursor.src ='IMG/cursor_cerdito.png';

let paintbrush = pig__cursor;

const context = canvas.getContext('2d')

const handleMouseMove = (event) => {
    const left = event.clientX;
    const top = event.clientY;

    context.drawImage(paintbrush, pig__cursor, left, top)
}

canvas.addEventListener('click', handleClick);
canvas.addEventListener('mousemove', handleMouseMove);