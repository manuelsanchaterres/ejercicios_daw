/* 20- Escriu un programa que mostri dins d’una web (inicialment buida), 100 quadrats amb colors
aleatoris col·locats en línia.
*/
export let ejercicio20 = () => {
    
    let arrayHexadecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
    let colorAleatori = '#';

    for (let index = 0; index < 100; index++) {

        for (let index = 0; index < 6; index++) {
        
            colorAleatori += arrayHexadecimals[Math.floor((Math.random() * 16 + 1))-1];
            
        }
        document.body.innerHTML += `<div style="display: inline; background-color:${colorAleatori}; margin-right:0.25rem">color</div>`
        colorAleatori = '#';
    }
   
};