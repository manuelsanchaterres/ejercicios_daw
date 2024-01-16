/* 5- Escriu un programa que demani una paraula i retorni el nombre de caràcters que té la paraula.*/

export let ejercicio5 = () => {

  const paraula = prompt("Introdueix paraula");

  console.log(`Aquesta paraula té ${paraula.length} caràcters`);
  document.body.innerHTML = `Aquesta paraula té ${paraula.length} caràcters`;
};
