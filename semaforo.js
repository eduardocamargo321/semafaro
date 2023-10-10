const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorindex = 0;
let intervalid = null;

const trafficLight =(event) => {
    stopautomatic();
    turnOn [event.target.id]();
}

const nextindex = () => colorindex = colorindex <2 ? ++colorindex : 0;

const changecolor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[ colorindex ];
    turnOn[color]();
    nextindex();
}

const stopAutomatic = () => {
    clearInterval(intervalid);
}

const turnOn = {
    'red':       () => img.src = './img/vermelho.png',
    'yellow':    () => img.src = './img/amarelo.png',
    'green':     () => img.src = './img/verde.png',
    'automatic':  () => intervalId = setInterval( changecolor, 1000)
}

buttons.addEventListener('click', trafficlight);