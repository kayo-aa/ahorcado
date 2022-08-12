var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");
let color = "#0A3871"
pincel.lineWidth = "2";
pincel.lineCap = "round";

function limpiarPantalla() {
    pincel.clearRect(0,0,304,100);
    pincel.fillStyle = "#F3F5FC";
    pincel.fillRect(0,0,304,170);
}

function dibujarBaseHorca() {
    limpiarPantalla();  
    pincel.fillStyle = color;
    pincel.fillRect(150 * 0.25, 200 * 0.75, 300 * 0.75, 20 * 0.75);
    pincel.fillStyle = color;
    pincel.fillRect(190 * 0.25, 180 * 0.75, 20 * 0.75, 20 * 0.75);  
}


function dibujarHorca() {      

    pincel.beginPath();
    pincel.moveTo(55, 145);
    pincel.lineTo(55, 20);
    pincel.strokeStyle = color;
    pincel.stroke();
    
    pincel.beginPath();
    pincel.moveTo(55, 20);
    pincel.lineTo(170, 20);
    pincel.strokeStyle = color;
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(170, 20);
    pincel.lineTo(170, 40);
    pincel.strokeStyle = color;
    pincel.stroke()
}

function dibujarCabeza() {
    pincel.beginPath();
    pincel.arc(171, 59, 16, 0, 2*3.14);
    pincel.strokeStyle = color;
    pincel.stroke();
}

function dibujarCuerpo() {
    pincel.beginPath();
    pincel.moveTo(171, 78);
    pincel.lineTo(171, 118);
    pincel.strokeStyle = color;
    pincel.stroke();
}

function dibujarBrazoIzquierdo() {
    pincel.beginPath();
    pincel.moveTo(169, 85);
    pincel.lineTo(135, 90);
    pincel.strokeStyle = color;
    pincel.stroke();
}
function dibujarBrazoDerecho() {
    pincel.beginPath();
    pincel.moveTo(172, 85);
    pincel.lineTo(208, 90);
    pincel.strokeStyle = color;
    pincel.stroke();
}

function dibujarPiernaIzquierda() {
    pincel.beginPath();
    pincel.moveTo(170, 119);
    pincel.lineTo(155, 145);
    pincel.strokeStyle = color;
    pincel.stroke();
}
function dibujarPiernaDerecha() {
    pincel.beginPath();
    pincel.moveTo(172, 119);
    pincel.lineTo(185, 145);
    pincel.strokeStyle = color;
    pincel.stroke();
}

function dibujarCarita() {
    pincel.beginPath();
    pincel.moveTo(163, 57);
    pincel.lineTo(169, 50);
    pincel.strokeStyle = color;
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(169, 57);
    pincel.lineTo(163, 50);
    pincel.strokeStyle = color;
    pincel.stroke();
    
    pincel.beginPath();
    pincel.moveTo(172, 57);
    pincel.lineTo(179, 50);
    pincel.strokeStyle = color;
    pincel.stroke();
    pincel.beginPath();
    pincel.moveTo(179, 57);
    pincel.lineTo(172, 50);
    pincel.strokeStyle = color;
    pincel.stroke();
    
    pincel.beginPath();
    pincel.arc(170.5, 75, 10, 4, 5.4, false);
    pincel.strokeStyle = color;
    pincel.stroke();
}
function dibujarAhorcado() {
    limpiarPantalla();
    dibujarBaseHorca()
    dibujarHorca();
    dibujarCabeza();
    dibujarCuerpo();
    dibujarBrazoIzquierdo();
    dibujarBrazoDerecho();
    dibujarPiernaIzquierda();
    dibujarPiernaDerecha();
    dibujarCarita();
}

function dibujarCanvas(intentosRestantes) {
    switch(intentosRestantes) {
        
        case 7:
            dibujarHorca();           
            break;
    
        case 6:
            dibujarCabeza();
            break;
    
        case 5:
            dibujarCuerpo();
            break;
            
        case 4:
            dibujarBrazoIzquierdo();
            break;

        case 3:
            dibujarBrazoDerecho();
            break;

        case 2:
            dibujarPiernaIzquierda();
            break;

        case 1:
            dibujarPiernaDerecha();
            break;

        case 0:
            dibujarAhorcado();
            information.classList.remove("invisible");
            information.textContent = "Perdiste";
            break;
    }
}