const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetFullButton = document.querySelector("#resetFull");
const lapButton = document.querySelector("#lap");
const listLaps = document.querySelector("#laps");
const resetButton = document.querySelector("#reset");
let horas = 0;
let minutos = 0;
let segundos = 0;
let milisegundos = 0;
let intervalo = null;
let volta = 1;

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
    aplicarEstilos("", "0 0 10px var(--cor-btn-reset)", "box-shadow 0.5s ease-in-out", "Iniciar", "Parar");
});

resetFullButton.addEventListener("click", () => {  
    clearInterval(intervalo);
    intervalo = null;
    horas = 0;
    minutos = 0;
    segundos = 0;
    milisegundos = 0;
    timer.textContent =  "00:00:00:00";
    listLaps.innerHTML = "";
    volta = 1;
    aplicarEstilos("", "0 0 10px var(--cor-btn-resetFull)", "box-shadow 0.5s ease-in-out", "Iniciar", "Parar");
});

lapButton.addEventListener("click", () => {
    if (timer.textContent === "00:00:00:00") {
        alert("Você não pode adicionar voltas com o cronômetro zerado!");
        return; 
    }
    aplicarEstilos("", "0 0 10px var(--cor-btn-lap)", "box-shadow 0.5s ease-in-out", "Contando", "Parar");
    const laps = document.createElement("li");
    laps.textContent = `Tempo ${volta}: ${formataTempo(horas)}:${formataTempo(minutos)}:${formataTempo(segundos)}:${formataTempo(milisegundos / 10)}`;
    listLaps.appendChild(laps);
    volta++;
});