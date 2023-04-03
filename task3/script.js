const trafficLightEl = document.querySelector('#trafficLight');
const  ColorLight = document.querySelector('#ColorLight');
ColorLight.textContent = "черный";

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
    ColorLight.textContent = "желтый";
    ColorLight.style.color = 'yellow';
}

trafficLightEl.addEventListener('click', makeYellow);

function makeRed() {
    trafficLightEl.style.background = ('red');
    trafficLightEl.removeEventListener('click', makeRed);
    trafficLightEl.addEventListener('click', makeGreen);
    ColorLight.textContent = "красный";
    ColorLight.style.color = 'red';
}

trafficLightEl.addEventListener('click', makeRed);

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
    ColorLight.textContent = "зеленый";
    ColorLight.style.color = 'green';
}

trafficLightEl.addEventListener('click', makeGreen);







