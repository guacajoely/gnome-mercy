// Responsibility: Generate HTML for checkboxes for each ingredient and store each choice in transient state.

import { getIngredients } from "./dataAccess.js"

export const createIngredients = () => {

  const ingredients = getIngredients()

  return `
    <ul id="list-ingredients">
        ${ingredients.map(ingredient => {
                  return `<li><input type="checkbox" name="ingredient" value="${ingredient.id}"/> ${ingredient.name}</li>`}).join("")
          }
    </ul>`
  }