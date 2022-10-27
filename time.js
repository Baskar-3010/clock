function getTime() {
    var c = document.querySelector('.clock');
    var time = new Date();
    var d=time.getDate()
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    var txt = 'AM';

    if (h > 12) {
        h = h - 12;
        txt = 'PM';

    }
    else if (h == 0) {
        h = 12;
        txt = 'AM';
    }
    h = h <= 9 ? '0' + h : h;
    m = m <= 9 ? '0' + m : m;
    s = s <= 9 ? '0' + s : s;

    c.innerHTML = `${h} : ${m} : ${s} ${txt}`;
}

getTime();
setInterval(getTime, 1000);