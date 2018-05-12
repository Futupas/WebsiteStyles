var titledata = {
    top: 0,
    toplinksleft: 0,
    fixedtitlewidth: 0
}

function SetDefault() {
    var style = document.querySelector('.title').style;
    style.position = 'fixed';
    style.bottom = 'auto';
    titledata.top = (window.innerHeight * 0.8 - 120);
    style.top = titledata.top + 'px';

    var toplinks = document.querySelectorAll('.header > a.toplink');
    var toplinkswidth = 0;
    for (var i = 0; i < toplinks.length; i++) {
        toplinkswidth += toplinks[i].offsetWidth;
    }
    var toplinksleft = (document.documentElement.clientWidth-toplinkswidth) / 2;
    document.querySelector('.header').style.paddingLeft = toplinksleft + 'px';
    titledata.toplinksleft = toplinksleft;

    for (var i = 0; i < toplinks.length; i++) {
        toplinks[i].style.float = 'left';
    }

    var fixedtitlewidth = 0;
    var littletitle = document.querySelector('.title').cloneNode(true);
    littletitle.classList.add('fixed');
    littletitle.style.opacity = '0';
    document.body.appendChild(littletitle);
    fixedtitlewidth = littletitle.offsetWidth + 20; // 20 extra pixels
    titledata.fixedtitlewidth = fixedtitlewidth;
    littletitle.style.display = 'none';
    littletitle.remove();
}
SetDefault();
window.onresize = function () {
    titledata.top = (window.innerHeight * 0.8 - 120);

    var toplinks = document.querySelectorAll('.header > a.toplink');
    var toplinkswidth = 0;
    for (var i = 0; i < toplinks.length; i++) {
        toplinkswidth += toplinks[i].offsetWidth;
    }
    var toplinksleft = (document.documentElement.clientWidth-toplinkswidth) / 2;
    titledata.toplinksleft = toplinksleft;
    window.onscroll();
};

window.onscroll = function(e) {
    var sk = document.documentElement.scrollTop / window.innerHeight;
    if (sk > 1) sk = 1;
    sk = Math.sqrt(sk);

    var style = document.querySelector('.title').style;
    style.top = (titledata.top * (1-sk)) + 'px';
    style.left = (200 * (1-sk)) + 'px';
    style.fontSize = ((100-30) * (1-sk) + 30) + 'px';
    style.lineHeight = ((120-50) * (1-sk) + 50) + 'px';
    style.height = ((120-50) * (1-sk) + 50) + 'px';

    document.querySelector('.header').style.paddingLeft = 
    ((1-sk)*(titledata.toplinksleft-titledata.fixedtitlewidth) + titledata.fixedtitlewidth) + 'px';
}
