let userAnswersDataBaseArray = [

    {"futbol":[]},
    {"basquet":[]},
    {"tennis":[]},
    {"voleibol":[]},

]

export let userAnswersDataBase = (userInfo) =>{

    // userAnswersDataBaseArray.forEach(sportSection => {
    //     if (Object.keys(sportSection) != userInfo.sport){

    //         userAnswersDataBaseArray.push({`${userInfo.}`:[]});
    //     }
    // });
    userAnswersDataBaseArray.forEach(sportSection => {
        if (Object.keys(sportSection) == userInfo.sport){

            sportSection[userInfo.sport].push(userInfo);
            // console.log(sportSection[userInfo.sport]);
            // sportSection[userInfo.sport].push(userInfo);
        };
    });
    return userAnswersDataBaseArray;
}