/* 6- Crea un programa que guardi dins d'un array els dotze mesos de l'any i després escrigui
aquests mesos en la consola (console.log) i a la pàgina web (document.write).*/

export let ejercicio6 = () => {

  const mesosAny = ["gener", "febrer", "març", "abril", "maig", "juny", "juliol", "agost", "setembre", "octubre", "novembre", "desembre"];
  
  mesosAny.forEach(mesAny => {
    
    console.log(mesAny +"\n");
    document.body.innerText += (mesAny +"\n");
  });
};
