const formButton = document.getElementById("form-user-age-button");
let userAge = () => {

    let formInputs = document.querySelectorAll(".form-input");
   
    formInputs.forEach(formInput => {
        if (formInput.getAttribute("id") == 'user-age'){
            let userAge = formInput.value;
            let portalInfo = document.getElementById("portal-link");
            if (userAge >= 18){
                portalInfo.innerHTML = 
                `<p style="text-align:center">Enllaç portal FP de Balears : <a href="https://www.caib.es/govern/index.do?lang=ca" target="_blank">Pitja aquí</a></p>`;
                portalInfo.classList.remove("invisible");
            } else {
                portalInfo.classList.add("invisible");
                alert("Has de tenir més de 18 anys per accedir al portal d'FP")
            }
        }
    });
    
};


formButton.addEventListener("click",(e) =>{
    e.preventDefault();
    userAge()
})








