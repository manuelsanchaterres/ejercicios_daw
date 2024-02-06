const selectElement = document.getElementById("car-brands");
let chosenOption = "";
let discount = 0;
let carBrandDiscount = () => {

    chosenOption = selectElement.value;

    if (chosenOption != -1){

        switch (chosenOption) {
            case "ford": 
            
                discount = 10;
                break
            case "seat": 
        
                discount = 8;
                break
            case "citroen": 
    
                discount = 6;
                break
            case "audi": 
    
                discount = 4;
                break   
    
        }

        alert(`El descompte aplicable a un ${chosenOption} es del ${discount}%`)
        let carPrice = parseFloat(prompt(`Introdueixi el preu del seu ${chosenOption}`))
        let priceInfoElement = document.getElementById("car-price-info");
        priceInfoElement.innerHTML = 
        `<p style="text-align:center">Preu Final del seu <span style="color:red; font-weight: 600">${chosenOption}</span> es <span style="color:red; font-weight: 600">${(1-(discount/100))*carPrice}</span> euros.</p>`;
    
    }
   
};
selectElement.addEventListener("change",carBrandDiscount)







