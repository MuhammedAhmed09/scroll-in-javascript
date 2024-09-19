let stars = document.getElementById('starts');
let moon = document.getElementById('moon');
let bmw = document.getElementById('bmw');
let mountain3 = document.getElementById('mountain3');
let mountain4 = document.getElementById('mountain4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let main = document.querySelector('.main')

window.onscroll = () => {
    let value = scrollY;
    stars.style.left = value + 'px';
    boat.style.left = value*3 + 'px'; 
    moon.style.top = value*3 + 'px';
    if(scrollY >= 120){
        moon.style.display = 'none';
        main.style.background = 'linear-gradient(to top,#2f9fdb, transparent)'
    }else{
        moon.style.display = 'block';
        main.style.background = 'linear-gradient(to top,#200016, transparent)'
    }
    bmw.style.width = value + 'px';
    if(scrollY >= 157){
        bmw.style.width = 157 + 'px';
        bmw.style.display = 'flex';
    }
    mountain3.style.top = value*1.2 + 'px';
    mountain4.style.top = value + 'px';
    river.style.top = value + 'px';
}