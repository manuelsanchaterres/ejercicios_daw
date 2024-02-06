// 7- Si tenim el següent codi html, escriure una funció Javascript que permeti que la pàgina
// mostri inicialment només la primera part del text (el primer paràgraf), i que després, fent clic
// amb el ratolí damunt un text (que serà per exemple, "clica damunt per veure tot el contingut",
// es pugui veure la resta de paràgrafs.

const paragraphsButton = document.getElementById("show-paragraphs");
const paragraphs = document.querySelectorAll("p");
let counter = 1;
let showParagraphs = () => {

    if (counter <= paragraphs.length - 1){

        paragraphs[counter].classList.remove("invisible");
        counter++
    }

};

paragraphsButton.addEventListener("click",(e) =>{
    e.preventDefault();
    showParagraphs()
})








