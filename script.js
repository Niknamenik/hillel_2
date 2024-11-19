let offset = 0;
const sliderLine = document.querySelector ('.slider-line');

document.querySelector('.slide_2'). addEventListener('click', function(){
    offset = - 100;
    sliderLine.style.left = offset + '%';
});
document.querySelector('.slide_3'). addEventListener('click', function(){
    offset = - 200;
    sliderLine.style.left = offset + '%';
});
document.querySelector('.slide_1'). addEventListener('click', function(){
    offset = 0;
    sliderLine.style.left = offset + 'px';
});