// #region Script for navigation bar
const bar = document.getElementById('bar')
const nav = document.getElementById('navbar')
const close = document.getElementById('close');

//#region open navigation bar in mobile screen 
if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}

// #region close navigation bar in mobile screen
if(close){
    close.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}