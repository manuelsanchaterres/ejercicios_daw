export const addUserAnswersToLocalStorage = (userAnswersArray) => {
  localStorage.setItem('userAnswers', JSON.stringify(userAnswersArray));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('userAnswers');
};

export const getUserAnswersFromLocalStorage = () => {
  const result = localStorage.getItem('userAnswers');
  const userAnswers = result ? JSON.parse(result) : null;
  return userAnswers;
};
