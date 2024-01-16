/* 11- Crea un programa que retorni la quantitat de paraules que hi ha en una cadena de text.
*/

export let ejercicio11 = () => {

 let paraula = prompt("Introdueix cadena de text");

 let paraules = paraula.split(" ");

 console.log(`${paraula} conté ${paraules.length} paraules.`);
 document.body.innerText += `${paraula} conté ${paraules.length} paraules.`
};
