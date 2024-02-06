/* 7- Escriu un programa que demani un nota (numèrica), i retorni un missatge de valoració de cada
nota, per exemple: Si s'introdueix un 3, es pot mostrar el missatge en la consola: «la nota 3 és
molt insuficient», si s'introdueix un 7, el missatge podria ser: «El 7 és un notable baix», etc.*/

export let ejercicio7 = () => {

  const notaIntroduïda = parseFloat(prompt("Introdueix Nota de l'1 al 10"));

  if (notaIntroduïda < 5) {
    document.body.innerHTML += `Un ${notaIntroduïda} és insuficient.`
  } 
  else if (notaIntroduïda >=5 && notaIntroduïda < 6) {
    document.body.innerHTML += `Un ${notaIntroduïda} és suficient.`
  } 
  else if (notaIntroduïda >=6 && notaIntroduïda < 7) {
    document.body.innerHTML += `Un ${notaIntroduïda} és bé.`
  } 
  else if (notaIntroduïda >=7 && notaIntroduïda < 8) {
    document.body.innerHTML += `Un ${notaIntroduïda} és notable baix.`
  } 
  else if (notaIntroduïda >=8 && notaIntroduïda < 9) {
    document.body.innerHTML += `Un ${notaIntroduïda} és notable alt.`
  } 
  else if (notaIntroduïda >=9 && notaIntroduïda < 10) {
    document.body.innerHTML += `Un ${notaIntroduïda} és excel·lent.`
  } 
  else if (notaIntroduïda == 10) {
    document.body.innerHTML += `Un ${notaIntroduïda} és mátrícula d'honor.`
  } 
  else {
    document.body.innerHTML += `No es poden introduir notes negatives o més grans que 10.`
  }
};
