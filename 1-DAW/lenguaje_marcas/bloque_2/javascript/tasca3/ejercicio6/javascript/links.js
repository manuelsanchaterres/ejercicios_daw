// 6- Si tenim el següent codi html, Escriu una funció Javascript que mostri: el número
//     d'enllaços que té la pàgina, l'últim enllaç de la pàgina i quants d'enllaços apunten a Google.


const formButton = document.getElementById("form-user-age-button");
let links = () => {

    const totalLinks = document.querySelectorAll("a");
    const lastLink = totalLinks[totalLinks.length - 1].getAttribute("href");
    alert(`La página conté ${totalLinks.length} enllaços`)
    alert(`L'últim enllaç de la página es  ${lastLink}.`)
    let numberLinksGoogle = 0;

    totalLinks.forEach(link => {
        
        if (link.getAttribute("href").includes(".google.")){

            numberLinksGoogle++;
        }
    });

    alert(`Un total de ${numberLinksGoogle} ${numberLinksGoogle == 1 ? "enllaç apunta a" : "enllaços apunten a"} google`)

};


window.addEventListener("load",(e) =>{
    e.preventDefault();
    links()
})








