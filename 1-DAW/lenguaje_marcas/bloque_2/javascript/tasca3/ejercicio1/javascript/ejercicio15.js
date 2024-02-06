/* 15- Escriu un programa que calculi el factorial d’un número. El programa ha de permetre calcular el factorial de
tots el número que l’usuari desitgi.
*/

export let ejercicio15 = () => {

   let nombre = parseInt(prompt("Introdueix nombre per calcular el factorial."));

    let factorial = (nombre) => {

        if (nombre == 0) {
            return 0;
        }else if (nombre == 1) {

            return 1;
        } else {

            return nombre * factorial(nombre -1);
        }
    }

    console.log(factorial(nombre));
    document.body.innerText += factorial(nombre);

};
