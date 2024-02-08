// 9- Crea una pàgina web que mostri quatre imatges que representin cercles d'un color (cerca
//     les). Després crea una funció Javascript que quan es passi amb el ratolí per damunt de cada
//     cercle, ha de canviar el color del fons de la pàgina amb el mateix color del cercle seleccionat.
//     Quan es surti de l'àmbit de la imatge, es recuperarà el color de fons inicial.
//      • La pàgina ha de tenir un títol <h1> que anirà dins d'un <header> i un <main>, on aniran
//     les imatges.
//     ◦ CSS pel <h1>: Centrat i text de color.
//     ◦ CSS pel <main>: Una amplada automàtica i una alçada de 500px, Un marge de
//     30px i una vora sòlida de 5px de grossor i de color blau,
//     ◦ CSS per les imatges: Dimensió de 150px per 150px.
    

const circles = document.querySelectorAll(".circle");
let changeCircleColor = (circle) =>{

   //alert(window.getComputedStyle(circle).getPropertyValue("background-color"))
    const circleColor = window.getComputedStyle(circle).getPropertyValue("background-color");
    
    console.log(document.querySelectorAll("main")[0].style.backgroundColor = circleColor);
}
circles.forEach(circle => {
    // circle.addEventListener("mouseover",() =>{

    //     changeCircleColor(circle);
    // });

    circle.addEventListener("mouseover", (event) => {
        event.preventDefault()

        changeCircleColor(circle);

    });
});




// window.addEventListener("load",imageAmmendments);











