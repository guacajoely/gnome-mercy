// Responsibiity: Initiate process to covert all state to HTML (via the GnomeMercy component) and update the DOM with the final result. Also, listen for any state change and covert state to HTML again.

import { fetchCraftTypes, fetchCraftRequests, fetchCrafters, fetchCompletions, fetchIngredients } from "./dataAccess.js";
import { createHTML } from "./createHTML.js";

const mainContainer = document.querySelector("#container");

// Fetch all of the database so that it's stored in application state. After all data is fetched, invoke GnomeMercy component to kick off the conversion of state to HTML
const render = () => {
    fetchCraftTypes()
    .then(() => fetchCompletions())
    .then(() => fetchCraftRequests())
    .then(() => fetchCrafters())
    .then(() => fetchIngredients())
    .then(() => {
        mainContainer.innerHTML = createHTML()
    })
};



render();

// Listen for state changes and invoke render() when it does
mainContainer.addEventListener("stateChanged", customEvent => {
    render()
})