/* 14- Escriu un programa que demani una cadena alfanumèrica per pantalla i retorni la mateixa
cadena convertida a minúscules i també convertida a majúscules (en la consola). 15- Escriu un
programa que calculi el factorial d’un número. El programa ha de permetre calcular el factorial de
tots el número que l’usuari desitgi 
*/

export let ejercicio14 = () => {

    let cadenaAlfanumerica = prompt("Introdueixi cadena alfanumérica.")

    console.log(`Cadena Alfanumérica en Majúscules: ${cadenaAlfanumerica.toUpperCase()}`);
    console.log(`Cadena Alfanumérica en Minúscules: ${cadenaAlfanumerica.toLowerCase()}`);
    document.body.innerText += `Cadena Alfanumérica en Majúscules: ${cadenaAlfanumerica.toUpperCase()}\n`;
    document.body.innerText += `Cadena Alfanumérica en Minúscules: ${cadenaAlfanumerica.toLowerCase()}`;

};
