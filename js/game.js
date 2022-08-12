let possibleWords = ["EMPRESA", "MESSI", "LECHE", "PEPINO", "TECLADOS"];

function addWord() {
  if (content.value.length < 9) {
    possibleWords.push(content.value.toUpperCase());
    return true;
  } else {
    alert("Ingrese una palabra de 8 letras como máximo");
    content.value = "";
    content.focus();
    return false;
  }
};

function hideLines() {
  wordCharacters.forEach((elementP) => {
    elementP.textContent = "_";
    elementP.classList.add("invisible");
    // console.log(elementP);
  });
  equivocaciones.textContent = "";
  equivocaciones.classList.add("invisible");
  information.classList.add("invisible");
}

function showLines() {
  hideLines();
  /*
    hago que todas sean invisibles al principio. Si no lo pongo, pone más guiones de los que en realidad tiene la palabra (imaginate que sale hola y la segunda vez sale sol. para cuando tengas que adivinar sol, vas a tener 4 guiones en lugar de tres)
  */
  let wordToGuess = possibleWords[Math.round(Math.random()* (possibleWords.length - 1))];
  // console.log(possibleWords);
  console.log(wordToGuess);
  for (const character in wordToGuess) {//for in devuelve la posicion. for of el contenido
    wordCharacters[character].classList.remove("invisible")
  }
  if (possibleWords.length != 0) {//me fijo si existe palabra por adivinar
    possibleWords = possibleWords.filter((item) => item != wordToGuess);//retiro la palabra en juego
  } else{
    wordCharacters[0].classList.remove("invisible");
    wordCharacters[0].textContent = "Wow! Adivinaste todas!";
  }
  return "" + wordToGuess;
}