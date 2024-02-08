// 8- Crea una pàgina web que mostri una imatge, i després amb funcions Javascript s'ha de
// poder:
// • Fer invisible la imatge,
// • Fer visible la imatge,
// • Canviar la grandària de la imatge fent-la més grossa i
// • Canviar la grandària de la imatge fent-la més petita.

const buttons = document.querySelectorAll(".btn");
let imageElement = document.getElementById("resizing-image");
buttons.forEach(button => {
    button.addEventListener("click",(event) => {

        event.preventDefault();
        imageAmmendments(button);
    });
});
let imageInvisible = () => {
    imageElement.style.display = "none";
}

let imageVisible = () => {

    imageElement.style.display = "block";
}

let imageBigger = () => {
    const computedWidth = window.getComputedStyle(imageElement).getPropertyValue("width");
    const widthValue = computedWidth.split("px")[0];
    imageElement.style.width = `${widthValue*1.5}px`;
}

let imageSmaller = () => {

    const computedWidth = window.getComputedStyle(imageElement).getPropertyValue("width");
    const widthValue = computedWidth.split("px")[0];
    imageElement.style.width = `${widthValue*0.75}px`;
}

let imageAmmendments = (button) => {
    switch (button.getAttribute("id")) {
        case "image-buttons-invisible":
            imageInvisible();
            break;
    
        case "image-buttons-visible":
            imageVisible();
            break;
        case "image-buttons-bigger":
            imageBigger();
            break;
        case "image-buttons-smaller":
            imageSmaller();
            break;
                    
    }

};



// window.addEventListener("load",imageAmmendments);











