/* 10- Crea un programa que crei un objecte “Persona”, amb les propietats «nom», «edat» i
«telèfon». Després ha d’imprimir totes les dades per consola (console.log) i a la pàgina web
(document.write).
*/

export let ejercicio10 = () => {

  let Persona = new Object();

  Persona.nom = prompt("Introdueix el teu Nom");
  Persona.edat = parseInt(prompt("Introdueix la teva edat"));
  Persona.telefon = parseInt(prompt("Introdueix el teu telèfon"));

  console.log(JSON.stringify(Persona));
  document.body.innerText += JSON.stringify(Persona);
};
