let randomNumber = Math.floor(Math.random()*11);
let userGuess;
let attempts = 1;

while (attempts < 4 && (userGuess != randomNumber)) {

    userGuess = parseInt(window.prompt("Introdueix nombre a endevinar"));
    if (userGuess == randomNumber) {
        alert(`Enhorabona, has encertat el nombre: ${randomNumber}`)
    } else if (userGuess > randomNumber){
        alert("El nombre a endevinar es menor.")
        attempts++;
    }else if (userGuess < randomNumber){
        alert("El nombre a endevinar es major.")
        attempts++;
    }

}

if (attempts > 3){

    alert("Has superat els 3 intents")
}
