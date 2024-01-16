/* 8- Crea un programa per saber si un número (demanat prèviament), és imparell o parell. S’ha de
poder demanar tants de números com l’usuari vulgui.
*/

export let ejercicio8 = () => {

  const nombresIntroduïts = []
  let nombre = parseInt(prompt("Introdueix nombre"));

  while (nombre != 0) {
    
    nombresIntroduïts.push(nombre);
    nombre = parseInt(prompt("Introdueix nombre"));
  }
  
  nombresIntroduïts.push(nombre);
  nombresIntroduïts.forEach(nombresIntroduït => {
    
    return document.body.innerText += nombresIntroduït % 2 == 0 ? `${nombresIntroduït} és parell\n` : `${nombresIntroduït} és imparell\n`;

  });

};
