let offset = 0;
const sliderLine = document.querySelector ('.slider-line');

document.querySelector('.slide_1'). addEventListener('click', function(){
    offset = - 0;
    sliderLine.style.left = offset + 'px';
});
document.querySelector('.slide_2'). addEventListener('click', function(){
    offset = - 115.5;
    sliderLine.style.left = offset + '%';
});
document.querySelector('.slide_3'). addEventListener('click', function(){
    offset = -231;
    sliderLine.style.left = offset + '%';
});
document.querySelector('.slide_4'). addEventListener('click', function(){
    offset = -346.5;
    sliderLine.style.left = offset + '%';
});
document.querySelector('.slide_5'). addEventListener('click', function(){
    offset = -462;
    sliderLine.style.left = offset + '%';
});
document.querySelector('.slide_6'). addEventListener('click', function(){
    offset = -577.5;
    sliderLine.style.left = offset + '%';
});