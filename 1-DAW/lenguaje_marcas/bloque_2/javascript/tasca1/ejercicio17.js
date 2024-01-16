/* 17- Escriu un programa que calculi aleatòriament un número de l’1 al 100. Després ha de demanar
a l’usuari un número fins que l’encerti.
• Si el número escrit és el correcte, indicarà que ha encertat i el joc acabarà.
• Si el número escrit és major, indicarà: "El número és major".
• Si el número escrit és menor, indicarà: "El número es menor".
• Si l’usuari introdueix alguna cosa que no és un número, indicarà: “No m’enganis”.
*/

export let ejercicio17 = () => {

    let nombreAleatori = Math.floor(Math.random() * 100 + 1);
    let nombreIntroduït = parseInt(prompt("Introdueix nombre elegit"));
   
    while (nombreAleatori != nombreIntroduït) {
        if (!nombreIntroduït) {
            alert("No m'enganis, introdueix un nombre vàlid.");
            nombreIntroduït = parseInt(prompt("Introdueix nombre elegit"));
        } else {
            alert(nombreAleatori > nombreIntroduït ? "El número és major":"El número es menor");
            nombreIntroduït = parseInt(prompt("Introdueix nombre elegit"));
        }


    }

    alert(`Enhorabona, has encertat el nombre aleatori: ${nombreAleatori}`);
    document.body.innerText += `Enhorabona, has encertat el nombre aleatori: ${nombreAleatori}`;

};
