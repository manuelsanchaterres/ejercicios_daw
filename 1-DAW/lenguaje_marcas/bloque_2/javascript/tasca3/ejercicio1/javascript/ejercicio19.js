/* 19- Escriu un programa que mostri dins d’una web (inicialment buida), una caixa en el centre amb
un color de fons aleatori cada vegada que carreguem la pàgina de nou. (Has de fer servir
Math.random(), Math.floor()). Has d’utilitzar CSS per posar la caixa al centre.
• Has d’especificar el color amb un codi hexadecimal. El format hexadecimal fa servir 6
caràcters. Per exemple: el color vermell és: #FF0000; el color verd és: #00FF00.
*/
export let ejercicio19 = () => {
    
    let arrayHexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let colorAleatori = '#';

    for (let index = 0; index < 6; index++) {
        
        colorAleatori += arrayHexadecimals[Math.floor(((Math.random() * 15) + 1))];
        
    }

    document.body.innerHTML += `<div style="background-color:${colorAleatori}">color</div>`

};