import { addUserAnswersToLocalStorage, getUserAnswersFromLocalStorage} from "../javascript/utils/localStorage.js";
let userAnswersDataBaseArray = [
    //modelo de objeto sección
    // {"futbol":[]},
    // {"basquet":[]},
    // {"tennis":[]},
    // {"voleibol":[]},

];
let sportNamesArray = [];
export let userAnswersDataBase = (userInfo) =>{

    /* si sportNamesArray no incluye el nombre de deporte, 
    lo insertamos como objeto  en userAnswersDataBaseArray*/
    if (!sportNamesArray.includes(userInfo.sport)){
        sportNamesArray.push(userInfo.sport);
        userAnswersDataBaseArray.push({[userInfo.sport]:[]});
    }

    // asignamos el registro de formulario a su objecto sección deporte correspondiente
    userAnswersDataBaseArray.forEach(sportSection => {
        if (Object.keys(sportSection) == userInfo.sport){

            sportSection[userInfo.sport].push(userInfo);
        };
    });

    addUserAnswersToLocalStorage(userAnswersDataBaseArray);
    return userAnswersDataBaseArray;
}