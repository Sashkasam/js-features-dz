const clickerCounter = document.getElementById('clicker__counter')
const cookie = document.getElementById('cookie')
const clickerSpeed = document.getElementById('speed__counter')
let flag = false;
cookie.onclick = () => { 
    
    flag = !flag
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;
    if(flag) {
        cookie.width += 20;
        cookie.height += 20;
    }else {
        cookie.width -= 20;
        cookie.height -= 20;
    }   
 }

