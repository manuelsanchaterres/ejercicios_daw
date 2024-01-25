/* 11- Crea un programa que retorni la quantitat de paraules que hi ha en una cadena de text.
*/

export let ejercicio11 = () => {

 let paraula = prompt("Introdueix cadena de text");

 console.log(`${paraula} conté ${paraula.split(" ").length} paraules.`);
 document.body.innerText += `${paraula} conté ${paraula.split(" ").length} paraules.`
};
