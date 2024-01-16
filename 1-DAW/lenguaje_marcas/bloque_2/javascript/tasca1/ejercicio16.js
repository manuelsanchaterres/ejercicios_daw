/* 16 Escriu un programa que demani a l’usuari el seu nom, el seu salari i la seva edat. Després ha
de mostrar el nom, l’edat i el salari recalculat de la següent manera:
• Si el salari és superior a 2000 euros, no canviarà.
• Si el salari està entre 1000 i 2000 euros, ambdos inclusos, pujarà un 3% si l’edat és
superior a 45 anys i un 10% si l’edat és inferior.
• Si el salari és menor que 1000 euros i és menor de 30 anys, cobrarà exactament 1100
euros, i si és major de 45 anys, el salari pujarà un 15%, i si l’edat està entre 30 i 45 anys, el
salari pujarà un 3%.
*/

export let ejercicio16 = () => {

    const Usuari = new Object();
    Usuari.nom = prompt("Introdueixi el seu Nom");
    Usuari.edat = parseInt(prompt("Introdueixi la seva edat"));
    Usuari.salari = parseFloat(prompt("Introdueixi el seu salari"));

    if (Usuari.salari >= 1000 && Usuari.salari <= 2000) {
        
        if (Usuari.edat >= 45) {
            Usuari.salari *= 1.03; 
        } else {
            Usuari.salari *= 1.10; 
        }

    } else if (Usuari.salari < 1000) {

        if (Usuari.edat < 30) {
            Usuari.salari = 1100;
        } else if (Usuari.edat >=30 && Usuari.edat <=45) {
            Usuari.salari *= 1.03; 
        } else {
            Usuari.salari *= 1.15;
        }
    }

    console.log(JSON.stringify(Usuari));
    document.body.innerText += JSON.stringify(Usuari);
};
