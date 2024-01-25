/* 13- Escriu un programa que demani tres números i imprimeixi en la consola el número més petit.
*/

export let ejercicio13 = () => {

    const nombres = [];
    let major;
    nombres.push(parseInt(prompt("Introdueix nombre 1")));
    nombres.push(parseInt(prompt("Introdueix nombre 2")));
    nombres.push(parseInt(prompt("Introdueix nombre 3")));

    nombres.forEach(nombre => {
        major = major > nombre ? major : nombre;
    });

    console.log(`El major nombre dels 3 es ${major}`);
    document.body.innerText += `El major nombre dels 3 es ${major}`;
};
