const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

const daysEl = document.getElementById('day');
const monthsEl = document.getElementById('month');
const yearsEl = document.getElementById('year');

function updClock(){
    let h = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    let day = new Date().getDate();
    let mon = new Date().getMonth();
    let year = new Date().getFullYear();

    h = h<10 ? '0' + h : h;
    min = min<10 ? '0' + min : min;
    sec = sec<10 ? '0' + sec : sec;

    day = day<10 ? '0' + day : day;
    mon = mon<10 ? '0' + mon : mon;

    hoursEl.innerHTML = h;
    minutesEl.innerHTML = min;
    secondsEl.innerHTML = sec;

    daysEl.innerHTML = day;
    monthsEl.innerHTML = mon;
    yearsEl.innerHTML = year;

    setTimeout(() => {
        updClock();
    },1000);

};

updClock();