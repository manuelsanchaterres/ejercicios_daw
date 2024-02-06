// 2- Escriu amb un programa que demani dos números i mostri el més gran en la consola.

export let ejercicio2 = () => {
  const nombres = [];
  let major = 0;
  // const nombre1 = prompt("Introdueix nombre 1");
  // const nombre2 = prompt("Introdueix nombre 2");
  // major = nombre1 > nombre2 ? nombre1: nombre2;
  // nombres.push(parseInt(prompt("Introdueixi nombre 1")));
  // nombres.push(parseInt(prompt("Introdueixi nombre 2")));
  nombres.push(prompt("Introdueixi nombre 1"));
  nombres.push(prompt("Introdueixi nombre 2"));

  for (let i = 0; i < nombres.length; i++){

    if(nombres[i] > major){
      major = nombres[i];
    }

    // major = nombres[i] > major ? major = nombres[i]: major;

  };
  // console.log(`El numero mayor es ${mayor}`);
  alert(`El nombre major és ${major}`);
};

