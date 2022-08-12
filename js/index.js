// set up
let sectionOptions = document.querySelector(".options");
let buttons = document.querySelectorAll(".options__button");
let buttonPrimary = document.querySelector(".options__button-primary");
let buttonSecondary = document.querySelector(".options__button-secondary");
let textEntry = document.querySelector(".text-entry");
let content = document.getElementById("content");
let wordCharacters = document.querySelectorAll(".ahorcado__word__character");
let main = document.querySelector(".container");
let ahorcadoUI = document.querySelector(".ahorcado");
let wordInPlay; //variable que contiene la palabra en juego
let information = document.querySelector(".information");
let equivocaciones = document.querySelector(".equivocaciones"); 

let intentos = 8;

//changeUI && function call to play

buttonSecondary.addEventListener("click", () =>{
  switch (buttonSecondary.textContent) {
    case "Agregar nueva palabra": 
      enterWord();
    break;
    case "Cancelar":
      returnToHome();
    break;
    case "Rendirse":
      dibujarAhorcado();
    default:
      break;
  };
});

buttonPrimary.addEventListener("click", () => {
  switch (buttonPrimary.textContent) {
    case "Iniciar juego":
      gamePage();
      break;
    case "Guardar y empezar":
     if (addWord()) gamePage();
      break;
      case "Nuevo juego":
        gamePage();
    default:
      break;
  }
})

// Capturar teclas


let foundPosition = [];
let flag = true; //me avisa si NO adivino la letra

document.addEventListener("keydown", (event) => {
  let keyValue = event.key.toUpperCase();
  for (const character in wordInPlay) {
    if (wordInPlay[character] == keyValue) {
      wordCharacters[character].textContent = keyValue;
      flag = false;
    }
  }
  if (flag) {
    equivocaciones.classList.remove("invisible");
    equivocaciones.textContent += "   " + keyValue;
    intentos--;
    dibujarCanvas(intentos);
  }
  flag = true;
   preguntarSiGano();
})

function preguntarSiGano() {
  let rta = true; //variable que me dice si ganó. Asumo que sí
  wordCharacters.forEach((node) => {
    if (!node.classList.contains("invisible") && node.textContent == "_") {
      rta = false; //no ganó porque aún hay guiones
    }
  });

  if (rta == true) {
    information.classList.remove("invisible");
    information.textContent = "Ganaste!";
  }
}

function enterWord() {//UI para ingresar palabra
  buttonPrimary.textContent = "Guardar y empezar";
  buttonSecondary.textContent = "Cancelar";
  textEntry.classList.remove("invisible")
  main.setAttribute("style", "flex-direction: column;");
};

function returnToHome() {
  buttonPrimary.textContent = "Iniciar juego";
  buttonSecondary.textContent = "Agregar nueva palabra";
  textEntry.classList.add("invisible");
  ahorcadoUI.classList.add("invisible");
  main.setAttribute("style", "");
};

function gamePage() {
  intentos = 8;
  dibujarBaseHorca();
  textEntry.classList.add("invisible");
  buttonPrimary.textContent = "Nuevo juego";
  buttonSecondary.textContent = "Rendirse";
  ahorcadoUI.classList.remove("invisible");
  main.setAttribute("style", "flex-direction: column; justify-content: space-between;");
  if (window.innerWidth < 718){
    sectionOptions.setAttribute("style", "min-height: 136px");
    buttons[0].setAttribute("style", "height: 60px;");
    buttons[1].setAttribute("style", "height: 60px");
  }
  wordInPlay = showLines();
}