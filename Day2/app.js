const minHand = document.querySelector('.hand-minutes');
const secHand = document.querySelector('.hand-seconds');
const hourHand = document.querySelector('.hand-hours');

function changeEverySecond(){
    const now = new Date();

    //current seconds according to time
    const seconds = now.getSeconds();

    //this will consider horizontal div position but we transformed all divs to 90deg so that we get start at 12 (vertical)
    const secondsDegrees = ((seconds / 60) * 360) +90 ;
    secHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();

    //here in 60 mins it turns 360 so whatever  the minutes are devided and multiplied by 360 ----however in 1 minute min-hand rotates about 6 degrees so we multiplied it by 6
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();

    //here also same hourhand rotates 360deg in 12hrs and in one hour it rotates about 30 deg
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(changeEverySecond, 1000);

changeEverySecond();
