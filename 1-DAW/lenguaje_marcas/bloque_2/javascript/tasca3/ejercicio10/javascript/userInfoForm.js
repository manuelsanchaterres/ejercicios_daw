import { userAnswersDataBase } from "./userAnswersDataBase.js";
import { getUserAnswersFromLocalStorage} from "../javascript/utils/localStorage.js";
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
let userAnswersArray = [];
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

    userAnswersArray = userAnswersDataBase(userInfo);
    userAnswersArray.forEach(sportSection => {

        if (sportSection[Object.keys(sportSection)].length > 0){

            userAnswers.innerHTML += `
            <section id="${Object.keys(sportSection)}">
                <ul style="padding:1rem">
                    <li><span>${Object.keys(sportSection)}</span>:
                        <ul style="padding-left:2.5rem">
                        </ul>
                    </li>
                </ul>
            </section>`

            const sectionListUl = document.querySelector(`section#${Object.keys(sportSection)}>ul>li>ul`);

            sportSection[Object.keys(sportSection)].forEach(userAnswer => {
                const newLiElement = document.createElement('li');
                newLiElement.innerHTML =`
            
                    <span>${userAnswer.userName}</span>, 
                    ${userAnswer.age} anys, 
                    color camiseta ${userAnswer.shirtColor}, 
                    ${String(new Date(userAnswer.sportStartDate).getDate()).padStart(2, '0')}
                    /${String(new Date(userAnswer.sportStartDate).getMonth() + 1).padStart(2, '0')}
                    /${new Date(userAnswer.sportStartDate).getFullYear()}
            
                `;
            
                sectionListUl.appendChild(newLiElement);
            });


        }
    

    });

  
};

// let renderUserAnswers = () => {
//     const sportInputValue = document.querySelector("#sport").value;
//     const userAnswers = document.querySelector(".user-answers");
//     const formInputs = document.querySelectorAll(".form-input");
//     userAnswers.textContent = " ";
//     const userInfo = {};
//     // creamos objeto userInfo con los datos extraido del formulario
//     for (let index = 0; index < formInputs.length; index++) {
        
//         userInfo[formInputs[index].getAttribute("name")] = formInputs[index].value;
//     }

//     userAnswersArray = getUserAnswersFromLocalStorage();
//     if (userAnswersArray.length > 0){
//         userAnswersArray.forEach(sportSection => {

//             if (sportSection[Object.keys(sportSection)].length > 0){

//                 userAnswers.innerHTML += `
//                 <section id="${Object.keys(sportSection)}">
//                     <ul style="padding:1rem">
//                         <li><span>${Object.keys(sportSection)}</span>:
//                             <ul style="padding-left:2.5rem">
//                             </ul>
//                         </li>
//                     </ul>
//                 </section>`

//                 const sectionListUl = document.querySelector(`section#${Object.keys(sportSection)}>ul>li>ul`);

//                 sportSection[Object.keys(sportSection)].forEach(userAnswer => {
//                     const newLiElement = document.createElement('li');
//                     newLiElement.innerHTML =`
                
//                         <span>${userAnswer.userName}</span>, 
//                         ${userAnswer.age} anys, 
//                         color camiseta ${userAnswer.shirtColor}, 
//                         ${String(new Date(userAnswer.sportStartDate).getDate()).padStart(2, '0')}
//                         /${String(new Date(userAnswer.sportStartDate).getMonth() + 1).padStart(2, '0')}
//                         /${new Date(userAnswer.sportStartDate).getFullYear()}
                
//                     `;
                
//                     sectionListUl.appendChild(newLiElement);
//                 });


//             }
        

//         });
//     }
  
// };

formButton.addEventListener("click",(e) =>{
    e.preventDefault();
    userInfoForm()
})

// window.addEventListener("load",(e) =>{
//     renderUserAnswers();

// })








