const form = document.querySelector(".form");
const formButton = document.querySelector(".btn");
const dateFormInput = document.getElementById("sportStartDate");
// Create a new Date object representing the current date to limit date selection at today
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
const day = String(currentDate.getDate()).padStart(2, '0'); // Add leading zero if needed
const formattedDate = `${year}-${month}-${day}`;
let sportInputValuesArray = [];
dateFormInput.setAttribute("max", formattedDate);

let userInfoForm = () => {
    const sportInputValue = document.querySelector("#sport").value;
    const userAnswers = document.querySelector(".user-answers");
    const formInputs = document.querySelectorAll(".form-input");
    userAnswers.textContent = " ";

    const userInfo = {};
    // creamos objeto userInfo con los datos extraido del formulario
    for (let index = 0; index < formInputs.length; index++) {
        
        userInfo[formInputs[index].getAttribute("name")] = formInputs[index].value;
    }

    if (!sportInputValuesArray.includes(sportInputValue)){

        sportInputValuesArray.push(sportInputValue);
    
    }

    sportInputValuesArray.forEach(sportValue => {

        userAnswers.innerHTML += `
        <section id="${sportValue}">
            <ul style="padding:1rem">
                <li><span>${sportValue}</span>:
                    <ul style="padding-left:2.5rem">
                    </ul>
                </li>
            </ul>
        </section>`

    });

    const sectionListUl = document.querySelector(`section#${sportInputValue}>ul>li>ul`);
    const newLiElement = document.createElement('li');
    newLiElement.innerHTML =`

        <span>${userInfo.userName}</span>, 
        ${userInfo.age} anys, 
        color camiseta ${userInfo.shirtColor}, 
        ${String(new Date(userInfo.sportStartDate).getDate()).padStart(2, '0')}
        /${String(new Date(userInfo.sportStartDate).getMonth() + 1).padStart(2, '0')}
        /${new Date(userInfo.sportStartDate).getFullYear()}

    `;

    sectionListUl.appendChild(newLiElement);
};


formButton.addEventListener("click",(e) =>{
    e.preventDefault();
    userInfoForm()
})







