var currentangle = 0;

function AnimateCell(angle, cellnumber){
    if (cellnumber > 9) return;
    document.querySelector('.cells > .cell'+cellnumber).style.transform = 'rotateX('+(angle*90)+'deg)';
    setTimeout(function(){
        AnimateCell(angle, ++cellnumber);
    }, 100);
}

var interval = setInterval(function(){
    currentangle--;
    AnimateCell(currentangle, 1);
}, 8000);

document.body.onclick = function (e) {
    currentangle--;
    AnimateCell(currentangle, 1);

    clearInterval(interval);
    interval = setInterval(function(){
        currentangle--;
        AnimateCell(currentangle, 1);
    }, 8000);
}
