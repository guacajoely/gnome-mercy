// Responsbility: Manage application state and provide functions to change permanent state with fetch() call to the API.

const API = "http://localhost:8088"

const applicationState = {
  craftTypes: [],
  craftRequests: [],
  crafters: [],
  ingredients: [],
  userChoices: {
    crafterId: 0,
    chosenIngredients: new Set(),
    requestId: 0
  }
};

// Once a new craft completion has been saved in the API, add all of the ingredients chosen by the user.

const createCraftIngredients = (completion) => {
  const fetchArray = [];

  applicationState.userChoices.chosenIngredients.forEach(
    (chosenIngredientId) => {
      fetchArray.push(
        fetch(`${API}/craftIngredients`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ingredientId: chosenIngredientId,
            completionId: completion.id
          })
        })
          .then((response) => response.json())
          .then(() => {
            console.log("Fetch call done");
          })
      );
    }
  );

  // This is where all the fetches (Promises) all run and resolve
  Promise.all(fetchArray).then(() => {
    console.log("All fetches complete");
    applicationState.userChoices.chosenIngredients.clear();
  });
};

export const setIngredients = (id) => {
  // Step 1: Use the has() method to determine if the Set has the ingredient
  // Step 2: If it does, remove it with delete() method
  // Step 3: If it does not, add it with add() method
};


export const fetchCraftTypes = () => {
  return fetch(`${API}/craftTypes`)
      .then(response => response.json())
      .then((responseArray) => {applicationState.craftTypes = responseArray})
}

export const getCraftTypes = () => {
  return applicationState.craftTypes.map(obj => ({ ...obj }))
}

export const fetchCrafters = () => {
  return fetch(`${API}/crafters`)
      .then(response => response.json())
      .then((responseArray) => {applicationState.crafters = responseArray})
}

export const getCrafters = () => {
  return applicationState.crafters.map(obj => ({ ...obj }))
}

export const fetchCraftRequests = () => {
  return fetch(`${API}/craftRequests`)
      .then(response => response.json())
      .then((responseArray) => {applicationState.craftRequests = responseArray})
}

export const getCraftRequests = () => {
  return applicationState.craftRequests.map(obj => ({ ...obj }))
}

export const fetchCompletions = () => {
  return fetch(`${API}/completions`)
      .then(response => response.json())
      .then((responseArray) => {applicationState.completions = responseArray})
}

export const getCompletions = () => {
  return applicationState.completions.map(obj => ({ ...obj }))
}

export const fetchIngredients = () => {
  return fetch(`${API}/ingredients`)
      .then(response => response.json())
      .then((responseArray) => {applicationState.ingredients = responseArray})
}

export const getIngredients = () => {
  return applicationState.ingredients.map(obj => ({ ...obj }))
}