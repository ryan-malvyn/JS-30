 
//Objects
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const secondHand = document.querySelector('.second-hand');

function setTime(){
    const date = new Date;
    const seconds = date.getSeconds();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    //Seconds
    let secondTime = ((seconds/60)*360)+90
    secondHand.style.transform = `rotate(${secondTime}deg)`;

    //Hours
    let hourTime = ((hours-12)*30)+90
    hourHand.style.transform = `rotate(${hourTime}deg)`;

    //Minutes
    let minuteTime = ((minutes*6)+90)
    minuteHand.style.transform = `rotate(${minuteTime}deg)`;
}

setInterval(setTime,1000)