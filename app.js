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
    milisegundos += 10; 
    if (milisegundos >= 1000) { 
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
    timer.textContent = `${formataTempo(horas)}:${formataTempo(minutos)}:${formataTempo(segundos)}:${formataTempo(milisegundos / 10)}`;
}
const aplicarEstilos = (corTexto, boxShadow, transicao, botaoStartText, botaoStopText) => {
    timer.style.color = corTexto;
    timer.style.boxShadow = boxShadow;
    timer.style.transition = transicao;
    startButton.textContent = botaoStartText;
    stopButton.textContent = botaoStopText;
};
startButton.addEventListener("click", () => {
    if (!intervalo) {
        intervalo = setInterval(atualizaTempo, 10); 
    }
    aplicarEstilos("", "0 0 10px var(--cor-timer-texto)", "box-shadow 0.5s ease-in-out", "Contando", "Parar");
});


stopButton.addEventListener("click", () => {
    clearInterval(intervalo);
    intervalo = null;
    aplicarEstilos("var(--cor-erro)", "0 0 10px var(--cor-erro)", "box-shadow 0.5s ease-in-out", "Iniciar", "Parado");
});

resetButton.addEventListener("click", () => {  
    clearInterval(intervalo);
    intervalo = null;
    horas = 0;
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    timer.textContent =  "00:00:00:00";
    aplicarEstilos("", "0 0 10px var(--cor-timer-texto)", "box-shadow 0.5s ease-in-out", "Iniciar", "Parar");
});