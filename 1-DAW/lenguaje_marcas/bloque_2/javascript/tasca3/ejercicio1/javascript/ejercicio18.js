/* 17- Escriu un programa que calculi aleatòriament un número de l’1 al 100. Després ha de demanar
a l’usuari un número fins que l’encerti.
• Si el número escrit és el correcte, indicarà que ha encertat i el joc acabarà.
• Si el número escrit és major, indicarà: "El número és major".
• Si el número escrit és menor, indicarà: "El número es menor".
• Si l’usuari introdueix alguna cosa que no és un número, indicarà: “No m’enganis”.
*/
export let ejercicio18 = () => {

    let nombreAleatori = Math.floor(Math.random() * 100 + 1);
    let nombreIntroduït = parseInt(prompt("Introdueix nombre elegit"));
    let nombreIntents =1;
    while (nombreAleatori != nombreIntroduït && nombreIntents <= 5) {
       
        if (!nombreIntroduït) {
            alert("No m'enganis, introdueix un nombre vàlid.");
            nombreIntroduït = parseInt(prompt("Introdueix nombre elegit"));
        } else {
            alert(nombreAleatori > nombreIntroduït ? "El número és major":"El número es menor");
            nombreIntroduït = parseInt(prompt("Introdueix nombre elegit"));
        }
        nombreIntents++;


    }

    if (nombreIntents > 5) {

        alert(`Has superat el nombres màxim de 5 intents!!!`);

    } else {

        alert(`Enhorabona, has encertat el nombre aleatori: ${nombreAleatori} en ${nombreIntents} intents.`);
        document.body.innerText += `Enhorabona, has encertat el nombre aleatori: ${nombreAleatori}`;
    
    }


};
