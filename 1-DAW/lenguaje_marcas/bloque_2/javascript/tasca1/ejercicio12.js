/* 12- Escriu un programa que mostri per pantalla el següent patró d’asteriscs:
*
**
***
****
*****
*/

export let ejercicio12 = () => {


    for (let i = 1; i <= 5; i++) {

        let patro = "";

        for (let j = 1; j <= i; j++) {
            
            patro += "*";
        }
        console.log(`${patro}`);
        document.body.innerText += patro + "\n";
    }


};
