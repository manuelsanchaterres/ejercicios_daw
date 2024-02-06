/* 9- Crea un programa que donada una cadena de text, mostri en la consola el text de manera
inversa.
*/

export let ejercicio9 = () => {

  const inputText = prompt("Introdueixi text per girar");
  let reversedText = "";

  for (let index = inputText.length - 1; index >= 0; index--) {
    
    reversedText += inputText[index];

  }

  console.log(reversedText);
  document.body.innerText = reversedText;

};
