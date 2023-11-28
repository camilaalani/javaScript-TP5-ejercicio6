/*
6- Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset.
*/

let temporizador;
let segundos;

function iniciar() {
  segundos = document.getElementById("tiempo").value;
  temporizador = setInterval(function () {
    if (segundos < 0) {
      clearInterval(temporizador);
      return;
    }
    let horas = Math.floor(segundos / 3600);
    let minutos = Math.floor((segundos % 3600) / 60);
    let segundosRestantes = segundos % 60;
    document.getElementById("temporizador").textContent =
      String(horas).padStart(2, "0") +
      ":" +
      String(minutos).padStart(2, "0") +
      ":" +
      String(segundosRestantes).padStart(2, "0");
    segundos--;
  }, 1000);
}

function pausar() {
  clearInterval(temporizador);
}

function reset() {
  clearInterval(temporizador);
  segundos = 0;
  document.getElementById("temporizador").textContent = "00:00:00";
  document.getElementById("tiempo").value = "";
}

