/* 3- Escriu un programa que demani dos números i mostri la suma dels dos en la consola
(console.log) i a la pàgina web (document.write).*/

export let ejercicio3 = () => {

  const nombres = [];
  nombres.push(parseInt(prompt("Introdueixi nombre 1")));
  nombres.push(parseInt(prompt("Introdueixi nombre 2")));
  let sumaNombres = 0;

  for (let i=0; i < nombres.length; i++) {

    sumaNombres += nombres[i];

  }

  console.log(sumaNombres);
  document.body.innerHTML += sumaNombres;
};
