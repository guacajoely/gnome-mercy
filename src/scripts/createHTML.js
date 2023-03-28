//Responsibility: Generate the entire HTML string template for Gnome Mercy by using all other HTML generation components.

import { createCompletions } from "./completions.js"
import { craftButton } from "./craftButton.js"
import { createCrafters } from "./crafters.js"
import { createCraftRequests } from "./craftRequests.js"
import { createIngredients } from "./ingredients.js"
import { RequestForm } from "./requestForm.js"

export const createHTML = () => {
  return `
      <header class='flex row'>
        <img src="./images/gnome.png" style="width: 100px"/>
        <h1>Gnome Mercy</h1>
      </header>
        ${RequestForm()}
      
      <h2>Craft A Request</h2>
      <div id="container-completeRequests" class="flex row">

        <div id="container-dropdowns">
        ${createCraftRequests()}
        ${createCrafters()}
        </div>

        <div id="container-ingredients">
        <h3>Crafting Ingredients</h3>
        ${createIngredients()}
        </div>

      </div>
      
      ${craftButton()}
      ${createCompletions()}`


}
