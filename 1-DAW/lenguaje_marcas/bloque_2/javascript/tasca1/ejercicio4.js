/* 4- Escriu un programa que demani el teu nom, la teva edat, la teva estatura i el teu estat civil
(casat o solter). Després ha de mostrar aquestes dades en una mateixa línia si l'estat civil és
casat, i en columna si l'estat civil és solter. (resultat per consola i a la pàgina web
(document.write)).*/

export let ejercicio4 = () => {

  const dadesUsuari = [];
  const nom = prompt("Introdueix el teu nom");
  dadesUsuari.push(nom);
  const edat = parseInt(prompt("Introdueix la teva edat"));
  dadesUsuari.push(edat);
  const estatura = parseFloat(prompt("Introdueix la teva estatura"));
  dadesUsuari.push(estatura);
  const estatCivil = prompt("Introdueix el teu estat civil");
  dadesUsuari.push(estatCivil);

  if (estatCivil == 'casat') {

   console.log(dadesUsuari);

  } else {

    dadesUsuari.forEach(dadaUsuari => {
      console.log(dadaUsuari+"\n");
    });
  }
};
