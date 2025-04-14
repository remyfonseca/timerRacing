const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");
let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo = null;

const formataTempo = (valor) =>{
    return valor < 10 ? "0" + valor : valor;
}

const atualizaTempo = () => {
    milisegundos ++; 
    if (milisegundos >= 100) { 
        milisegundos = 0;
        segundos++;
    }
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
    }
    if (minutos >= 60) {
        minutos = 0;
        horas++;
    }
    timer.textContent = `${formataTempo(horas)}:${formataTempo(minutos)}:${formataTempo(segundos)}:${formataTempo(milisegundos)}`;
}

startButton.addEventListener("click", () => {
    if (!intervalo) {
        intervalo = setInterval(atualizaTempo, 10); 
    }
    timer.style.color = "";
    timer.style.boxShadow = "0 0 10px var(--cor-timer-texto)";
    timer.style.transition = "box-shadow 0.5s ease-in-out";
    startButton.textContent = "Contando";
});


stopButton.addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
    timer.style.color = "var(--cor-erro)";
    timer.style.boxShadow = "0 0 10px var(--cor-erro)";
    timer.style.transition = "box-shadow 0.5s ease-in-out";
    startButton.textContent = "Iniciar";
});

resetButton.addEventListener("click", () => {  
    clearInterval(intervalo);
    intervalo = null;
    horas = 0;
    minutos = 0;
    segundos = 0;
    timer.textContent = "00:00:00:00";
    timer.style.color = "";
    timer.style.boxShadow = "";
    timer.style.transition = "box-shadow 0.5s ease-in-out";
    startButton.textContent = "Iniciar";
});